// Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀", {
            position: "top-right",
          });
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message ❌", {
            position: "top-right",
          });
        }
      );
  };

  return (
<>
    <div className="mb-5">
        <Navbar/>
    </div>
    
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-10 p-8 rounded-2xl shadow-xl bg-white/60 backdrop-blur-xl border border-white/40"
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col justify-center text-gray-800"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Let’s Connect ✨
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Got a question or an idea? Fill out the form and I’ll get back to you
            as soon as possible. I’m always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="space-y-3 text-gray-700">
            <p>📧 <span className="font-medium">mohitsatyarthi11@gmail.com</span></p>
            <p>📍 <span className="font-medium">Pune, Maharastra, India</span></p>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-lg space-y-4 border border-gray-200"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 hover:scale-[1.02]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 hover:scale-[1.02]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 hover:scale-[1.02]"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-md"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
    <div>
        <Footer/>
    </div>
    </>
  );
}
