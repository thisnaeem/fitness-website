'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div className="space-y-8">
              <h1 className="text-5xl font-bold">
                Let's Get In
                <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Have questions? We're here to help you on your fitness journey.
              </p>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="contact-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="contact-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="contact-input"></textarea>
                </div>
                <button type="submit" className="modern-button-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="grid gap-8">
                {[
                  { icon: "📍", title: "Visit Us", content: "123 Fitness Street, NY 10001" },
                  { icon: "📞", title: "Call Us", content: "(555) 123-4567" },
                  { icon: "📧", title: "Email Us", content: "contact@fitlife.com" }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gray-50"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 