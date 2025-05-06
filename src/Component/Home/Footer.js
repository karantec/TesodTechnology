import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    {
      title: "Company",
      links: ["About Us", "Services", "Case Studies", "Blog"],
    },
    {
      title: "Support",
      links: ["Contact", "FAQ", "Careers", "Support Ticket"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Disclaimer", "Sitemap"],
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Solutions",
    "Software Consulting",
  ];

  const clients = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
    "Company F",
  ];

  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Top Pattern */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>

      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Company Logo */}
            <div>
              <img
                src="/logo2.png"
                alt="Tesod Technology Logo"
                className="w-48 h-auto"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              For inquiries, reach out to our dedicated team for prompt
              assistance. We're here to address any questions or concerns you
              may have. Contact us today for personalized support and expert
              guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-300">
                  160 Sonaura, Bujurg, Campierganj
                  <br />
                  Gorakhpur-273158
                  <br />
                  Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300 hover:text-white transition-colors">
                  +91 7392813136
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@tesodtechnology.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  info@tesodtechnology.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-2">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/Tesod-Technology-Private-Limited/100091670361574/?mibextid=ZbWKwL"
                  className="bg-blue-600/20 p-2 rounded-full hover:bg-blue-600/40 transition-all"
                >
                  <Facebook className="h-5 w-5 text-blue-400" />
                </a>
                <a
                  href="https://x.com/TesodTechnology"
                  className="bg-blue-600/20 p-2 rounded-full hover:bg-blue-600/40 transition-all"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/tesodtechnology/"
                  className="bg-blue-600/20 p-2 rounded-full hover:bg-blue-600/40 transition-all"
                >
                  <Instagram className="h-5 w-5 text-blue-400" />
                </a>
                <a
                  href="#"
                  className="bg-blue-600/20 p-2 rounded-full hover:bg-blue-600/40 transition-all"
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section) => (
            <div key={section.title} className="mt-6 md:mt-0">
              <h3 className="font-bold mb-6 text-lg relative">
                <span className="relative z-10">{section.title}</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500"></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="transition-transform hover:translate-x-1"
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Tesod Technology. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
