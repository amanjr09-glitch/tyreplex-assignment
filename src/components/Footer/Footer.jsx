import React from "react";
import "./Footer.css"; // Import custom CSS
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// Data for Quick Links and Social Media
const quickLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Products" },
  { href: "#", label: "Services" },
  { href: "#", label: "Contact Us" },
  { href: "#", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "#", icon: <FaFacebookF /> },
  { href: "#", icon: <FaTwitter /> },
  { href: "#", icon: <FaLinkedinIn /> },
  { href: "#", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-between">
          {/* Footer Column 1: About Us */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="text-uppercase footer-heading">About Us</h5>
            <p className="footer-text">
              At Tyreplex, we specialize in offering a wide range of high-quality tires to suit every vehicle and driving condition. 
              Our mission is to provide exceptional value through innovative tire solutions and top-notch customer service, 
              ensuring that you get the right tire for your needs with convenience and confidence.
            </p>
          </div>

          {/* Footer Column 2: Quick Links */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h5 className="text-uppercase footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-black">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Column 3: Contact Information */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase footer-heading">Contact Us</h5>
            <p className="footer-contact">
              <i className="bi bi-house-door"></i> 1234 Street Name, Gurgaon, Haryana India
            </p>
            <p className="footer-contact">
              <i className="bi bi-envelope"></i> info@tyreplex.com
            </p>
            <p className="footer-contact">
              <i className="bi bi-phone"></i> +123 456 7890
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-black me-2 footer-social-icon"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-black">
          <p className="mb-0 footer-bottom">
            &copy; 2024 Tyreplex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
