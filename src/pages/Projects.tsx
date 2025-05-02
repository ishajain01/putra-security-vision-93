
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Projects as ProjectsSection } from "@/components/home/Projects";
import { FloatingButtons } from "@/components/home/FloatingButtons";

const Projects = () => {
  // Set page title
  useEffect(() => {
    document.title = "Our Projects - Pawan Putra Security Solution";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Explore our portfolio of successfully completed security installations across residential, commercial, and industrial settings.
          </p>
        </div>
        <ProjectsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Projects;
