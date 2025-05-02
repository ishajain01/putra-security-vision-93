
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About as AboutSection } from "@/components/home/About";
import { FloatingButtons } from "@/components/home/FloatingButtons";

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = "About Us - Pawan Putra Security Solution";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">About Our Company</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Learn about our mission, team, and commitment to providing top-notch security solutions.
          </p>
        </div>
        <AboutSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
