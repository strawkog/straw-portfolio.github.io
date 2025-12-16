"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, Layers, Code } from "lucide-react";

const skills = [
  {
    name: "PM Making",
    level: 95,
    status: "Expert",
    icon: Star,
    description: "Création de Playermodels de haute qualité pour Gmod",
    color: "from-[#005baa] to-[#0088ff]"
  },
  {
    name: "Lua / GLua",
    level: 35,
    status: "Débutant",
    icon: Code,
    description: "Scripting et développement d'addons Garry's Mod",
    color: "from-[#005baa]/80 to-[#005baa]"
  },
  {
    name: "Modélisation 3D",
    level: 25,
    status: "Débutant",
    icon: Layers,
    description: "Création et modification de modèles 3D",
    color: "from-[#003d73] to-[#005baa]"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#08080c] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#005baa]/10 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#005baa] text-sm font-semibold tracking-widest uppercase">Compétences</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Mes expertises</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl p-6 border border-white/10 hover:border-[#005baa]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#005baa]/10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-7 h-7 text-white" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    skill.level >= 80 
                      ? 'bg-[#005baa]/20 text-[#005baa]' 
                      : 'bg-white/10 text-gray-400'
                  }`}>
                    {skill.status}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-6">{skill.description}</p>

                {/* Progress bar */}
                <div className="relative">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                  <span className="absolute -top-6 right-0 text-sm font-semibold text-gray-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}