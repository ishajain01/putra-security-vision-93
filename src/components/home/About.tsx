
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Manish Parihar",
    title: "Director & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774",
  },
  {
    name: "Pankaj Parihar",
    title: "Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774",
  },
  {
    name: "Garvit Parihar",
    title: "Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774",
  },
  {
    name: "Pranshu",
    title: "Technician",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=774",
  }
];

const features = [
  "24/7 Professional support",
  "Latest security technology",
  "Custom installation solutions",
  "Remote monitoring capabilities",
  "Flexible maintenance plans",
  "Expert technical team"
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Pawan Putra Security Solution</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a premier provider of security solutions, specializing in CCTV installation and maintenance services for homes and businesses across the region.
            </p>
            <p className="text-muted-foreground mb-8">
              With years of industry experience, our team of security professionals is dedicated to providing top-notch security systems tailored to your specific needs. We pride ourselves on our technical expertise, attention to detail, and commitment to customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg">Learn More About Us</Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl max-w-xs">
              <p className="font-heading font-semibold text-lg mb-1">Our Mission</p>
              <p className="text-sm text-muted-foreground">To provide reliable and innovative security solutions that protect what matters most to our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
