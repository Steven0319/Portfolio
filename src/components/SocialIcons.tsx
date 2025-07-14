"use client";

import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-center gap-3">
      <Link
        href="https://www.instagram.com/im.st3v3n/profilecard/?igsh=MXZ1NWNuZ2huc3hqNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 p-2 rounded-full hover:bg-slate-700 transition-colors shadow-md"
      >
        <Instagram className="text-white w-5 h-5" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/harold-steven-cabrera-gonzalez-b02179206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 p-2 rounded-full hover:bg-slate-700 transition-colors shadow-md"
      >
        <Linkedin className="text-white w-5 h-5" />
      </Link>
      <Link
        href="https://github.com/Steven0319"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 p-2 rounded-full hover:bg-slate-700 transition-colors shadow-md"
      >
        <Github className="text-white w-5 h-5" />
      </Link>
    </div>
  );
};

export default SocialIcons;