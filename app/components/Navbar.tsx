

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            FitLife
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/programs" className="text-gray-700 hover:text-violet-500 transition-colors">Programs</Link>
            <Link href="/trainers" className="text-gray-700 hover:text-violet-500 transition-colors">Trainers</Link>
            <Link href="/nutrition" className="text-gray-700 hover:text-violet-500 transition-colors">Nutrition</Link>
            <Link href="/contact" className="text-gray-700 hover:text-violet-500 transition-colors">Contact</Link>
          </div>

          <button className="gradient-button">
            Join Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
} 