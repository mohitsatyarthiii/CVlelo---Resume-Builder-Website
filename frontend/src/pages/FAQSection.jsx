import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/contact-us")
  }

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with creating my resume?",
      answer: "Simply sign up for an account, choose a template from our premium collection, and start filling in your details. Our intuitive dashboard guides you through each section step by step."
    },
    {
      question: "What happens after I sign up?",
      answer: "After signing up, you'll be directed to your personal dashboard where you can create multiple resumes, track your progress, and manage your account settings."
    },
    {
      question: "Can I try before I commit to a subscription?",
      answer: "Absolutely! You can create and preview your resume with our free plan. Some premium templates and features require a subscription to download."
    },
    {
      question: "How do I select the right template for my industry?",
      answer: "We categorize our templates by industry and career level. Use our template filter to find designs optimized for your field, whether you're in tech, healthcare, business, or creative industries."
    },
    {
      question: "What makes your resume builder different from others?",
      answer: "Our builder combines ATS optimization with beautiful design. We offer real-time content suggestions, recruiter-approved phrasing, and the ability to create multiple versions of your resume for different job applications."
    },
    {
      question: "How do I download my completed resume?",
      answer: "Once you're satisfied with your resume, simply click the 'Download' button in your dashboard. You can choose between PDF, Word, or plain text formats. Premium users get access to additional formatting options."
    },
    {
      question: "Can I edit my resume after downloading it?",
      answer: "Yes! All your resumes are saved in your dashboard. You can return anytime to make updates, create new versions, or generate different formats."
    },
    {
      question: "Is my personal data secure?",
      answer: "We take data security seriously. Your information is encrypted and protected. You can delete your account and all associated data at any time from your settings."
    }
  ];

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(250, 250, 255, 0.9) 0%, rgba(245, 248, 255, 0.9) 100%)",
        backdropFilter: "blur(20px)"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-50 to-purple-50 opacity-20 transform -skew-y-3 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-100 opacity-10 blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 shadow-sm border border-blue-100">
            Need Help?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked
            </span> Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Find quick answers to common questions about creating, editing, and downloading your perfect resume.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "shadow-md" : ""
                  }`}
                  whileHover={{ y: -3 }}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 overflow-hidden"
                      >
                        <div className="pb-5 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Still have questions?
          </h4>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
          onClick={handleOnClick}
          >
            Contact Our Support Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;