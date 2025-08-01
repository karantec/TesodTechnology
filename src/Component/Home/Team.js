import React, { useEffect, useState } from "react";
import axios from "axios";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  // Fetch team data from the API
  useEffect(() => {
    axios
      .get("https://backend.tesodtechnology.com/teams/Team")
      .then((response) => {
        setTeamMembers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  const MemberModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <p className="text-blue-600 font-medium mb-2">
                {member.position}
              </p>
              <p className="text-gray-600 mb-2">
                {member.bio ||
                  "Technology enthusiast passionate about innovation and creating impactful solutions."}
              </p>
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
        <div className="text-blue-600 text-xl font-medium">
          Loading team information...
        </div>
      </div>
    );
  }

  return (
    <div className="team-page bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Enhanced Animated Gradient */}
      <header className="relative py-32 overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Expert Team
              </span>
            </h1>
            <p className="text-2xl text-blue-100 font-light mb-4">
              The brilliant minds driving innovation at Tesod Technology
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Our diverse team of talented professionals combines deep technical
              expertise with innovative thinking to deliver cutting-edge
              solutions for our clients worldwide.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative">
        {/* Team Members Section - Elevated */}
        <section className="bg-white rounded-2xl shadow-xl p-10 mb-24 transform -mt-24 relative z-20 border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="mr-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.3-1.74-2.39-1.74-.4 0-.8.1-1.13.29l-3.94 2.25c-.5.29-.81.84-.81 1.42v.87c0 1.11.89 2 2 2h1v9h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1H5c-1.1 0-2 .9-2 2v7h2v7h2v-7h2V9c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                Our Talented Professionals
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each member of our team brings unique skills, experience, and
              perspectives that contribute to our collective success. Together,
              we're passionate about creating innovative solutions that make a
              difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member._id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer border border-gray-100"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative h-56">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/300x400?text=Team+Member";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600">{member.position}</p>

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    {member.skills ? (
                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                          >
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
        </section>

        {/* Join Our Team Section - Enhanced */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
              <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Amazing Team
              </h3>
              <p className="text-blue-100 text-xl mb-8">
                Tesod Technology is always looking for talented individuals who
                are passionate about technology and innovation. If you're
                interested in working with us, check out our careers page for
                current opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/careers"
                  className="inline-block px-8 py-3 bg-white text-blue-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  View Open Positions
                </a>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default TeamPage;
