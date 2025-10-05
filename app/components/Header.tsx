"use client";

import { Link } from "react-scroll"; 
import { Playfair_Display } from "next/font/google";

const arizona = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400","600","700"], 
  style: "italic"
});

export default function Header() {
  const sections = [
    { name: "Work", id: "education-work" }, 
    { name: "Education", id: "education-work" },         
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "footer" },    
  ];
  
  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 py-4 px-12 flex justify-around shadow-md bg-black ${arizona.className}`}
    >
      {sections.map((sec) => (
        <Link
          key={sec.id}
          to={sec.id}
          smooth={true}
          offset={-80}      
          duration={700}
          className="cursor-pointer text-white hover:text-[#ffdd57] font-semibold tracking-wide text-lg sm:text-xl md:text-2xl"
        >
          {sec.name}
        </Link>
      ))}
    </header>
  );
}
