"use client";

import React from "react";
import { Heart, Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060609] border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Gamepad2 className="w-5 h-5 text-[#005baa]" />
          <span className="font-semibold text-white">Straw</span>
          <span className="text-gray-600">•</span>
          <span>PM Maker Expert</span>
        </div>

        <p className="text-gray-600 text-sm flex items-center gap-1">
          Fait avec <Heart className="w-4 h-4 text-[#005baa] fill-[#005baa]" /> pour Gmod
        </p>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </footer>
  );
}