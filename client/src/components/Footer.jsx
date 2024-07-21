import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "flowbite-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions"; // Import TermsAndConditions component

const Footer = () => {
  const [showFollowPopup, setShowFollowPopup] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

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
    window.open(url, "_blank");
  };

  const handleCloseFollowPopup = () => {
    setShowFollowPopup(false);
  };

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
  };

  const handleClosePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  const handleTermsClick = () => {
    setShowTermsModal(true);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t-4 border-indigo-400 dark:border-gray-600 py-4 rounded-t-lg border-l-2 border-r-2 border-b-2 border-l-opacity-30 border-r-opacity-30 border-b-opacity-30 border-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center mb-2 md:mb-0 transition-transform transform hover:scale-105"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 rounded-lg text-white mr-1">
              Byte
            </span>
            Sphere
          </Link>

          <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
            >
              About
            </Link>
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
              onClick={() => setShowFollowPopup(true)}
            >
              Follow us
            </button>
            <button
              onClick={handlePrivacyPolicyClick}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
            >
              Privacy Policy
            </button>
            <button
              onClick={handleTermsClick}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-transform transform hover:scale-105"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-500 my-4" />

        <div className="flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; 2024 ByteSphere. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/dheeraj-karwasra-46b211190/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-500 transition-transform transform hover:scale-105"
              aria-label="LinkedIn"
              onClick={() => handleSocialClick("linkedin")}
            >
              <FaLinkedin className="h-6" />
            </a>
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
            <a
              href="https://www.instagram.com/_im_sane_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 dark:text-pink-400 transition-transform transform hover:scale-105"
              aria-label="Instagram"
              onClick={() => handleSocialClick("instagram")}
            >
              <FaInstagram className="h-6" />
            </a>
          </div>
        </div>
      </div>

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
                <a
                  href="https://www.linkedin.com/in/dheeraj-karwasra-46b211190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 dark:hover:text-blue-900 transition-transform transform hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-8 cursor-pointer" />
                </a>
                <a
                  href="https://github.com/noob-master-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-800 transition-transform transform hover:scale-105"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-8 cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/_im_sane_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 dark:hover:text-pink-700 transition-transform transform hover:scale-105"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-8 cursor-pointer" />
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

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
            <PrivacyPolicy /> {/* Insert PrivacyPolicy component */}
          </Modal.Body>
        </Modal>
      )}

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
            <TermsAndConditions /> {/* Insert TermsAndConditions component */}
          </Modal.Body>
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
