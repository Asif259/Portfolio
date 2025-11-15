"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gradient-primary text-white mt-5">
      <div className="container mx-auto text-center py-12 px-4 lg:px-20">
        <div className="flex justify-center mb-6 gap-4">
          <a
            className="btn-social bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary-600 border border-white/30"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Ashrafu15345745"
          >
            <FaTwitter />
          </a>
          <a
            className="btn-social bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary-600 border border-white/30"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ashraful.asif260/"
          >
            <FaFacebookF />
          </a>
          <a
            className="btn-social bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary-600 border border-white/30"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ashrafulasif"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="btn-social bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary-600 border border-white/30"
            href="#"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="flex justify-center mb-4 flex-wrap gap-4 text-sm">
          <a
            className="text-white/80 hover:text-white transition-colors"
            href="#"
          >
            Privacy
          </a>
          <span className="text-white/40">|</span>
          <a
            className="text-white/80 hover:text-white transition-colors"
            href="#"
          >
            Terms
          </a>
          <span className="text-white/40">|</span>
          <a
            className="text-white/80 hover:text-white transition-colors"
            href="#"
          >
            FAQs
          </a>
          <span className="text-white/40">|</span>
          <a
            className="text-white/80 hover:text-white transition-colors"
            href="#"
          >
            Help
          </a>
        </div>
        <p className="m-0 text-white/60">
          &copy; {new Date().getFullYear()} All Rights Reserved. Made with love by Moh. Asraful Hasan Asif
        </p>
      </div>
    </div>
  );
}
