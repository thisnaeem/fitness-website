'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const trainers = [
  {
    name: "John Miller",
    role: "Strength Coach",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    specialties: ["Powerlifting", "Bodybuilding", "HIIT"],
    experience: "10+ years",
    certifications: ["NASM CPT", "CrossFit L2", "Precision Nutrition"],
    bio: "Specializing in strength and conditioning, John has helped hundreds of clients achieve their fitness goals.",
    availability: "Mon-Fri",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Wilson",
    role: "Yoga & Wellness Coach",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    specialties: ["Vinyasa Yoga", "Meditation", "Flexibility"],
    experience: "8 years",
    certifications: ["RYT 500", "Mindfulness Coach", "Wellness Practitioner"],
    bio: "Sarah combines traditional yoga practices with modern wellness techniques to create transformative experiences.",
    availability: "Tue-Sat",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Marcus Chen",
    role: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=800&q=80",
    specialties: ["HIIT", "Functional Training", "Weight Loss"],
    experience: "6 years",
    certifications: ["ACE CPT", "TRX Certified", "Nutrition Coach"],
    bio: "Marcus specializes in high-intensity workouts that deliver maximum results in minimum time.",
    availability: "Mon-Thu",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Emma Rodriguez",
    role: "Dance Fitness Expert",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    specialties: ["Zumba", "Dance Cardio", "Rhythm Training"],
    experience: "7 years",
    certifications: ["Zumba Licensed", "AFAA Group Fitness", "Dance Therapy"],
    bio: "Emma brings the joy of dance to fitness, making every workout feel like a party.",
    availability: "Wed-Sun",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "David Park",
    role: "Sports Performance Coach",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    specialties: ["Athletic Training", "Speed & Agility", "Injury Prevention"],
    experience: "12 years",
    certifications: ["CSCS", "USAW", "FMS Certified"],
    bio: "David helps athletes of all levels improve their performance and prevent injuries.",
    availability: "Mon-Fri",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Lisa Thompson",
    role: "Senior Fitness Specialist",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80",
    specialties: ["Senior Fitness", "Rehabilitation", "Low Impact Training"],
    experience: "15 years",
    certifications: ["ACE Senior Fitness", "ACSM CPT", "Rehabilitation Specialist"],
    bio: "Lisa specializes in helping seniors maintain their strength, balance, and independence.",
    availability: "Tue-Sat",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function Trainers() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Meet Our Expert
              <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Fitness Trainers
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Work with certified professionals dedicated to your fitness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="trainer-card"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{trainer.name}</h2>
                    <p className="text-violet-600 font-medium">{trainer.role}</p>
                  </div>

                  <p className="text-gray-600">{trainer.bio}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty) => (
                          <span key={specialty} className="px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Certifications</h3>
                      <ul className="space-y-1 text-gray-600">
                        {trainer.certifications.map((cert) => (
                          <li key={cert}>• {cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="text-gray-600">
                      Available: {trainer.availability}
                    </div>
                    <button className="button-modern">
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 