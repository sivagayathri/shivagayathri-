"use client";


import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";



export default function Home() {
  return (
   <div className="font-sans bg-lavender text-[var(--foreground)]">
  <Header />
  <main className="pt-2">
      <Hero />
        <Education />
        <Project/>
      <Footer/>
    {/* <section id="projects" className="min-h-screen">Projects will come here later</section>
    <section id="contact" className="min-h-screen">Contact: email@example.com</section> */}
  </main>
</div>

  );
}
