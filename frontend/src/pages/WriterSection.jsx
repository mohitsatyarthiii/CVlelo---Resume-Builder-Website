import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";
import Modal from "../components/Modal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const jobTitle = "Marketing Manager";

const descriptions = [
  "Implemented marketing campaigns that increased product awareness by 25%.",
  "Led cross-functional teams to launch successful brand initiatives.",
  "Optimized ad spend, reducing costs by 18% while improving reach."
];

export default function HeroResumeBuilder() {
  const [displayedText, setDisplayedText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");


   const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };
  // Typing effect with blinking caret
  useEffect(() => {
    const currentSentence = descriptions[sentenceIndex];
    if (charIndex < currentSentence.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentSentence.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setSentenceIndex((prev) => (prev + 1) % descriptions.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, sentenceIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-28 px-6">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-100/40"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative shapes */}
      <motion.div
        className="absolute -left-40 -top-40 w-80 h-80 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full blur-3xl opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -right-40 -bottom-40 w-96 h-96 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-40"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered heading section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mb-5 border border-orange-200/50 shadow-sm"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-pink-500 bg-clip-text text-transparent">
              PREMIUM RESUME BUILDER
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Craft Your Masterpiece
            </span>
            <br />
            Resume That Gets Noticed
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your career with our premium resume builder — designed by HR experts to help you stand out in today's competitive job market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Floating Form Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl opacity-30"></div>
            <div className="relative bg-white/90 backdrop-blur-sm border border-white/40 p-8 rounded-xl shadow-2xl">
              <div className="mb-8">
                <label className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wider">
                  Job title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={jobTitle}
                    readOnly
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/90 shadow-sm"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wider">
                  Professional Achievement
                </label>
                <motion.div
                  className="relative"
                  key={sentenceIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    value={`• ${displayedText}`}
                    readOnly
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/90 shadow-sm font-medium"
                  />
                  <div className="absolute right-3 bottom-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3.5 rounded-lg font-semibold shadow-lg flex items-center justify-center space-x-2"
              onClick={handleCTA}
              >
                <span>Add to Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Feature Cards */}
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "50+ Premium Templates",
                description: "Professionally designed layouts that pass ATS screening with flying colors."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "ATS Optimization",
                description: "Our system automatically formats your resume for applicant tracking systems."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: "Expert-Approved Content",
                description: "Get suggestions from our database of recruiter-preferred phrases and terms."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-3 rounded-lg mr-5 text-orange-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center space-x-3"
              onClick={handleCTA}
              >
                <span>Start Building My Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <div>
           <Modal
                    isOpen={openAuthModal}
                    onClose={() => {
                      setOpenAuthModal(false);
                      setCurrentPage("login");
                    }}
                    hideHeader
                  >
                    <div>
                      {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
                      {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
                    </div>
                  </Modal>
        </div>
      </div>
    </section>
  );
}