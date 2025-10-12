"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  name: string;
  description: string;
  liveLink?: string;
  tech?: string;
  githubLink?: string;
  githubLinks?: { name: string; url: string }[];
};

const projects: Project[] = [
  {
    name: "Shopverse Microservices",
    description:
      "E-commerce backend with API Gateway and microservices for users, products, and orders.",
    liveLink: "https://api-gateway-eohp.onrender.com/api",
    tech: "Tech: NestJS, Express, Redis, MongoDB, BullMq, Microservices,swagger",
    githubLinks: [
      { name: "API Gateway", url: "https://github.com/sivagayathri/api-gateway" },
      { name: "Product Service", url: "https://github.com/sivagayathri/product-service" },
      { name: "User Service", url: "https://github.com/sivagayathri/shoppers" },
      { name: "Order Service", url: "https://github.com/sivagayathri/order-service" },
    ],
  },
  {
     name: "Cred App",
    description:
    "A credential management platform that issues and verifies digital credentials with microservice architecture. It leverages asynchronous job processing and Redis streams for reliable event handling and background processing.",
    liveLink: " https://cred-app-theta.vercel.app",
     tech: "Tech: React.js, Node.js, Express.js, TypeScript, Redis, Supabase, Docker, Jest, Cypress, Vitest test",
    githubLinks: [
      { name: "Cred app FE", url: "https://github.com/sivagayathri/cred-app" },
      { name: "Issuance Service", url: "https://github.com/sivagayathri/issuance-service" },
      { name: "Verification Service", url: "https://github.com/sivagayathri/verification" },
    ],
  },
  {
    name: "Task Queue NestJS",
    description: "Rate-limited task queue system using NestJS",
    liveLink: "https://task-queue-nestjs.onrender.com/",
    tech: "Backend: NestJS, MongoDB, Redis, Bull",
    githubLink: "https://github.com/sivagayathri/task-queue-nestjs/tree/main",
  },
  {
    name: "Fitness App",
    description: "A fitness tracking app",
    tech: "Frontend: Angular",
    liveLink:
      "https://fitapp-frontend-git-master-sivagayathri-ks-projects.vercel.app",
    githubLink: "https://github.com/sivagayathri/fitapp-frontend",
  },
  {
    name: "Fitness App Backend",
    description: "Backend server for Fitness App",
    tech: "Backend: Node.js, Express, MongoDB",
    liveLink: "https://fitapp-gq2y.onrender.com/",
    githubLink: "https://github.com/sivagayathri/fitness-server",
  },
  {
    name: "Snake Game",
    description: "Classic Snake Game built with JavaScript",
    tech: "Tech: JavaScript, CSS",
    liveLink: "https://chimerical-dango-3cdb86.netlify.app/",
    githubLink: "https://github.com/sivagayathri/game",
  },
  {
    name: "Netflix Clone",
    description: "Streaming app clone",
    tech: "Frontend: HTML, CSS, JavaScript",
    liveLink: "https://lnkd.in/dfwM43R3",
  },
];

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
        className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between text-black"
        id="projects"
  >
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
      <p className="text-lg">{project.description}</p>
      {project.tech && (
        <p className="text-sm text-gray-600 mt-2">{project.tech}</p>
      )}
    </div>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline text-lg font-medium"
        >
          <ExternalLink size={20} /> Live
        </a>
      )}

      {/* Single GitHub link */}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline text-lg font-medium"
        >
          <Github size={20} /> GitHub
        </a>
      )}

      {/* Multiple GitHub links side by side */}
      {project.githubLinks &&
        project.githubLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-lg font-medium"
          >
            <Github size={20} /> {link.name}
          </a>
        ))}
    </div>
  </motion.div>
);

const Projects: FC = () => {
  return (
    <section className="py-20 mt-2 mb-25">
      <h1 className="text-4xl font-bold mb-12 text-center text-black">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
