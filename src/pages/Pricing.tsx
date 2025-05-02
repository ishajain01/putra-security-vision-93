
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing as PricingSection } from "@/components/home/Pricing";
import { FloatingButtons } from "@/components/home/FloatingButtons";

const Pricing = () => {
  // Set page title
  useEffect(() => {
    document.title = "Pricing - Pawan Putra Security Solution";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Our Pricing Plans</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Choose from our range of affordable security packages tailored to meet your needs.
          </p>
        </div>
        <PricingSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Pricing;
