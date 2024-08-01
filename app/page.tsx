"use client";

import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col max-auto sm:px-10 px-3 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
       <Hero />
       <About />
       <Skills />
       <RecentProjects />
       <Experience />
       <Footer />
      </div>
    </main>
  );

}
