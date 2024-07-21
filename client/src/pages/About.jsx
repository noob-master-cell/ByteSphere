import React from "react";

const About = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white p-10`}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">About ByteSphere</h1>
        <p className="text-xl mb-8">
          At ByteSphere, we believe in unlocking the potential of technology to
          drive innovation and transform the world. Our platform is dedicated to
          providing in-depth tech insights, valuable resources, and a
          collaborative community for developers and tech enthusiasts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to empower individuals with the knowledge and tools
              they need to succeed in the ever-evolving tech landscape. We aim
              to be a beacon of innovation, fostering creativity and promoting
              excellence in the field of technology.
            </p>
          </div>
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-lg">
              Comprehensive tech articles and tutorials
              <br />
              Insights into the latest industry trends and technologies
              <br />
              Community forums for collaboration and support
              <br />
              Resources for career development in tech
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg">
              We are committed to fostering a culture of innovation, excellence,
              and integrity. Our values guide everything we do, ensuring that we
              provide the best possible experience for our community.
            </p>
          </div>
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4">Join Us</h2>
            <p className="text-lg">
              Become a part of ByteSphere and start your journey towards tech
              mastery. Whether you're a beginner or an experienced professional,
              there's something for everyone in our community.
            </p>
            <button
              onClick={() => alert("Join Us feature coming soon!")}
              className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Join Us
            </button>
          </div>
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">
              Have questions or feedback? We'd love to hear from you. Reach out
              to us at contact@bytesphere.com or connect with us on social
              media.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://github.com/noob-master-cell"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dheeraj-karwasra-46b211190/"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/_im_sane_/"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
