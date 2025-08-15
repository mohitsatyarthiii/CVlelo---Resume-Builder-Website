// src/pages/About.jsx
import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  Rocket,
  Github,
  Linkedin,
} from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export default function About() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true, margin: "-20% 0px" });

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      {/* ===== Floating pastel blobs (background, do not change colors as per your theme) ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-pink-200/60 blur-3xl animate-float-slow" />
        <div className="absolute top-40 -right-10 h-72 w-72 rounded-[40%] bg-blue-200/50 blur-3xl animate-float-slower" />
        <div className="absolute bottom-[-60px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-200/50 blur-3xl animate-float-medium" />
      </div>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pt-28"
      >
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative grid items-center gap-10 rounded-3xl bg-white/60 p-8 shadow-xl ring-1 ring-white/50 backdrop-blur-xl md:grid-cols-[1.1fr,0.9fr]"
        >
          {/* copy */}
          <div>
            <motion.div
              variants={fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm"
            >
              <Sparkles size={16} />
              About CVlelo
            </motion.div>

            <motion.h1
              variants={fadeUp(0.05)}
              className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CVlelo
              </span>{" "}
              helps you create professional resumes that get you hired faster.
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600"
            >
              Our resume builder creates{" "}
              <span className="font-medium text-gray-800">
                ATS-friendly resumes
              </span>{" "}
              in minutes. Choose from modern templates, get expert suggestions,
              and download your perfectly formatted resume as PDF.
            </motion.p>

            <motion.div
              variants={fadeUp(0.15)}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={handleCTA}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
              >
                Build Your Resume Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 transition hover:border-gray-400"
              >
                View Templates
              </button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={fadeUp(0.2)}
              className="mt-8 grid grid-cols-3 gap-4 sm:max-w-md"
            >
              {[
                { k: "50+", v: "Templates" },
                { k: "10K+", v: "Resumes Built" },
                { k: "85%", v: "Success Rate" },
              ].map((it) => (
                <div
                  key={it.v}
                  className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-extrabold text-gray-900">
                    {it.k}
                  </div>
                  <div className="text-sm text-gray-600">{it.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* portrait */}
          <motion.div
            variants={fadeUp(0.1)}
            className="relative mx-auto aspect-square w-72 max-w-full sm:w-80"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white to-gray-50" />
            <motion.img
              src="/4.webp" // example resume image
              alt="Professional Resume Example"
              className="h-full w-full rounded-[2rem] object-obtain shadow-2xl ring-1 ring-black/5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-4 -top-4 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg ring-1 ring-black/5"
            >
              <Star size={16} className="text-yellow-500" />
              ATS-Optimized
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 8 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -right-3 bottom-6 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg ring-1 ring-black/5"
            >
              <Rocket size={16} className="text-purple-600" />
              Fast & Easy
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STORY ===== */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid items-center gap-10 rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-white/50 backdrop-blur-xl md:grid-cols-2"
        >
          <motion.img
            variants={fadeUp(0)}
            src="/dashboard.png" // dashboard screenshot
            alt="CVlelo Dashboard"
            className="h-full w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
          />
          <div>
            <motion.h2
              variants={fadeUp(0.05)}
              className="text-3xl font-bold text-gray-900"
            >
              Build a resume that stands out
            </motion.h2>
            <motion.p
              variants={fadeUp(0.1)}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              We help job seekers create professional resumes that pass through
              Applicant Tracking Systems (ATS) while impressing hiring managers.
              <span className="font-medium text-gray-800">
                {" "}
                Get more interviews with less effort
              </span>
              .
            </motion.p>
            <motion.ul
              variants={fadeUp(0.15)}
              className="mt-6 grid gap-3 text-gray-700"
            >
              <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                💎 Premium templates crafted for your specific field
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                ⚡️ Real-time formatting and layout adjustments
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                ♿ Accessibility checked for all templates
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </section>

      {/* ===== MEET THE FOUNDER ===== */}
      {/* ===== MEET THE FOUNDER ===== */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid items-center gap-10 rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-white/50 backdrop-blur-xl md:grid-cols-2"
        >
          <div>
            <motion.h2
              variants={fadeUp(0.05)}
              className="text-3xl font-bold text-gray-900"
            >
              Meet the Founder
            </motion.h2>
            <motion.p
              variants={fadeUp(0.1)}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              Hi, I'm{" "}
              <span className="font-medium text-gray-800">Mohit Satyarthi</span>
              , the creator of CVlelo. As a full-stack developer with experience
              at Growthbox, I understand how challenging job hunting can be.
            </motion.p>
            <motion.p
              variants={fadeUp(0.15)}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              I built CVlelo to solve the pain points I faced when creating my
              own resume - the struggle with formatting, ATS optimization, and
              making it stand out. My goal is to make professional resume
              building accessible to everyone.
            </motion.p>
            <motion.div
              variants={fadeUp(0.2)}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href="https://linkedin.com/in/mohitsatyarthii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0A66C2]/90"
              >
                <Linkedin size={16} />{" "}
                {/* Add this import at top: import { Linkedin, Github } from "lucide-react" */}
                LinkedIn
              </a>
              <a
                href="https://github.com/mohitsatyarthiii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp(0.1)}
            className="relative mx-auto aspect-square w-64 max-w-full sm:w-72"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white to-gray-50" />
            <motion.img
              src="/mohit.jpg" // Your photo
              alt="Mohit Satyarthi"
              className="h-full w-full rounded-[2rem] object-obtain border-gray-500 border-5 shadow-2xl ring-1 ring-black/5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-3 -top-4 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg ring-1 ring-black/5"
            >
              <Rocket size={16} className="text-purple-600" />
              Founder & Developer
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="rounded-3xl bg-white/60 p-8 shadow-xl ring-1 ring-white/50 backdrop-blur-xl"
        >
          <motion.h3
            variants={fadeUp(0)}
            className="text-2xl font-bold text-gray-900"
          >
            Why Choose CVlelo?
          </motion.h3>
          <motion.p variants={fadeUp(0.05)} className="mt-2 text-gray-600">
            We combine beautiful design with practical functionality to help you
            land your dream job.
          </motion.p>

          <motion.div
            variants={fadeUp(0.1)}
            className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          >
            {[
              "ATS-Friendly Formats",
              "50+ Professional Designs",
              "Smart Content Tips",
              "Instant PDF Download",
              "Secure Online Storage",
              "Works on All Devices",
              "Cover Letter Builder",
              "Help Center Access",
            ].map((skill) => (
              <div
                key={skill}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 text-center font-semibold text-gray-800 shadow-sm transition will-change-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="pointer-events-none absolute -inset-8 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120px 60px at 50% 50%, rgba(236,72,153,0.20), rgba(59,130,246,0.20) 60%, transparent 70%)",
                  }}
                />
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-10 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-extrabold">
            Ready to build your perfect resume?
          </h3>
          <p className="max-w-2xl text-white/90">
            Join thousands of professionals who landed interviews at top
            companies with CVlelo-created resumes. It takes just minutes to get
            started.
          </p>
          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition hover:shadow-lg"
          >
            Create My Resume
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>
      </section>

      {/* keyframes for floating blobs */}
      <style>{`
        @keyframes float-slow { 
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(6px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes float-medium { 
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-14px) translateX(-8px) scale(1.03); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        @keyframes float-slower { 
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(-10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 10s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
      `}</style>

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
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
      <Footer />
    </main>
  );
}
