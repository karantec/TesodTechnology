import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Briefcase, GraduationCap, FileText, Award } from 'lucide-react';

const InternshipCertificateForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    startDate: '',
    endDate: '',
    internshipDomain: '',
    projectTitle: '',
    skills: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Certificate request submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        college: '',
        degree: '',
        startDate: '',
        endDate: '',
        internshipDomain: '',
        projectTitle: '',
        skills: ''
      });
    }, 3000);
  };
  
  const domains = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Data Science",
    "Machine Learning",
    "Digital Marketing",
    "Content Writing",
    "Graphic Design",
    "Cloud Computing",
    "Cybersecurity"
  ];
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-7xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <h2 className="text-3xl font-bold text-center">Internship Certificate Request</h2>
            <p className="mt-2 opacity-90 text-center">Complete the form below to receive your internship completion certificate</p>
          </div>
          
          {isSubmitted ? (
            <div className="p-8 text-center">
              <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Certificate Request Received!</h3>
              <p className="text-gray-600 mb-4">Your request has been successfully submitted.</p>
              <p className="text-gray-600">You will receive your certificate via email within 3-5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['fullName', 'email', 'phone', 'college', 'degree', 'startDate', 'endDate', 'internshipDomain', 'projectTitle'].map((field, index) => (
                  <div key={index}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')} *</label>
                    <input
                      type={field.includes('Date') ? 'date' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1')}`}
                    />
                  </div>
                ))}
                
                <div className="col-span-full">
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills Gained *</label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="List the main skills you developed during your internship"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="w-full md:w-1/2 lg:w-1/3 px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <Award className="mr-2 h-5 w-5 inline" /> Request Certificate
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipCertificateForm;