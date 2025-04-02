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
            })
            alert('Application submitted successfully!');
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application.');
        }
    };

    if (!isOpen) return null;

    return (
        
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Apply for {job?.jobTitle}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✖</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 mb-3 bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 rounded-md" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 mb-3 bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 rounded-md" />
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-3 mb-3 bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 rounded-md" />
                    <input type="text" name="position" value={formData.position} readOnly className="w-full p-3 mb-3 bg-gray-100 text-gray-800 cursor-not-allowed border border-gray-200 rounded-md" />
                    <input type="url" name="resumeLink" placeholder="Resume Link" value={formData.resumeLink} onChange={handleChange} required className="w-full p-3 mb-6 bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 rounded-md" />
                    <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

const Career = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/job/job')
            .then(response => setJobs(response.data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <>
         <section className="bg-gray-50 min-h-screen py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-semibold text-gray-800 mb-8">Join the Tesod Technology Team</h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    At Tesod Technology, we embrace innovation, and we believe in creating transformative solutions that push boundaries. 
                    Our team is dedicated to shaping the future with groundbreaking technology. Join us and take your career to the next level.
                </p>
                <div className="mb-8">
                    <h3 className="text-3xl text-gray-800 mb-4">Current Openings</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job) => (
                        <div 
                            key={job._id} 
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:translate-y-1">
                            
                            {/* Card Header with Image */}
                            <div 
                                className="h-48 bg-blue-100 relative"
                                style={{ 
                                    backgroundImage: `url(${job.imageUrl || DEFAULT_JOB_BG})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center' 
                                }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                            </div>
                            
                            {/* Card Body */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-semibold text-gray-800">{job.jobTitle}</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{job.employmentType}</span>
                                </div>
                                
                                <div className="mb-4">
                                    <p className="text-gray-600 font-medium mb-2">Key Skills:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {job.keySkills.map((skill, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <p className="text-gray-600 font-medium mb-2">Key Responsibilities:</p>
                                    <ul className="text-gray-600 list-disc pl-5">
                                        {job.keyResponsibilities.slice(0, 3).map((res, idx) => (
                                            <li key={idx} className="mb-1">{res}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <button 
                                    onClick={() => { setSelectedJob(job); setIsModalOpen(true); }} 
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                                    Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={selectedJob} />
        </section>
        <InternshipCertificateForm/>
        </>
    );
};

export default Career;