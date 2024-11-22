'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    achievement: "Lost 30 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote: "FitLife transformed my approach to fitness. The trainers are amazing!"
  },
  {
    name: "Mark Williams",
    achievement: "Gained 15 lbs muscle mass",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote: "The personalized plans helped me achieve my dream physique."
  },
  {
    name: "Emma Davis",
    achievement: "Completed first marathon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "From couch potato to marathon runner. FitLife made it possible!"
  },
  {
    name: "James Chen",
    achievement: "Improved flexibility 200%",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote: "The yoga programs completely transformed my mobility and strength."
  },
  {
    name: "Lisa Rodriguez",
    achievement: "Recovered from injury",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    quote: "The rehabilitation program was exactly what I needed to get back in shape."
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function InfiniteTestimonials() {
  return (
    <div className="relative overflow-hidden py-10">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-[450px] flex-shrink-0 bg-white rounded-2xl p-8
                       shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]
                       hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]
                       transition-all duration-300 border border-gray-100/50
                       backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover ring-4 ring-violet-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-1.5 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                <p className="text-sm  bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-medium">
                  {testimonial.achievement}
                </p>
              </div>
            </div>
            <blockquote className="text-gray-600 overflow-clip leading-relaxed italic">
              "{testimonial.quote}"
            </blockquote>
          </div>
        ))}
      </motion.div>
    </div>
  );
} 