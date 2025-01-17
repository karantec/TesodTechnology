import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Contact Information */}
        <div>
          <h2 className="text-orange-500 font-medium">Contact Us</h2>
          <p className="mt-4 text-gray-900 text-2xl font-medium sm:text-3xl">
            news@nationfirst.com
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li>Monday to Friday: 9am - 6pm</li>
            <li>Weekend: Closed</li>
          </ul>
          <ul className="mt-6 flex gap-6">
            {[
              { label: "Facebook", iconPath: "M22 ...", link: "#" },
              { label: "Instagram", iconPath: "M12.315 ...", link: "#" },
              { label: "Twitter", iconPath: "M8.29 ...", link: "#" },
              { label: "LinkedIn", iconPath: "M12 ...", link: "#" },
            ].map(({ label, iconPath, link }, idx) => (
              <li key={idx}>
                <a
                  href={link}
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">{label}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-orange-500 font-medium">Quick Links</h2>
          <ul className="mt-6 text-sm text-gray-700 space-y-4">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/" },
              { name: "Contact Us", link: "/" },
              { name: "Advertise", link: "/" },
            ].map(({ name, link }, idx) => (
              <li key={idx}>
                <a href={link} className="transition hover:text-orange-500">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-orange-500 font-medium">Categories</h2>
          <ul className="mt-6 text-sm text-gray-700 space-y-4">
            {[
              { name: "भारत", link: "/#india" },
              { name: "विदेश", link: "/#world" },
              { name: "मनोरंजन", link: "/#entertainment" },
              { name: "खेल", link: "/#sports" },
            ].map(({ name, link }, idx) => (
              <li key={idx}>
                <a href={link} className="transition hover:text-orange-500">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-orange-500 font-medium">Policies</h2>
          <ul className="mt-6 text-sm text-gray-700 space-y-4">
            {[
              { name: "Terms & Conditions", link: "/" },
              { name: "Privacy Policy", link: "/" },
              { name: "Cookies", link: "/" },
            ].map(({ name, link }, idx) => (
              <li key={idx}>
                <a href={link} className="transition hover:text-orange-500">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-100 pt-8">
        <p className="text-xs text-gray-500 text-center">
          &copy; 2024. NationFirst News. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
