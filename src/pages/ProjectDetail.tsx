
import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/home/FloatingButtons";
import { Button } from "@/components/ui/button";
import { GetStartedForm } from "@/components/projects/GetStartedForm";
import { CCTVPreview } from "@/components/projects/CCTVPreview";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Project data
const projectsData = [
  {
    id: "residential-cctv",
    title: "Residential CCTV System",
    category: "Home Security",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1470",
    gallery: [
      "https://images.unsplash.com/photo-1557063673-0493e05da49f?q=80&w=1470",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1470",
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1500",
    ],
    description: "Complete security system for a luxury residential property with multiple entry points. Our team installed 8 cameras strategically positioned to cover all access points and common areas.",
    features: [
      "Motion detection with instant mobile alerts",
      "Night vision up to 30 meters",
      "Weather-resistant outdoor cameras",
      "Secure cloud storage with 30-day recording history",
      "Mobile app access for real-time monitoring"
    ],
    client: "Private Residence, Gurgaon",
    completionDate: "January 2024"
  },
  {
    id: "office-surveillance",
    title: "Office Complex Surveillance",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1458",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1470",
    ],
    description: "Enterprise-grade security solution for a multi-story office building with restricted access areas and high-traffic zones. The system integrates with the building's access control system.",
    features: [
      "24/7 surveillance with 4K resolution cameras",
      "Facial recognition for secure access areas",
      "Advanced motion tracking and object detection",
      "Centralized monitoring station with multiple displays",
      "Backup power system with 24-hour runtime"
    ],
    client: "Tech Park Business Complex, Delhi",
    completionDate: "March 2024"
  },
  {
    id: "retail-protection",
    title: "Retail Store Protection",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1565463996616-b68ef2586813?q=80&w=1470",
    gallery: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1374",
      "https://images.unsplash.com/photo-1604202454883-cf2b342f0954?q=80&w=1356",
    ],
    description: "Advanced surveillance system for inventory protection and customer safety in a high-end retail environment. The system includes both visible and discreet cameras to prevent theft and provide comprehensive coverage.",
    features: [
      "People counting analytics for store traffic analysis",
      "Heat map generation for customer movement patterns",
      "Integration with point-of-sale systems",
      "Discrete dome cameras with 360° coverage",
      "Theft prevention alerts and automatic recording"
    ],
    client: "Luxury Retail Chain, Noida",
    completionDate: "November 2023"
  },
  {
    id: "industrial-security",
    title: "Industrial Facility Security",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=1470",
    gallery: [
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1470",
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1472",
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1374",
    ],
    description: "Comprehensive monitoring solution for a large manufacturing plant with specialized security requirements for sensitive production areas and heavy machinery zones.",
    features: [
      "Hazardous area certified explosion-proof cameras",
      "Thermal imaging for equipment monitoring",
      "Long-range perimeter protection with AI detection",
      "Integration with factory automation systems",
      "Remote monitoring capabilities for management"
    ],
    client: "Manufacturing Corporation, Haryana",
    completionDate: "February 2024"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  // Find the project data based on the URL parameter
  const project = projectsData.find(p => p.id === projectId);
  
  useEffect(() => {
    // Set page title
    document.title = project ? `${project.title} - Pawan Putra Security Solution` : "Project Details";
    
    // Reset active image when project changes
    setActiveImageIndex(0);
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [projectId, project]);
  
  // Handle scrolling to form
  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8 text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/projects">
              <Button>View All Projects</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Next project navigation
  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {project.title}
              </h1>
              <Button onClick={scrollToForm} size="lg" className="mt-4">
                Get Started with a Similar Solution
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                
                <div className="my-8">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* CCTV Preview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Live Preview</h2>
                <CCTVPreview />
              </div>
              
              {/* Gallery */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-video overflow-hidden rounded-lg cursor-pointer border border-border" 
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} image ${index + 1}`} 
                        className={`w-full h-full object-cover transition duration-300 ${activeImageIndex === index ? 'ring-4 ring-primary' : 'hover:scale-105'}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 aspect-[16/9] overflow-hidden rounded-lg border border-border">
                  <img 
                    src={project.gallery[activeImageIndex]} 
                    alt={`${project.title} featured`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl shadow-sm border border-border p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4 divide-y divide-border">
                  <div className="pb-4">
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">Completion Date</p>
                    <p className="font-medium">{project.completionDate}</p>
                  </div>
                  <div className="pt-4">
                    <Button onClick={scrollToForm} className="w-full">Request a Quote</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div ref={formRef} className={`mt-16 transition-opacity duration-500 ${showForm ? 'opacity-100' : 'opacity-0'}`}>
            {showForm && (
              <>
                <h2 className="text-3xl font-bold text-center mb-2">Get Started with a Similar Solution</h2>
                <p className="text-center text-muted-foreground mb-8">Fill out the form below and our team will get back to you with a custom quote.</p>
                <GetStartedForm projectTitle={project.title} />
              </>
            )}
          </div>
          
          {/* Project Navigation */}
          <div className="mt-20 border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Link to={`/projects/${prevProject.id}`} className="group flex items-center gap-2 mb-4 sm:mb-0">
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Previous Project</div>
                  <div className="font-medium">{prevProject.title}</div>
                </div>
              </Link>
              
              <Link to={`/projects/${nextProject.id}`} className="group flex items-center gap-2 text-right">
                <div>
                  <div className="text-sm text-muted-foreground">Next Project</div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ProjectDetail;
