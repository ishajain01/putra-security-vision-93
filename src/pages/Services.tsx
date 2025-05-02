
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesSection } from "@/components/home/Services";
import { FloatingButtons } from "@/components/home/FloatingButtons";

const Services = () => {
  // Set page title
  useEffect(() => {
    document.title = "Our Services - Pawan Putra Security Solution";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Our Security Services</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Explore our comprehensive range of security solutions to protect your home or business.
          </p>
        </div>
        <ServicesSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
