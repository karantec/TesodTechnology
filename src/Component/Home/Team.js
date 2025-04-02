import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  // Fetch team data from the API
  useEffect(() => {
    axios
      .get('https://tesodtechnologyfinal.onrender.com/teams/Team')
      .then((response) => {
        setTeamMembers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching team data:', error);
        setLoading(false);
      });
  }, []);

  const MemberModal = ({ member, onClose }) => {
    if (!member) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✖</button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <img 
              src={member.photo} 
              alt={member.name} 
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <p className="text-blue-600 font-medium mb-2">{member.position}</p>
              <p className="text-gray-600 mb-2">{member.bio || "Technology enthusiast passionate about innovation and creating impactful solutions."}</p>
              {member.expertise && (
                <div className="mb-2">
                  <p className="text-gray-800 font-medium">Expertise:</p>
                  <ul className="list-disc pl-5 text-gray-600">
                    {member.expertise.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-blue-600 text-xl font-medium">Loading team information...</div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Tesod Technology, our team of talented professionals combines deep technical expertise with 
            innovative thinking to deliver cutting-edge solutions for our clients. Each member brings unique 
            skills and perspectives that drive our success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-56">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x400?text=Team+Member';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600">{member.position}</p>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  {member.skills ? (
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        Innovation
                      </span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        Technology
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-6">
            Tesod Technology is always looking for talented individuals who are passionate about technology and innovation.
            If you're interested in working with us, check out our careers page for current opportunities.
          </p>
          <a 
            href="/careers" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
      
      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </section>
  );
};

export default TeamPage;