'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const nutritionPlans = [
  {
    title: "Custom Meal Planning",
    description: "Personalized nutrition plans based on your goals",
    features: [
      "Weekly meal plans",
      "Grocery lists",
      "Recipe database",
      "Macro tracking",
      "Nutritionist support"
    ],
    price: "$79/month",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Performance Nutrition",
    description: "Optimize your athletic performance with expert guidance",
    features: [
      "Pre/post workout nutrition",
      "Supplement guidance",
      "Hydration planning",
      "Performance tracking",
      "Recovery optimization"
    ],
    price: "$99/month",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    gradient: "from-blue-500 to-cyan-500"
  }
];

const nutritionFeatures = [
  {
    title: "Personalized Meal Plans",
    description: "AI-powered meal planning based on your preferences and goals",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=80"
  },
  {
    title: "Macro Tracking",
    description: "Track your macros and calories with our intuitive tools",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80"
  },
  {
    title: "Recipe Database",
    description: "Access thousands of healthy recipes with nutrition information",
    icon: "📱",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80"
  }
];

export default function Nutrition() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Fuel Your Fitness
                <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  With Expert Nutrition
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Personalized nutrition plans and expert guidance to optimize your results
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="button-modern"
              >
                <span>Get Started</span>
              </motion.button>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80"
                alt="Healthy Nutrition"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Smart Nutrition Features</h2>
            <p className="text-gray-600 text-lg">
              Advanced tools to help you reach your nutrition goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {nutritionFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Plans */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-gray-600 text-lg">
              Flexible nutrition plans designed for your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {nutritionPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-modern"
                    >
                      <span>Get Started</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 