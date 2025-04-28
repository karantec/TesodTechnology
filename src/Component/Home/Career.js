import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InternshipCertificateForm from './InternshipCertificat';

const DEFAULT_JOB_BG = "dummy.svg";

const ApplicationModal = ({ isOpen, onClose, job }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: job?.jobTitle || '',
        resumeLink: ''
    });

    useEffect(() => {
        if (isOpen && job) {
            setFormData((prev) => ({
                ...prev,
                position: job.jobTitle || ''
            }));
        }
    }, [isOpen, job]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/resume/create', formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                position: job?.jobTitle || '',
                resumeLink: ''
            });
            alert('Application submitted successfully!');
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">Apply for {job?.jobTitle}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name" 
                            placeholder="Your full name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition duration-200" 
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            placeholder="your.email@example.com" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition duration-200" 
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone"
                            name="phone" 
                            placeholder="Your phone number" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                            className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition duration-200" 
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                        <input 
                            type="text" 
                            id="position"
                            name="position" 
                            value={formData.position} 
                            readOnly 
                            className="w-full p-3 bg-gray-100 text-gray-800 cursor-not-allowed border border-gray-200 rounded-lg" 
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">Resume Link</label>
                        <input 
                            type="url" 
                            id="resumeLink"
                            name="resumeLink" 
                            placeholder="Link to your resume" 
                            value={formData.resumeLink} 
                            onChange={handleChange} 
                            required 
                            className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition duration-200" 
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full p-4 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                        Submit Application
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

const Career = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        axios.get('http://localhost:8000/job/job')
            .then(response => setJobs(response.data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    const filteredJobs = filter === 'all' 
        ? jobs 
        : jobs.filter(job => job.employmentType === filter);

    return (
        <>
            <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                            We're Hiring
                        </div>
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">Join the Tesod Technology Team</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            At Tesod Technology, we embrace innovation, and we believe in creating transformative solutions that push boundaries. 
                            Our team is dedicated to shaping the future with groundbreaking technology.
                        </p>
                        <div className="flex justify-center">
                            <a href="#openings" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition duration-300">
                                View Open Positions
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Benefits Section */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Join Us?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-2">Innovative Work</h4>
                                <p className="text-gray-600">Work on cutting-edge projects that shape the future of technology and make a real impact.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-2">Growth Opportunities</h4>
                                <p className="text-gray-600">Continual learning and development with clear career progression paths and mentorship.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-2">Collaborative Culture</h4>
                                <p className="text-gray-600">Join a diverse team of passionate professionals in a supportive and inclusive environment.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Job Listings */}
                    <div id="openings" className="mb-16">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-800">Current Openings</h3>
                            <div className="flex space-x-2 mt-4 sm:mt-0">
                                <button 
                                    onClick={() => setFilter('all')} 
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    All Positions
                                </button>
                                <button 
                                    onClick={() => setFilter('Full-time')} 
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${filter === 'Full-time' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    Full-time
                                </button>
                                <button 
                                    onClick={() => setFilter('Part-time')} 
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${filter === 'Part-time' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    Part-time
                                </button>
                            </div>
                        </div>
                        
                        {filteredJobs.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-lg text-gray-600">No positions found matching your criteria.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredJobs.map((job) => (
                                    <div 
                                        key={job._id} 
                                        className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-1 flex flex-col border border-gray-100"
                                    >
                                        {/* Card Header with Image */}
                                        <div 
                                            className="h-48 relative"
                                            style={{ 
                                                backgroundImage: `url(${job.imageUrl || DEFAULT_JOB_BG})`, 
                                                backgroundSize: 'cover', 
                                                backgroundPosition: 'center' 
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">{job.employmentType}</span>
                                                <h3 className="text-2xl font-bold text-white mt-2">{job.jobTitle}</h3>
                                            </div>
                                        </div>
                                        
                                        {/* Card Body */}
                                        <div className="p-6 flex-grow">
                                            <div className="mb-6">
                                                <p className="text-gray-700 font-semibold mb-3">Key Skills:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.keySkills.map((skill, idx) => (
                                                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <p className="text-gray-700 font-semibold mb-3">Key Responsibilities:</p>
                                                <ul className="text-gray-600 list-disc pl-5 space-y-2">
                                                    {job.keyResponsibilities.slice(0, 3).map((res, idx) => (
                                                        <li key={idx}>{res}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        {/* Card Footer */}
                                        <div className="p-6 pt-0">
                                            <button 
                                                onClick={() => { setSelectedJob(job); setIsModalOpen(true); }} 
                                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                                            >
                                                Apply Now
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Testimonials */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">What Our Team Says</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="font-bold text-blue-600">JD</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Jane Doe</h4>
                                        <p className="text-gray-600 text-sm">Senior Developer</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"Working at Tesod has been the highlight of my career. The team is incredibly supportive, and I've had opportunities to grow that I wouldn't have had elsewhere."</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="font-bold text-blue-600">MS</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Mike Smith</h4>
                                        <p className="text-gray-600 text-sm">UX Designer</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"The culture at Tesod encourages creativity and innovation. I've been able to work on challenging projects that have significantly improved my professional skills."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={selectedJob} />
            </section>
            <InternshipCertificateForm/>
        </>
    );
};

export default Career;