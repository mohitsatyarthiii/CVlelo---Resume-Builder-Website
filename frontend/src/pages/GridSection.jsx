import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const CVBuilderBentoGrid = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
   const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Mock data for templates
  const popularTemplates = [
    { 
      name: "Executive", 
      popularity: 42, 
      color: "from-blue-100 to-blue-200",
      image: "/1.webp" 
    },
    { 
      name: "Modern", 
      popularity: 38, 
      color: "from-purple-100 to-purple-200",
      image: "/2.webp" 
    },
    { 
      name: "Minimalist", 
      popularity: 35, 
      color: "from-emerald-100 to-emerald-200",
      image: "/3.webp" 
    },
    { 
      name: "Creative", 
      popularity: 28, 
      color: "from-amber-100 to-amber-200",
      image: "/4.webp" 
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(216, 180, 254, 0.1) 0%, transparent 20%),
          radial-gradient(circle at 90% 30%, rgba(191, 219, 254, 0.1) 0%, transparent 25%),
          radial-gradient(circle at 30% 80%, rgba(254, 215, 170, 0.1) 0%, transparent 20%)
        `
      }}
    >
      {/* Floating bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-200 opacity-10 blur-xl animate-float1"></div>
      <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-blue-200 opacity-10 blur-xl animate-float2"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-amber-200 opacity-10 blur-xl animate-float3"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 }
          }}
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full mb-4 shadow-sm border border-purple-100">
            Why Choose CVlelo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Professional Resume Building
            </span> 
            <br />Made Simple & Effective
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join over 500,000 professionals who landed interviews at top companies with our 
            ATS-optimized resume templates. Our platform combines beautiful design with 
            <span className="font-semibold text-purple-600"> recruiter-approved</span> content to maximize your interview chances.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Large Rating Box */}
          <motion.div
            className={`md:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-200/30 ${
              hoveredBox === 1 ? 'ring-2 ring-purple-300' : ''
            }`}
            onMouseEnter={() => setHoveredBox(1)}
            onMouseLeave={() => setHoveredBox(null)}
            variants={item}
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full mb-3 border border-purple-100">
                    Industry Recognition
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Trusted by Professionals Worldwide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our resume templates are designed with input from HR professionals and career coaches.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center shadow-inner border border-purple-200/30">
                    <svg
                      className="w-12 h-12 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-200/30 shadow-sm hover:shadow-md transition-all">
                  <div className="text-3xl font-bold text-purple-600 mb-1">94%</div>
                  <div className="text-sm text-gray-600">Interview Rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200/30 shadow-sm hover:shadow-md transition-all">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500K+</div>
                  <div className="text-sm text-gray-600">Users Worldwide</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200/30 shadow-sm hover:shadow-md transition-all">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>

              {/* Rating Section */}
              <div className="mt-auto pt-4 border-t border-gray-200/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm font-medium text-gray-600 ml-2">
                      4.9/5 from 12,840 reviews
                    </span>
                  </div>
                  <div className="text-sm text-purple-600 font-medium">Trustpilot</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Template Selection Box */}
          <motion.div 
            className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-200/30 ${hoveredBox === 2 ? 'ring-2 ring-blue-300' : ''}`}
            onMouseEnter={() => setHoveredBox(2)}
            onMouseLeave={() => setHoveredBox(null)}
            variants={item}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-100">
                    Most Popular
                  </span>
                  <div className="text-xs font-medium text-gray-500 flex items-center">
                    <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +42% this month
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Templates</h3>
                <p className="text-gray-600 text-sm">Professionally designed, ATS-optimized layouts</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {popularTemplates.map((template, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br ${template.color} p-3 rounded-lg border border-gray-200/30 hover:shadow-md transition-all duration-200 overflow-hidden`}
                  >
                    <div className="h-20 mb-2 bg-white/80 rounded-md shadow-inner overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{template.name}</span>
                      <span className="text-xs font-medium text-gray-500">{template.popularity}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button onClick={handleCTA} className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  Browse All Templates
                </span>
                <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Expert Review Box */}
          <motion.div 
            className={`md:col-span-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-200/30 ${hoveredBox === 4 ? 'ring-2 ring-purple-300' : ''}`}
            onMouseEnter={() => setHoveredBox(4)}
            onMouseLeave={() => setHoveredBox(null)}
            variants={item}
          >
            <div className="p-8 h-full flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Professional Resume Review
                  </span>
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get your resume reviewed by our career experts and receive personalized suggestions to make your application stand out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={handleCTA} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center">
                    Get Expert Review
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button onClick={handleCTA} className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    How It Works
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center relative">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-purple-200 opacity-20 blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-blue-200 opacity-20 blur-xl animate-pulse"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-200/30">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 shadow-inner border border-purple-200/30">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">What You'll Get:</h4>
                        <p className="text-sm text-gray-500">Detailed analysis within 24-48 hours</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {[
                        {text: 'ATS compatibility score', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'},
                        {text: 'Keyword optimization report', icon: 'M13 10V3L4 14h7v7l9-11h-7z'},
                        {text: 'Industry-specific formatting', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'},
                        {text: 'Content improvement suggestions', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'}
                      ].map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="w-6 h-6 rounded-full bg-purple-100 mr-2 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                            </svg>
                          </div>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add these styles to your global CSS */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-10px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>

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
    </section>
  );
};

export default CVBuilderBentoGrid;