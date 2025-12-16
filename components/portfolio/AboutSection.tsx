"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Code2, Sparkles } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#005baa]/5 via-transparent to-transparent" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto relative"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-[#005baa] text-sm font-semibold tracking-widest uppercase">À propos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Qui suis-je ?</h2>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#005baa] to-[#003d73] flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-[#005baa]/30">
                S
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Straw</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Passionné par l'univers de Garry's Mod, je me spécialise dans la création de 
                <span className="text-[#005baa] font-medium"> PM (Playermodels)</span>. 
                Je développe également mes compétences en Lua/GLua et en modélisation 3D 
                pour créer du contenu toujours plus qualitatif.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4 text-[#005baa]" />
                  <span>17 ans</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#005baa]" />
                  <span>Lille, France</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Code2 className="w-4 h-4 text-[#005baa]" />
                  <span>Gmod Creator</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}