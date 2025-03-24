import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { title: 'Company', links: ['About Us', 'Services', 'Case Studies', 'Blog'] },
    { title: 'Support', links: ['Contact', 'FAQ', 'Careers', 'Support Ticket'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Sitemap'] }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Software Consulting'
  ];

  const clients = [
    'Company A', 
    'Company B', 
    'Company C', 
    'Company D', 
    'Company E', 
    'Company F'
  ];

  const products = [
    'Product 1', 
    'Product 2', 
    'Product 3', 
    'Product 4', 
    'Product 5', 
    'Product 6'
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* Company Info */}
<div className="flex flex-col items-start">
  {/* Company Logo */}
  <img 
    src="tesod.png"  // Replace with actual logo URL
    alt="Tesod Technology Logo"
    className="w-80 h-20 mb-4"
  />

  {/* Description */}
  <p className="text-sm text-blue-100 mb-4">
    For inquiries, reach out to our dedicated team for prompt assistance. We're here to address any questions or concerns you may have. Contact us today for personalized support and expert guidance.
  </p>
</div>

            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-sm">160 Sonaura, Bujurg,Campierganj Gorakhpur-273158 Uttar Pradesh India</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span className="text-sm">+91 7392813136</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span className="text-sm">info@tesodtechnology.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services, Clients, and Products Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Our Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Clients */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Our Clients</h3>
            <ul className="space-y-2">
              {clients.map((client) => (
                <li key={client}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {client}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 border-t border-blue-700 pt-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <div className="flex max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-800"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-50 transition-colors flex items-center">
              <Send className="mr-2" /> Subscribe
            </button>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-100">
            © 2025 Tesod Technology. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/people/Tesod-Technology-Private-Limited/100091670361574/?mibextid=ZbWKwL" className="hover:text-white transition-colors">
              <Facebook />
            </a>
            <a href="https://x.com/TesodTechnology" className="hover:text-white transition-colors">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/tesodtechnology/" className="hover:text-white transition-colors">
              <Instagram />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
