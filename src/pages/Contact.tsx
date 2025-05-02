
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact as ContactSection } from "@/components/home/Contact";
import { FloatingButtons } from "@/components/home/FloatingButtons";

const Contact = () => {
  // Set page title
  useEffect(() => {
    document.title = "Contact Us - Pawan Putra Security Solution";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Get in touch with our team for a free consultation about your security needs.
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
