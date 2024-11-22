'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const programs = [
  {
    id: "strength-training",
    title: "Strength Training",
    description:
      "Build muscle and increase strength with our comprehensive program",
    duration: "12 weeks",
    level: "All Levels",
    category: "Strength",
    image: "/strength.jpg",
    features: [
      "Personalized workout plans",
      "Progressive overload tracking",
      "Form check videos",
      "Nutrition guidance",
    ],
    schedule: [
      { day: "Monday", focus: "Upper Body" },
      { day: "Wednesday", focus: "Lower Body" },
      { day: "Friday", focus: "Full Body" },
    ],
    price: "$99/month",
  },
  {
    id: "hiit-cardio",
    title: "HIIT & Cardio",
    description:
      "Burn fat and improve endurance with high-intensity interval training",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Cardio",
    image: "/hiit.jpg",
    features: [
      "Interval-based workouts",
      "Heart rate monitoring",
      "Calorie tracking",
      "Recovery guidance",
    ],
    schedule: [
      { day: "Tuesday", focus: "HIIT" },
      { day: "Thursday", focus: "Cardio" },
      { day: "Saturday", focus: "Mixed" },
    ],
    price: "$79/month",
  },
  {
    id: "yoga-flexibility",
    title: "Yoga & Flexibility",
    description:
      "Enhance flexibility, balance, and mental wellness through yoga",
    duration: "10 weeks",
    level: "All Levels",
    category: "Wellness",
    image: "/yoga.jpg",
    features: [
      "Daily yoga sessions",
      "Meditation guides",
      "Flexibility tracking",
      "Breathing exercises",
    ],
    schedule: [{ day: "Daily", focus: "Varied Practices" }],
    price: "$89/month",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Journey",
    description: "Achieve sustainable weight loss with a balanced approach",
    duration: "16 weeks",
    level: "Beginner",
    category: "Weight Loss",
    image: "/weight-loss.jpg",
    features: [
      "Customized meal plans",
      "Combined cardio & strength",
      "Progress photos",
      "Support group access",
    ],
    schedule: [
      { day: "Monday", focus: "Cardio" },
      { day: "Wednesday", focus: "Strength" },
      { day: "Friday", focus: "HIIT" },
      { day: "Saturday", focus: "Active Recovery" },
    ],
    price: "$119/month",
  },
  // Add more programs...
];

export default function Programs() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-violet-50 via-white to-pink-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Life With Our
            <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Premium Fitness Programs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed programs to achieve your specific fitness goals
          </p>
        </motion.div>
      </section>

      {/* Program Filters */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="program-card"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      {program.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{program.title}</h2>
                    <p className="text-gray-600">{program.description}</p>
                  </div>

                  <div className="flex gap-4">
                    <div className="program-stat">
                      <span className="text-violet-500">⏱️</span>
                      {program.duration}
                    </div>
                    <div className="program-stat">
                      <span className="text-violet-500">📊</span>
                      {program.level}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-violet-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Weekly Schedule</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {program.schedule.map((day) => (
                        <div key={day.day} className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-sm font-medium">{day.day}</div>
                          <div className="text-xs text-gray-500">{day.focus}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="text-2xl font-bold text-violet-600">
                      {program.price}
                    </div>
                    <button className="button-primary hover:shadow-white/20">
                      Join Program
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br justify-center from-violet-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 text-white/80">Start your journey today with a free trial</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="button-modern"
          >
            <span>Start Free Trial</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}