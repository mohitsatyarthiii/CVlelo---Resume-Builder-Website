import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function CTASection() {
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

  return (
    <section className="relative flex justify-center items-center px-6 py-16 bg-gradient-to-r from-pink-50 via-white to-blue-50 rounded-3xl shadow-lg overflow-hidden">
      {/* Gradient background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200/30 rounded-2xl blur-3xl"></div>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-10 hover:scale-[1.02] transition-transform duration-300"
      >
        <div className="text-center">
          {/* Small label */}
          <p className="text-gray-600 font-medium mb-2">🚀 Your Career Starts Here</p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Create Your Resume for Free
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Build a stunning, ATS-friendly resume in minutes. Choose from
            professional templates, customize your design, and download instantly.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
              Unlimited Edits
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              ATS-Ready Templates
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleCTA}
              className="px-6 py-3 rounded-full bg-white border border-gray-300 hover:border-gray-400 shadow-sm text-gray-700 font-medium transition"
            >
              Learn More
            </button>
            <button
              onClick={handleCTA}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium shadow-md hover:shadow-lg flex items-center gap-2 transition"
            >
              Build My Resume <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
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
}
