import { motion } from "framer-motion";

const features = [
  {
    title: "Lightning Fast",
    desc: "Experience blazing fast performance with optimized code and animations that load in milliseconds.",
    icon: "⚡",
  },
  {
    title: "Beautifully Designed",
    desc: "Crafted with modern aesthetics and pixel-perfect precision for a stunning user experience.",
    icon: "🎨",
  },
  {
    title: "User Friendly",
    desc: "An intuitive interface designed to be simple yet powerful, so anyone can use it with ease.",
    icon: "👌",
  },
];

const AwesomeSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
      >
        Why People <span className="text-blue-500">Love</span> Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12"
      >
        We blend creativity, technology, and passion to deliver experiences that people remember.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all border border-white"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwesomeSection;
