"use client";

import { motion } from "framer-motion";

const eduData = [
  { degree: "MSc Computer Science", details: "2022 | 1st Rank Holder | 95%" },
  { degree: "BSc Computer Science", details: "2020 | 72%" },
];

const workData = [
  { role: "Senior Software Engineer", company: "Intelo.ai | 2023-Present" },
  { role: "Full Stack Developer Intern", company: "Luminar TechnoLab | 2022 - 2023" },
];

export default function EducationAndWork() {
  return (
    <section
      id="education-work"
      className="relative flex flex-col items-center min-h-screen pt-24 gap-20 px-12 bg-lavender overflow-hidden"
    >


      {/* Work Section */}
      <div className="flex flex-col items-center gap-6 w-full">
        <h3 className="text-2xl font-semibold text-black">Work Experience</h3>
        <div className="flex flex-col sm:flex-row gap-10 justify-center w-full">
          {workData.map((work, idx) => (
            <motion.div
              key={idx}
              className="relative w-128 h-72 bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-10 flex flex-col items-start justify-center cursor-pointer z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-black text-2xl sm:text-2xl font-bold">{work.role}</h4>
              <p className="text-black mt-4 text-xl sm:text-2xl text-left">{work.company}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-center gap-6 w-full">
        <h3 className="text-2xl font-semibold text-black">Education</h3>
        <div className="flex flex-col sm:flex-row gap-10 justify-center w-full">
          {eduData.map((edu, idx) => (
            <motion.div
              key={idx}
              className="relative w-128 h-72 bg-white/20 backdrop-blur-md  shadow-lg p-10 flex flex-col items-start justify-center cursor-pointer z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-black text-2xl sm:text-2xl font-bold">{edu.degree}</h4>
              <p className="text-black mt-4 text-xl sm:text-2xl text-left">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
