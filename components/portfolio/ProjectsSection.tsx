"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder, Star } from "lucide-react";

const projects = [
  {
    title: "Collection PM Custom",
    category: "PM Making",
    description: "Création de Playermodels personnalisés et uniques pour serveurs RP",
    tags: ["Blender", "Source", "Gmod"],
    featured: true
  },
  {
    title: "Addons Lua",
    category: "Développement",
    description: "Scripts et addons en cours d'apprentissage pour Garry's Mod",
    tags: ["Lua", "GLua", "Gmod"],
    featured: false
  },
  {
    title: "Modèles 3D",
    category: "Modélisation",
    description: "Apprentissage de la modélisation 3D pour créer mes propres assets",
    tags: ["Blender", "3D", "Texturing"],
    featured: false
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0f] relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#005baa]/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#005baa] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Mes projets</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl border border-white/10 overflow-hidden hover:border-[#005baa]/50 transition-all duration-500">
                {/* Project header with gradient */}
                <div className="h-32 bg-gradient-to-br from-[#005baa]/30 to-[#003d73]/30 relative flex items-center justify-center">
                  <Folder className="w-12 h-12 text-[#005baa]/50 group-hover:text-[#005baa] group-hover:scale-110 transition-all duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-[#005baa] rounded-full">
                      <Star className="w-3 h-3 text-white fill-white" />
                      <span className="text-xs font-semibold text-white">Expert</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-[#005baa] text-xs font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add project CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">Plus de projets à venir...</p>
        </motion.div>
      </div>
    </section>
  );
}