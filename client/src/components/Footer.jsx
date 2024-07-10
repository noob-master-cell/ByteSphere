import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "flowbite-react"; // Importing Modal component from Flowbite-react library
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Importing Font Awesome icons for social media

const Footer = () => {
  const [showFollowPopup, setShowFollowPopup] = useState(false); // State to manage visibility of Follow Us popup
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false); // State to manage visibility of Privacy Policy modal
  const [showTermsModal, setShowTermsModal] = useState(false); // State to manage visibility of Terms & Conditions modal

  // Function to handle clicks on social media icons
  const handleSocialClick = (socialMedia) => {
    let url = "";
    switch (socialMedia) {
      case "linkedin":
        url = "https://www.linkedin.com/in/dheeraj-karwasra-46b211190/";
        break;
      case "github":
        url = "https://github.com/noob-master-cell";
        break;
      case "instagram":
        url = "https://www.instagram.com/_im_sane_/";
        break;
      default:
        return;
    }
    // Open social media link in new tab
    window.open(url, "_blank");
  };

  // Function to close Follow Us popup
  const handleCloseFollowPopup = () => {
    setShowFollowPopup(false);
  };

  // Function to show Privacy Policy modal
  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
  };

  // Function to close Privacy Policy modal
  const handleClosePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  // Function to show Terms & Conditions modal
  const handleTermsClick = () => {
    setShowTermsModal(true);
  };

  // Function to close Terms & Conditions modal
  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t-4 border-indigo-400 dark:border-gray-800 py-4 rounded-t-lg border-l-2 border-r-2 border-b-2 border-l-opacity-30 border-r-opacity-30 border-b-opacity-30 border-opacity-30">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Tech Blog Logo and Home link */}
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center mb-2 md:mb-0 transition-transform transform hover:scale-105"
          >
            {/* Logo text with gradient background */}
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white mr-2">
              Tech
            </span>
            Blog
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
            {/* About Link */}
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
            >
              About
            </Link>
            {/* Follow Us Button */}
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
              onClick={() => setShowFollowPopup(true)}
            >
              Follow us
            </button>
            {/* Privacy Policy Modal Trigger */}
            <button
              onClick={handlePrivacyPolicyClick}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
            >
              Privacy Policy
            </button>
            {/* Terms & Conditions Modal Trigger */}
            <button
              onClick={handleTermsClick}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

        {/* Horizontal line separator */}
        <hr className="border-gray-300 dark:border-gray-700 my-4" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-300">
            &copy; 2024 Tech Blog
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/dheeraj-karwasra-46b211190/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-gray-300 transition-transform transform hover:scale-105"
              aria-label="LinkedIn"
              onClick={() => handleSocialClick("linkedin")}
            >
              <FaLinkedin className="h-6" />
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/noob-master-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 transition-transform transform hover:scale-105"
              aria-label="GitHub"
              onClick={() => handleSocialClick("github")}
            >
              <FaGithub className="h-6" />
            </a>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/_im_sane_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 dark:text-gray-300 transition-transform transform hover:scale-105"
              aria-label="Instagram"
              onClick={() => handleSocialClick("instagram")}
            >
              <FaInstagram className="h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Follow Us Popup */}
      {showFollowPopup && (
        <Modal
          show={true}
          size="sm"
          popup={true}
          onClose={handleCloseFollowPopup}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Follow Us on:
              </h3>
              <div className="flex justify-center space-x-4">
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/dheeraj-karwasra-46b211190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-8 cursor-pointer" />{" "}
                  {/* Increased icon size */}
                </a>
                {/* GitHub Icon */}
                <a
                  href="https://github.com/noob-master-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-8 cursor-pointer" />{" "}
                  {/* Increased icon size */}
                </a>
                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/_im_sane_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-105"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-8 cursor-pointer" />{" "}
                  {/* Increased icon size */}
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <Modal
          show={true}
          size="lg"
          popup={true}
          onClose={handleClosePrivacyPolicy}
        >
          <Modal.Header onClose={handleClosePrivacyPolicy}>
            Privacy Policy
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700 dark:text-gray-300">
              Insert your Privacy Policy content here...
            </p>
          </Modal.Body>
        </Modal>
      )}

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <Modal
          show={true}
          size="lg"
          popup={true}
          onClose={handleCloseTermsModal}
        >
          <Modal.Header onClose={handleCloseTermsModal}>
            Terms & Conditions
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700 dark:text-gray-300">
              Insert your Terms & Conditions content here...
            </p>
          </Modal.Body>
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
