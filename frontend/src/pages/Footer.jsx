import { Github, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">CVlelo</h2>
          <p className="mt-4 text-gray-600 text-sm">
            Crafting elegant digital experiences with precision and passion.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-pink-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-gray-600 hover:text-pink-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="text-gray-600 hover:text-pink-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition">
                FAQ
              </a>
            </li>
             <li>
              <a href="/feedback" className="text-gray-600 hover:text-blue-500 transition">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/mohitsatyarthiii" className="text-gray-500 hover:text-pink-500 transition">
              <Github size={24}/>
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500 transition">
              <Twitter size={24}/>
            </a>
            <a href="https://instagram.com/mohitsatyarthii" className="text-gray-500 hover:text-pink-500 transition">
              <Instagram size={24}/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-200 py-4">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} CVlelo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
