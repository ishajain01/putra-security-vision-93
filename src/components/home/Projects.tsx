
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "residential-cctv",
    title: "Residential CCTV System",
    category: "Home Security",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1470",
    description: "Complete security system for a luxury residential property with multiple entry points."
  },
  {
    id: "office-surveillance",
    title: "Office Complex Surveillance",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1458",
    description: "Enterprise-grade security solution for a multi-story office building."
  },
  {
    id: "retail-protection",
    title: "Retail Store Protection",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1565463996616-b68ef2586813?q=80&w=1470",
    description: "Advanced surveillance system for inventory protection and customer safety."
  },
  {
    id: "industrial-security",
    title: "Industrial Facility Security",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=1470",
    description: "Comprehensive monitoring solution for a large manufacturing plant."
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our portfolio of successfully completed security installations across residential, commercial, and industrial settings.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="gap-2 self-start">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={index} className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block bg-primary/80 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-4">Need a custom security solution?</p>
          <Link to="/contact">
            <Button size="lg" className="gap-2">
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
