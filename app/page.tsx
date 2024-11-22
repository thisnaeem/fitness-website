"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InfiniteTestimonials from "./components/InfiniteTestimonials";

export default function Home() {
  return (
    <main className="min-h-screen font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-gradient-to-b from-purple-50/50 to-white px-4 pt-32 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-40 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8 relative"
          >
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-2xl opacity-60" />

            <h1 className="text-6xl md:text-7xl font-bold leading-tight relative">
              Transform Your
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 animate-gradient">
                Body & Life
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Join our premium fitness community and achieve your goals with
              expert guidance and cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="button-modern"
              >
                <span>Start Free Trial</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="button-modern-secondary"
              >
                <span>Learn More</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-gray-100">
              {[
                ["10K+", "Active Users"],
                ["500+", "Expert Trainers"],
                ["98%", "Success Rate"],
              ].map(([stat, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    {stat}
                  </div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <Image
                src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fitness Training"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">Live Training</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="text-sm font-medium">Goal Progress</div>
                  <div className="text-xs text-gray-500">85% Completed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us - Focused on Benefits/Results */}
      <section className="py-24 px-4 bg-gradient-to-br from-violet-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="section-heading">Why Members Choose Us</h2>
            <p className="text-gray-600 text-lg">
              Join thousands who have already transformed their lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                stat: "94%",
                title: "Success Rate",
                description:
                  "Members who achieve their fitness goals within 6 months",
                icon: "🎯",
              },
              {
                stat: "45min",
                title: "Quick Workouts",
                description: "Average workout time needed for optimal results",
                icon: "⚡",
              },
              {
                stat: "2x",
                title: "Faster Progress",
                description:
                  "Members progress twice as fast compared to solo training",
                icon: "📈",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="results-card group"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  {item.stat}
                </div>
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need - Focused on Tools/Features */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="section-heading">Everything You Need to Succeed</h2>
            <p className="text-gray-600 text-lg">
              Cutting-edge tools and features designed for your fitness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Smart Workout Planner",
                description:
                  "AI-powered workout plans that adapt to your progress",
                icon: "🤖",
                features: [
                  "Personalized routines",
                  "Real-time adjustments",
                  "Progress tracking",
                ],
              },
              {
                title: "Nutrition Analytics",
                description:
                  "Track and optimize your nutrition with smart insights",
                icon: "🥗",
                features: [
                  "Meal planning",
                  "Macro tracking",
                  "Recipe suggestions",
                ],
              },
              {
                title: "Live Training Sessions",
                description: "Join live sessions with expert trainers anytime",
                icon: "🎥",
                features: [
                  "24/7 availability",
                  "Interactive feedback",
                  "Group motivation",
                ],
              },
              {
                title: "Recovery Tools",
                description: "Monitor and optimize your recovery process",
                icon: "🔄",
                features: [
                  "Sleep analysis",
                  "Stress monitoring",
                  "Recovery tips",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="tools-card"
              >
                <span className="text-4xl mb-6 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="section-heading mb-6">Meet Our Expert Trainers</h2>
            <p className="text-gray-600 text-lg">
              Work with world-class fitness professionals dedicated to your
              success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[500px] overflow-hidden rounded-3xl">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {trainer.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{trainer.role}</p>

                    {/* Social Links */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <a
                        href="#"
                        className="text-white hover:text-violet-400 transition-colors"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-violet-400 transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-heading mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg">
              Real results from real people
            </p>
          </motion.div>
        </div>
        <InfiniteTestimonials />
      </section>

      {/* App Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold leading-tight">
                Track Your Progress with Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
                  Smart Fitness App
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Stay motivated and achieve your fitness goals with real-time
                tracking, personalized insights, and AI-powered recommendations.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Real-time Progress Tracking", icon: "📊" },
                  { title: "AI Workout Recommendations", icon: "🤖" },
                  { title: "Nutrition Planning", icon: "🥗" },
                  { title: "Community Support", icon: "👥" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-medium text-gray-800">
                      {feature.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fitness App Interface"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-12 top-20 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    🎯
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">
                      Daily Goal
                    </div>
                    <div className="text-green-500 font-bold">87% Complete</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const features = [
  {
    title: "Expert Trainers",
    description:
      "Train with certified professionals who create personalized plans to help you reach your fitness goals faster.",
    icon: "💪",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Custom Workouts",
    description:
      "Get AI-powered workout plans that adapt to your progress and schedule, ensuring optimal results.",
    icon: "🎯",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Nutrition Plans",
    description:
      "Access personalized meal plans and nutrition tracking to fuel your fitness journey effectively.",
    icon: "🥗",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Live Classes",
    description:
      "Join energetic live streaming sessions with our community from anywhere in the world.",
    icon: "🎥",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your achievements with advanced analytics and milestone celebrations.",
    icon: "📊",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Community Support",
    description:
      "Connect with like-minded fitness enthusiasts and share your journey together.",
    icon: "🤝",
    gradient: "from-red-500 to-pink-500",
  },
];

const trainers = [
  {
    name: "John Miller",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
  {
    name: "Sarah Wilson",
    role: "Yoga Specialist",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    name: "Mike Johnson",
    role: "Fitness Expert",
    image:
      "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=800&q=80",
  },
];
