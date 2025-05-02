
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/home/FloatingButtons";
import { 
  Camera, CameraOff, Home, Factory, Wifi, 
  CalendarCheck, MonitorSmartphone, Settings 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "cctv-installation",
    title: "CCTV Installation",
    description: "Professional installation of security cameras for optimal coverage and protection.",
    icon: Camera,
    details: `
      Our CCTV installation service provides comprehensive security coverage for your property. Our team of experts will:
      
      • Conduct a thorough site assessment to determine optimal camera placement
      • Install high-quality cameras strategically positioned for maximum coverage
      • Set up and configure recording and monitoring systems
      • Connect your system to remote viewing capabilities via mobile apps
      • Provide training on system operation and maintenance
      
      We use only industry-leading equipment to ensure reliable performance and clear footage. Our installations are clean and professional, with hidden wiring and minimal disruption to your property.
    `
  },
  {
    id: "cctv-maintenance",
    title: "CCTV Maintenance",
    description: "Regular maintenance services to ensure your security system works flawlessly.",
    icon: CameraOff,
    details: `
      Regular maintenance is essential to ensure your CCTV system continues to function optimally. Our maintenance services include:
      
      • Comprehensive system diagnostics and health checks
      • Camera lens cleaning and positioning adjustments
      • Software updates and firmware upgrades
      • Storage system optimization and cleanup
      • Connection and cable inspection
      • Repair or replacement of faulty components
      
      We offer flexible maintenance packages including quarterly, bi-annual, or annual visits to keep your system in peak condition. Preventive maintenance helps avoid system failures when you need your security system most.
    `
  },
  {
    id: "ip-camera-setup",
    title: "IP Camera Setup",
    description: "Setup and configuration of advanced IP camera systems with remote access.",
    icon: Camera,
    details: `
      Our IP camera setup service delivers state-of-the-art digital surveillance capabilities. With our service, you'll receive:
      
      • Installation of high-resolution IP cameras with superior image quality
      • Network configuration for secure remote viewing
      • Mobile app setup for monitoring from anywhere
      • Integration with existing security systems
      • Cloud storage configuration options
      • Motion detection and alert setup
      
      IP cameras offer significant advantages over traditional analog systems, including higher resolution, better zoom capabilities, and advanced features like facial recognition and object detection.
    `
  },
  {
    id: "smart-home-surveillance",
    title: "Smart Home Surveillance",
    description: "Integrate security cameras with your smart home ecosystem for seamless control.",
    icon: Home,
    details: `
      Transform your home security with our smart home surveillance solutions. We specialize in:
      
      • Integration with voice assistants (Google Home, Amazon Alexa, Apple HomeKit)
      • Smart doorbell camera installation
      • Motion-activated lighting coordination
      • Smart lock integration
      • Automated security scenes and routines
      • Mobile app control of all security features
      
      Our smart home surveillance systems allow you to create automated security routines, such as turning on lights when motion is detected or receiving instant notifications when someone approaches your door.
    `
  },
  {
    id: "office-industrial-surveillance",
    title: "Office & Industrial Surveillance",
    description: "Custom security solutions for commercial and industrial properties.",
    icon: Factory,
    details: `
      Our commercial-grade surveillance systems are designed to meet the unique challenges of business environments. Our services include:
      
      • Multi-camera systems for comprehensive coverage of large areas
      • Access control integration
      • Employee monitoring solutions
      • High-capacity NVR systems for extended footage storage
      • Weatherproof cameras for outdoor industrial environments
      • Night vision and thermal camera options
      
      We understand the unique security needs of businesses, from retail loss prevention to warehouse security. Our expert team will design a system that protects your assets, employees, and customers.
    `
  },
  {
    id: "remote-monitoring-setup",
    title: "Remote Monitoring Setup",
    description: "Configure your system for reliable remote monitoring from anywhere.",
    icon: MonitorSmartphone,
    details: `
      Stay connected to your security system from anywhere with our remote monitoring setup. This service includes:
      
      • Secure network configuration
      • Mobile app installation and setup
      • Desktop monitoring software configuration
      • Push notification setup for alerts
      • Remote access permissions and user management
      • Automated backup configuration
      
      With remote monitoring, you can view live footage, access recorded videos, and receive alerts from anywhere in the world. This gives you peace of mind when you're away from your property.
    `
  },
  {
    id: "wireless-camera-systems",
    title: "Wireless Camera Systems",
    description: "Installation of wireless security systems for flexibility and easy setup.",
    icon: Wifi,
    details: `
      Our wireless camera systems offer flexibility and convenience without compromising on security. Benefits include:
      
      • No extensive wiring required, minimizing installation disruption
      • Flexible camera placement options
      • Easy system expansion in the future
      • Reliable encrypted wireless connections
      • Battery backup options for continuous operation
      • Quick installation timeframe
      
      Wireless systems are ideal for locations where running cables is challenging or for temporary security needs. Our systems use advanced encryption to ensure your footage remains private and secure.
    `
  },
  {
    id: "annual-maintenance-contracts",
    title: "Annual Maintenance Contracts",
    description: "Comprehensive AMC plans to keep your security system in peak condition.",
    icon: CalendarCheck,
    details: `
      Our Annual Maintenance Contracts (AMC) provide comprehensive care for your security system. AMC benefits include:
      
      • Scheduled preventive maintenance visits
      • Priority response for emergency service calls
      • Discounted rates on parts and labor
      • Regular system optimization and updates
      • Extended warranty coverage
      • Detailed service reports and recommendations
      
      An AMC ensures your system remains in optimal condition, extending its lifespan and preventing costly emergency repairs. We offer customized AMC plans to fit your specific needs and budget.
    `
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<(typeof services)[0] | null>(null);

  useEffect(() => {
    const currentService = services.find((s) => s.id === serviceId);
    setService(currentService || null);
    
    if (currentService) {
      document.title = `${currentService.title} - Pawan Putra Security Solution`;
    } else {
      document.title = "Service Not Found - Pawan Putra Security Solution";
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist or has been removed.</p>
          <Link to="/services">
            <Button>View All Services</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ServiceIcon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">{service.title}</h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl">{service.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-card rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {service.details.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium">✓</span>
                    <span>Experienced and certified technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium">✓</span>
                    <span>High-quality equipment and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium">✓</span>
                    <span>Customized solutions for your specific needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium">✓</span>
                    <span>Excellent after-sales support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium">✓</span>
                    <span>Competitive pricing with no hidden costs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Get a Quote</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in our {service.title} service? Contact us today for a free consultation and quote.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" onClick={() => window.location.href = "/contact"}>
                    Contact Us
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => window.location.href = "/pricing"}>
                    View Pricing
                  </Button>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-3">Have questions?</h4>
                  <p className="text-muted-foreground mb-4">Call us directly:</p>
                  <a 
                    href="tel:+919461015631"
                    className="flex items-center gap-2 text-primary font-medium"
                  >
                    +91 94610 15631
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Other Services You Might Be Interested In</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService, index) => {
                  const Icon = relatedService.icon;
                  return (
                    <Link 
                      key={index} 
                      to={`/services/${relatedService.id}`}
                      className="bg-card hover:bg-accent/5 border border-border rounded-xl p-6 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{relatedService.title}</h3>
                      <p className="text-sm text-muted-foreground">{relatedService.description}</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
