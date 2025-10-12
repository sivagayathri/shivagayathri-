import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div className="font-sans bg-lavender text-[var(--foreground)]">
      <Header />
      <main className="pt-2">
        <Hero />
        <Education />
        <Project />
        <Footer />
      </main>
    </div>
  );
}
