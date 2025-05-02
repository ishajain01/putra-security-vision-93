
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { Contact } from "@/components/home/Contact";
import { FloatingButtons } from "@/components/home/FloatingButtons";

const Index = () => {
  // Set page title and meta tags
  useEffect(() => {
    document.title = "Pawan Putra Security Solution - CCTV & Security Services";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
