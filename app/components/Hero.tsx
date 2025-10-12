"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";
import {
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiKubernetes,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

const arizona = Playfair_Display({ subsets: ["latin"], weight: ["400","600","700"], style: "italic" });

const floatingIcons = [
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiKubernetes,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiTypescript,
];

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex flex-col items-center justify-center min-h-screen text-center gap-4 px-4 ${arizona.className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/codesnip.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-white"
        >
          SIVAGAYATHRI K
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl font-semibold text-white"
        >
          SENIOR SOFTWARE ENGINEER (2+ YEARS OF EXP)
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl sm:text-4xl text-white max-w-2xl mt-6"
        >
          <Typewriter
            words={[
              "Hey! Come, let's explore new things...",
              "I love backend, architecture, and learning new tech!"
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={20}
            delaySpeed={1500}
          />
        </motion.div>
      </div>

      {/* Floating Icons (client-side only) */}
      {windowSize.width > 0 &&
        floatingIcons.map((IconComponent, idx) => {
          const initialX = Math.random() * windowSize.width - windowSize.width / 2;
          const initialY = Math.random() * windowSize.height - windowSize.height / 2;
          const size = 24 + Math.random() * 24; // 24-48px

          return (
            <motion.div
              key={idx}
              initial={{ x: initialX, y: initialY, opacity: 0, scale: 0 }}
              animate={{
                x: [initialX, initialX + Math.random() * 200 - 100, initialX],
                y: [initialY, initialY + Math.random() * 200 - 100, initialY],
                opacity: [0, 1, 0.8, 1],
                scale: [0, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute"
            >
              <IconComponent size={size} className="text-white/80" />
            </motion.div>
          );
        })}
    </section>
  );
}
