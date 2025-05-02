
import React from "react";
import { 
  Camera, CameraOff, Home, Factory, Wifi, 
  CalendarCheck, MonitorSmartphone, Settings 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "CCTV Installation",
    description: "Professional installation of security cameras for optimal coverage and protection.",
    icon: Camera,
  },
  {
    title: "CCTV Maintenance",
    description: "Regular maintenance services to ensure your security system works flawlessly.",
    icon: CameraOff,
  },
  {
    title: "IP Camera Setup",
    description: "Setup and configuration of advanced IP camera systems with remote access.",
    icon: Camera,
  },
  {
    title: "Smart Home Surveillance",
    description: "Integrate security cameras with your smart home ecosystem for seamless control.",
    icon: Home,
  },
  {
    title: "Office & Industrial Surveillance",
    description: "Custom security solutions for commercial and industrial properties.",
    icon: Factory,
  },
  {
    title: "Remote Monitoring Setup",
    description: "Configure your system for reliable remote monitoring from anywhere.",
    icon: MonitorSmartphone,
  },
  {
    title: "Wireless Camera Systems",
    description: "Installation of wireless security systems for flexibility and easy setup.",
    icon: Wifi,
  },
  {
    title: "Annual Maintenance Contracts",
    description: "Comprehensive AMC plans to keep your security system in peak condition.",
    icon: CalendarCheck,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Services</h2>
          <p className="text-muted-foreground">
            Comprehensive security solutions tailored to protect your home or business with cutting-edge technology and professional expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
