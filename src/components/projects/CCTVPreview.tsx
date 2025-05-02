
import React, { useEffect, useRef, useState } from "react";
import { Camera, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CCTVPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCamera, setActiveCamera] = useState(0);
  const animationRef = useRef<number>();
  
  // Camera feed simulations - we'll create different patterns for each camera
  const cameras = [
    { name: "Main Entrance", id: "cam-1" },
    { name: "Hallway", id: "cam-2" },
    { name: "Parking Area", id: "cam-3" },
    { name: "Back Door", id: "cam-4" }
  ];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Draw initial static
    drawStaticScreen(ctx, canvas.width, canvas.height);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawStaticScreen(ctx, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Effect to handle animation start/stop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    if (isPlaying) {
      let lastTime = 0;
      let frameCount = 0;
      
      // Animation function
      const animate = (timestamp: number) => {
        if (!lastTime) lastTime = timestamp;
        const elapsed = timestamp - lastTime;
        
        // Update at 24fps
        if (elapsed > 1000 / 24) {
          lastTime = timestamp;
          frameCount++;
          
          // Different animation based on active camera
          switch (activeCamera) {
            case 0:
              drawEntranceFeed(ctx, canvas.width, canvas.height, frameCount);
              break;
            case 1:
              drawHallwayFeed(ctx, canvas.width, canvas.height, frameCount);
              break;
            case 2:
              drawParkingFeed(ctx, canvas.width, canvas.height, frameCount);
              break;
            case 3:
              drawBackDoorFeed(ctx, canvas.width, canvas.height, frameCount);
              break;
            default:
              drawStaticScreen(ctx, canvas.width, canvas.height);
          }
          
          // Add CCTV overlay elements
          drawOverlay(ctx, canvas.width, canvas.height, cameras[activeCamera].name);
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Stop animation and show static
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      drawStaticScreen(ctx, canvas.width, canvas.height);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, activeCamera]);
  
  const drawStaticScreen = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Black background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    
    // Static noise
    for (let i = 0; i < 5000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const grayValue = Math.floor(Math.random() * 200);
      ctx.fillStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.5)`;
      ctx.fillRect(x, y, 2, 2);
    }
    
    // "No Signal" message
    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText('NO SIGNAL', width / 2, height / 2);
    
    // Press play message
    ctx.font = '16px sans-serif';
    ctx.fillText('Press play to start surveillance feed', width / 2, height / 2 + 30);
  };
  
  const drawEntranceFeed = (ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) => {
    // Dark background with slight green tint (night vision effect)
    ctx.fillStyle = '#080c08';
    ctx.fillRect(0, 0, width, height);
    
    // Simulate door and entrance area
    ctx.fillStyle = '#111';
    ctx.fillRect(width * 0.3, height * 0.2, width * 0.4, height * 0.6);
    
    // Door frame
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.strokeRect(width * 0.3, height * 0.2, width * 0.4, height * 0.6);
    
    // Add slight noise
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const noise = Math.random() * 10;
      ctx.fillStyle = `rgba(0, ${noise + 20}, 0, 0.1)`;
      ctx.fillRect(x, y, 1, 1);
    }
    
    // Simulated movement - a person occasionally passing by
    if (frame % 100 > 50 && frame % 100 < 70) {
      ctx.fillStyle = '#333';
      const personX = width * 0.1 + (frame % 30) * (width * 0.02);
      ctx.fillRect(personX, height * 0.4, width * 0.05, height * 0.2);
      ctx.beginPath();
      ctx.arc(personX + width * 0.025, height * 0.35, width * 0.025, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  const drawHallwayFeed = (ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) => {
    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);
    
    // Hallway perspective
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width * 0.75, height);
    ctx.lineTo(width * 0.25, height);
    ctx.closePath();
    ctx.fill();
    
    // Floor lines
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 1;
    for (let i = 0; i < 10; i++) {
      const y = (i / 10) * height;
      const startX = width * 0.5 - (width * 0.25 * (i / 10));
      const endX = width * 0.5 + (width * 0.25 * (i / 10));
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
      ctx.stroke();
    }
    
    // Flickering light effect
    if (frame % 30 === 0) {
      ctx.fillStyle = 'rgba(255, 255, 200, 0.05)';
      ctx.fillRect(0, 0, width, height);
    }
    
    // Occasional shadow movement at the far end
    if (frame % 150 > 120) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.3, width * 0.05, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  const drawParkingFeed = (ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) => {
    // Darker background for outdoor night setting
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, width, height);
    
    // Parking lot lines
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const y = height * 0.5 + (i - 2) * (height * 0.15);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    for (let i = 0; i < 6; i++) {
      const x = (i / 5) * width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    // Car silhouettes
    ctx.fillStyle = '#151515';
    ctx.fillRect(width * 0.1, height * 0.3, width * 0.2, height * 0.1);
    ctx.fillRect(width * 0.7, height * 0.6, width * 0.2, height * 0.1);
    
    // Car lights occasionally turning on
    if (frame % 200 > 180) {
      ctx.fillStyle = 'rgba(255, 255, 150, 0.7)';
      ctx.beginPath();
      ctx.arc(width * 0.1 + width * 0.01, height * 0.35, width * 0.01, 0, Math.PI * 2);
      ctx.arc(width * 0.1 + width * 0.03, height * 0.35, width * 0.01, 0, Math.PI * 2);
      ctx.fill();
      
      // Light beams
      ctx.fillStyle = 'rgba(255, 255, 150, 0.1)';
      ctx.beginPath();
      ctx.moveTo(width * 0.1 + width * 0.01, height * 0.35);
      ctx.lineTo(width * 0.1 - width * 0.1, height * 0.2);
      ctx.lineTo(width * 0.1 - width * 0.1, height * 0.5);
      ctx.closePath();
      ctx.fill();
    }
  };
  
  const drawBackDoorFeed = (ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) => {
    // Background for back area
    ctx.fillStyle = '#070707';
    ctx.fillRect(0, 0, width, height);
    
    // Back door
    ctx.fillStyle = '#111';
    ctx.fillRect(width * 0.35, height * 0.3, width * 0.3, height * 0.5);
    
    // Door frame
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2;
    ctx.strokeRect(width * 0.35, height * 0.3, width * 0.3, height * 0.5);
    
    // Door handle
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(width * 0.6, height * 0.5, width * 0.03, height * 0.05);
    
    // Simulate bushes or objects near the back door
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = `rgba(10, 30, 10, ${Math.random() * 0.3 + 0.1})`;
      const x = Math.random() * width;
      const y = height * 0.7 + Math.random() * (height * 0.3);
      const size = Math.random() * width * 0.1 + width * 0.05;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Wind effect on bushes/objects
    if (frame % 10 === 0) {
      ctx.fillStyle = 'rgba(10, 30, 10, 0.05)';
      ctx.fillRect(0, height * 0.7, width, height * 0.3);
    }
  };
  
  const drawOverlay = (ctx: CanvasRenderingContext2D, width: number, height: number, cameraName: string) => {
    // Draw timestamp and camera info
    const date = new Date();
    const timeString = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString();
    
    ctx.font = '12px monospace';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.textAlign = 'left';
    ctx.fillText(`CAM: ${cameraName}`, 10, 20);
    ctx.textAlign = 'right';
    ctx.fillText(`${dateString} ${timeString}`, width - 10, 20);
    
    // REC indicator with blinking dot
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(10, height - 30, 60, 20);
    ctx.fillStyle = Date.now() % 1000 < 500 ? '#ff0000' : 'rgba(255, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.arc(25, height - 20, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText('REC', 45, height - 15);
    
    // Scan lines effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    for (let i = 0; i < height; i += 4) {
      ctx.fillRect(0, i, width, 1);
    }
    
    // Vignette effect
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, height / 3, 
      width / 2, height / 2, height
    );
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.7)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };
  
  const toggleFeed = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-black">
      <div className="bg-card p-3 border-b border-border flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <h3 className="font-medium">CCTV Live Feed</h3>
        </div>
        <Button
          variant={isPlaying ? "destructive" : "default"}
          size="sm"
          onClick={toggleFeed}
          className="gap-1"
        >
          <Play className="w-4 h-4" />
          {isPlaying ? "Stop" : "Start"} Feed
        </Button>
      </div>
      
      <div className="aspect-video relative">
        <canvas 
          ref={canvasRef}
          className="w-full h-full"
        />
      </div>
      
      <div className="bg-card p-3 border-t border-border">
        <div className="grid grid-cols-4 gap-2">
          {cameras.map((camera, index) => (
            <button
              key={camera.id}
              className={`text-xs py-1 px-2 rounded ${activeCamera === index 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary hover:bg-secondary/80'}`}
              onClick={() => setActiveCamera(index)}
              disabled={!isPlaying}
            >
              {camera.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
