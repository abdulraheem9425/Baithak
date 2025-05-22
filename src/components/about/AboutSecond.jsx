import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

// Team member data with bio
const teamMembers = [
  {
    name: "Ayesha Khan",
    role: "Founder & Creative Director",
    image: "/assets/images/aboutcard2.jpg",
    linkedin: "#",
    instagram: "#",
    bio: "Ayesha brings the soul to Baithak with her creative vision and relentless drive. She's the mastermind behind our unique ambiance and cultural touch.",
  },
  {
    name: "Sara Malik",
    role: "Head Chef",
    image: "/assets/images/aboutcard1.jpg",
    linkedin: "#",
    instagram: "#",
    bio: "With 10+ years of culinary experience, Sara infuses traditional recipes with a modern twist, making every bite memorable.",
  },
  {
    name: "Zaid Ali",
    role: "Marketing Manager",
    image: "/assets/images/aboutcard.jpg",
    linkedin: "#",
    instagram: "#",
    bio: "Zaid’s strategies put Baithak on the map. He combines data-driven decisions with storytelling that connects with hearts.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.25,
    },
  }),
};

const TeamSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400">
            Meet Our <span className="text-red-500">Team</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            At Baithak, it's more than just a team — it's a family of creators, food lovers, and innovators.
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-yellow-600 rounded-2xl shadow-lg backdrop-blur-lg overflow-hidden group transition transform"
            >
              {/* Image + Overlay */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={`${member.name} profile`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-2xl hover:text-yellow-400 transition" />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-2xl hover:text-yellow-400 transition" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center space-y-3">
                <h3 className="text-2xl font-bold text-yellow-300">{member.name}</h3>
                <p className="text-sm uppercase text-red-400 tracking-wider">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
