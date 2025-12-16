"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Copy, Check } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const discord = "straw.ww";

  const copyDiscord = () => {
    navigator.clipboard.writeText(discord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#08080c] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#005baa]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#005baa] text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Travaillons ensemble</h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            Besoin d'un PM custom ou d'une collaboration ? N'hésite pas à me contacter !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl"
        >
          {/* Discord - Main CTA */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 rounded-2xl bg-[#5865F2] flex items-center justify-center mb-6 shadow-2xl shadow-[#5865F2]/30">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Discord</h3>
            <p className="text-gray-500 mb-6">Le meilleur moyen de me joindre</p>
            
            <button
              onClick={copyDiscord}
              className="group bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#5865F2]/30"
            >
              <span className="mr-3 font-semibold">{discord}</span>
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
            </button>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mt-3"
              >
                Copié dans le presse-papier !
              </motion.p>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-600 text-sm">Infos</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="w-12 h-12 rounded-lg bg-[#005baa]/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#005baa]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Localisation</p>
                <p className="text-white font-medium">Lille, France</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="w-12 h-12 rounded-lg bg-[#005baa]/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#005baa]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Disponibilité</p>
                <p className="text-white font-medium">Ouvert aux projets</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}