"use client";

import { Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0A0A0B] border-t border-[#52525B]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-[#F5F5F5]">JS.</span>
            <span className="text-sm text-[#52525B]">
              © {currentYear} Julia Sánchez
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/juliasanchez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#52525B] hover:text-[#A1A1AA] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <span className="text-sm text-[#52525B]">
              Built with Next.js + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
