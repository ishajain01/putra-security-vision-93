
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Camera } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Create and animate particles
  useEffect(() => {
    if (!heroRef.current) return;
    
    const createParticles = () => {
      const heroElement = heroRef.current;
      if (!heroElement) return;
      
      // Clear existing particles
      const existingParticles = heroElement.querySelectorAll('.hero-particle');
      existingParticles.forEach(particle => particle.remove());
      
      // Create new particles
      const particleCount = window.innerWidth < 768 ? 15 : 30;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        
        // Random size between 2px and 10px
        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        heroElement.appendChild(particle);
      }
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-pattern-light dark:bg-hero-pattern animated-gradient"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-1.5 text-primary font-medium text-sm">
              <Shield className="w-4 h-4" />
              <span>Professional Security Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Eye <span className="text-primary">When You're Away</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Professional CCTV installation and security services for homes and businesses. 
              Protecting what matters most to you.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            
            <div className="pt-6 flex items-center gap-4 text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800"></div>
                ))}
              </div>
              <p className="text-sm">Trusted by <span className="font-semibold">500+</span> clients</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579824288640-e7261ff40d2d?q=80&w=1740')] bg-cover bg-center"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-4 md:p-6 w-full max-w-xs animate-slide-in">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Smart Security</h3>
                  <p className="text-sm text-muted-foreground">Remotely monitor your property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
