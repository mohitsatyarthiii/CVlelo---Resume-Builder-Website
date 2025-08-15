import React, { useState, useEffect, useContext, useRef } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Navbar from "./Navbar";
import { motion, useInView } from "framer-motion";

const resumeImages = ["/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp", "/6.webp"];

const companyLogos = [
  { name: "Google", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", className: "h-7 md:h-8" },
  { name: "Apple", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", className: "h-7 md:h-8" },
  { name: "Facebook", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg", className: "h-6 md:h-7" },
  { name: "NASA", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png", className: "h-5 md:h-6" },
  { name: "Nike", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png", className: "h-4 md:h-5" }
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  // For triggering animation on re-enter
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === resumeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div ref={sectionRef}>
      {/* Navbar */}
      <div className="py-3 border-b border-gray-200">
        <Navbar />
      </div>

      <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mt-15">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <motion.div className="lg:w-1/2 mb-12 lg:mb-0" variants={fadeUp}>
            <motion.h2
              className="text-base text-gray-700 font-semibold"
              variants={fadeUp}
            >
              Best AI Resume Builder
            </motion.h2>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-gray-800 mt-3 mb-4 leading-tight"
              variants={fadeUp}
            >
              Your success story <br />
              begins with a resume.
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={fadeUp}
            >
              Create a beautiful resumé quickly with the help of artificial intelligence and our
              customizable templates. Impress your future employer with a perfect resume
              created in minutes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
            >
              <button
                onClick={handleCTA}
                className="px-8 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
              >
                Create My Resume
              </button>
              <button
                onClick={handleCTA}
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                See Examples
              </button>
            </motion.div>

            <motion.div className="mt-12" variants={fadeUp}>
              <p className="text-sm text-gray-600 mb-4">
                Trusted by 6 million successful job seekers worldwide.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {companyLogos.map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo.url}
                    alt={logo.name}
                    className={logo.className}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-[350px] h-[450px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-gray-900 w-full h-full flex items-center justify-center">
                {resumeImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Resume template ${index + 1}`}
                    className={`max-w-full max-h-full object-contain transition-opacity duration-500 absolute rounded-2xl ${
                      index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                ))}
                <img
                  src={resumeImages[0]}
                  alt="Resume template placeholder"
                  className="max-w-full max-h-full object-contain rounded-2xl invisible"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Auth Modal */}
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
  );
};

export default HeroSection;
