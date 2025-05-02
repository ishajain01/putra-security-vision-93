
import React from "react";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Basic",
    description: "Essential security coverage for small spaces",
    price: "₹15,999",
    features: [
      "2 CCTV cameras",
      "720p HD quality",
      "Local recording (1TB)",
      "Basic mobile app access",
      "1 year warranty",
      "Standard installation"
    ],
    badge: "",
    popular: false
  },
  {
    name: "Standard",
    description: "Complete security solution for homes and small businesses",
    price: "₹25,999",
    features: [
      "4 CCTV cameras",
      "1080p Full HD quality",
      "Local recording (2TB)",
      "Advanced mobile app access",
      "2 year warranty",
      "Motion detection alerts",
      "24/7 technical support"
    ],
    badge: "Popular",
    popular: true
  },
  {
    name: "Premium",
    description: "Advanced security system for businesses and large properties",
    price: "₹45,999",
    features: [
      "8 CCTV cameras",
      "4K Ultra HD quality",
      "Cloud + Local storage (4TB)",
      "Advanced mobile & desktop access",
      "3 year warranty",
      "AI-powered motion detection",
      "24/7 premium support",
      "Quarterly maintenance included"
    ],
    badge: "",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">
            Choose the perfect security package that fits your needs and budget, with no hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`border ${plan.popular ? 'border-primary shadow-lg relative' : 'border-border'} transition-all duration-300 flex flex-col`}>
              {plan.badge && (
                <Badge variant="default" className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/3 px-3 py-1">
                  {plan.badge}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-3">
                  <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                    Get Started
                  </Button>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-full">
                        <Button variant="ghost" className="w-full text-xs flex items-center gap-1">
                          <Info className="h-3 w-3" />
                          View detailed specs
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Contact us for full technical specifications and customization options.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We offer personalized security packages designed specifically for your requirements.
          </p>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
