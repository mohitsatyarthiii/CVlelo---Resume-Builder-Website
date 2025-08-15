import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Send, Mail, MessageSquare, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Initialize EmailJS (replace with your actual IDs)
emailjs.init("YOUR_EMAILJS_USER_ID");

const TESTIMONIALS = [
  {
    name: "Kate Rogers",
    role: "Graphic Designer",
    title: "Amazing Customer Service",
    rating: 5,
    message: "I built my resume in minutes and the support team was lightning fast when I had a doubt. Got an interview within a week!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "John Patel",
    role: "Frontend Engineer",
    title: "Clean Templates, Big Impact",
    rating: 5,
    message: "CVlelo's modern templates made my profile pop. ATS friendly and super easy to tweak. Loved it.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Alex Chen",
    role: "UX Designer",
    title: "FAANG Interview Magnet",
    rating: 5,
    message: "The resume templates are so modern and clean! I landed interviews at 3 FAANG companies within 2 weeks of using CVlelo. The ATS optimization is truly next-level.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Priya Kapoor",
    role: "Marketing Director",
    title: "Veteran Professional Upgrade",
    rating: 5,
    message: "After 15 years in marketing, I thought my resume was strong. CVlelo showed me how outdated it was! The strategic layout helped highlight my achievements perfectly.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "Data Scientist",
    title: "Technical Resume Masterpiece",
    rating: 5,
    message: "Finally a service that understands technical resumes! The projects section layout helped me showcase my work better than any template I've tried before.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sophie Williams",
    role: "HR Manager",
    title: "Recruiter-Approved Format",
    rating: 5,
    message: "As someone who reviews hundreds of resumes, I can confirm these templates are exactly what recruiters want to see. Clear, concise, and professional.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Kim",
    role: "Product Manager",
    title: "Career Transition Success",
    rating: 4,
    message: "Switching from engineering to product management was daunting, but CVlelo's templates helped frame my experience perfectly. Got 3 interview invites in the first week!",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Executive Assistant",
    title: "Professional Polish",
    rating: 5,
    message: "The executive-style templates gave my resume the polished look I needed when applying to Fortune 500 companies. Worth every penny!",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    name: "Jordan Smith",
    role: "Recent Graduate",
    title: "First Job Breakthrough",
    rating: 5,
    message: "As a new grad with limited experience, the way CVlelo helped me highlight my projects and coursework was game-changing. Got my first job offer in 3 weeks!",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Nathaniel Brown",
    role: "Sales Executive",
    title: "Performance-Focused Layout",
    rating: 4,
    message: "The metrics-driven templates helped me quantify my sales achievements effectively. My response rate from recruiters tripled after using CVlelo.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Aisha Mohammed",
    role: "Healthcare Administrator",
    title: "Industry-Specific Solution",
    rating: 5,
    message: "Finally a template that works for healthcare professionals! The clean layout helped organize my certifications and licenses perfectly.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-16">
  <AnimatePresence mode="wait" custom={direction}>
    <motion.div
      key={currentIndex}
      custom={direction}
      initial={{ opacity: 0, x: direction * 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -100 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-50 opacity-60"></div>
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-purple-50 opacity-40"></div>
      
      <div className="relative flex flex-col lg:flex-row items-start gap-10 z-10">
        {/* Profile section */}
        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 opacity-80 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
            <div className="relative overflow-hidden rounded-xl w-32 h-32 border-4 border-white shadow-md">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < currentTestimonial.rating 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-200"}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center lg:text-left">
            <p className="text-xl font-bold text-gray-900">{currentTestimonial.name}</p>
            <p className="text-purple-600 font-medium">{currentTestimonial.role}</p>
          </div>
        </div>

        {/* Testimonial content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{currentTestimonial.title}</h3>
          <div className="relative">
            <Quote className="absolute -left-6 -top-4 text-blue-100 text-5xl" />
            <p className="text-gray-700 text-xl leading-relaxed pl-6 mb-8">
              "{currentTestimonial.message}"
            </p>
            <Quote className="absolute -right-4 -bottom-8 text-blue-100 text-5xl transform rotate-180" />
          </div>
          
          <div className="flex items-center justify-between mt-8">
            <div className="hidden md:block">
              <div className="flex items-center gap-1">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-6' 
                      : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="text-gray-600" size={22} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100"
                aria-label="Next testimonial"
              >
                <ChevronRight className="text-gray-600" size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Mobile navigation dots */}
  <div className="flex justify-center gap-2 mt-8 md:hidden">
    {TESTIMONIALS.map((_, index) => (
      <button
        key={index}
        onClick={() => {
          setDirection(index > currentIndex ? 1 : -1);
          setCurrentIndex(index);
        }}
        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-6' 
          : 'bg-gray-200'}`}
      />
    ))}
  </div>
</div>
  );
};

// Updated FeedbackForm component to match new design
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  return (
    <form className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="text-gray-400" size={18} />
          </div>
          <input
            type="text"
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="John Doe"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="text-gray-400" size={18} />
          </div>
          <input
            type="email"
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="your@email.com"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setFormData({...formData, rating: star})}
              className="focus:outline-none transform hover:scale-110 transition"
            >
              <Star
                size={28}
                className={
                  star <= formData.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.1 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
        <div className="relative">
          <div className="absolute top-3 left-3">
            <MessageSquare className="text-gray-400" size={18} />
          </div>
          <textarea
            rows={5}
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Share your thoughts..."
          ></textarea>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Submit Feedback
        </button>
      </motion.div>
    </form>
  );
};
export const FeedbackPage = () => {
  return (
    <>
    <Navbar/>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br mt-5 from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            What People Say About Us
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-3xl mx-auto text-xl text-gray-600"
          >
            Join thousands of satisfied users who transformed their careers with our services
          </motion.p>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <TestimonialSlider />
        </motion.div>

        {/* Feedback Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Visual */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white"></div>
              </div>
              
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative z-10"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Share Your Experience</h2>
                <p className="text-blue-100 text-lg mb-8">
                  We value your feedback to help us improve and serve you better. Your insights are crucial to our growth.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <User className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Personalized Support</h4>
                      <p className="text-blue-100">Our team responds to every submission personally</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Honest Opinions</h4>
                      <p className="text-blue-100">We appreciate both positive and constructive feedback</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Quick Responses</h4>
                      <p className="text-blue-100">Typically reply within 24 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Form */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-12"
            >
              <div className="max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-800">Feedback Form</h3>
                </div>
                
                <FeedbackForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <Footer/>
    </>
  );
};