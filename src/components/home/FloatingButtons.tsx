
import React from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const handleCallNow = () => {
    window.location.href = "tel:+919461015631";
    toast.success("Calling +91 94610 15631...");
  };
  
  const handleWhatsApp = () => {
    window.open("https://wa.me/919461015631", "_blank");
    toast.success("Opening WhatsApp...");
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <Button 
        onClick={handleCallNow}
        className={cn(
          "w-12 h-12 rounded-full shadow-lg shadow-primary/25",
          "bg-green-600 hover:bg-green-700"
        )}
        size="icon"
        aria-label="Call now"
      >
        <PhoneCall className="w-5 h-5" />
      </Button>
      
      <Button 
        onClick={handleWhatsApp}
        className={cn(
          "w-12 h-12 rounded-full shadow-lg shadow-primary/25",
          "bg-green-500 hover:bg-green-600"
        )}
        size="icon"
        aria-label="WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
      </Button>
    </div>
  );
}
