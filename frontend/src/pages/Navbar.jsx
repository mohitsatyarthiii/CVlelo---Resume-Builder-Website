import { Menu, X } from "lucide-react";
import React, { useContext, useState } from "react";
import { ProfileInfoCard } from "../components/Cards";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { userContext } from "../context/UserContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/20 border-b border-white/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <motion.img
              src="/svg.png"
              alt="CVlelo Logo"
              className="h-8 w-8"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              CV<span className="text-red-500">lelo</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="relative inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 shadow-md hover:shadow-lg hover:shadow-pink-500/30 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Dashboard
                </button>
                <ProfileInfoCard />
              </>
            ) : (
              <button
                className="relative px-6 py-2 overflow-hidden rounded-full group bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-purple-500/40 transition-all"
                onClick={() => setOpenAuthModal(true)}
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md bg-white/30 hover:bg-white/40 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg"
            >
              <div className="flex flex-col items-center gap-4 py-6">
                {user ? (
                  <>
                    <p className="text-gray-700 font-medium">Welcome Back</p>
                    <button
                      className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-md hover:shadow-lg hover:shadow-pink-500/40 transition-all"
                      onClick={() => {
                        navigate("/dashboard");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Go to Dashboard
                    </button>
                  </>
                ) : (
                  <button
                    className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-md hover:shadow-lg hover:shadow-purple-500/40 transition-all"
                    onClick={() => {
                      setOpenAuthModal(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* AUTH MODAL - placed outside navbar so it centers correctly */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div className="p-4 sm:p-6">
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
