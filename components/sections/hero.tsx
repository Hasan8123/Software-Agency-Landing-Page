"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      // Subtle parallax effect (limited movement)
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-chart-1/10 blur-[100px]" />
        <div className="absolute left-1/4 bottom-1/3 w-[600px] h-[600px] rounded-full bg-chart-2/10 blur-[100px]" />
        <div className="absolute right-1/3 bottom-0 w-[300px] h-[300px] rounded-full bg-chart-4/10 blur-[60px]" />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-6">
            <span className="text-xs font-medium flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-chart-1 mr-2"></span>
              We&apos;re hiring senior developers
              <ArrowRight className="ml-2 h-3 w-3" />
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Where <span className="text-chart-1 relative">
              digital excellence
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C43.5 0.5 195 -1.5 299 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span> 
            <br /> lifts brands higher
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
            A premier software agency delivering innovative, tailored digital solutions 
            that drive business growth and user engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { 
                icon: <Code className="h-10 w-10 mb-4 text-chart-1" />,
                title: "Custom Development",
                description: "Tailored software solutions built from the ground up to meet your specific needs."
              },
              { 
                icon: <Layers className="h-10 w-10 mb-4 text-chart-2" />,
                title: "Digital Products",
                description: "User-centric applications that solve real problems for your customers."
              },
              { 
                icon: <Zap className="h-10 w-10 mb-4 text-chart-4" />,
                title: "Technical Consulting",
                description: "Expert guidance to navigate complex technical decisions and challenges."
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={cn(
                  "rounded-xl p-6 text-center backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px]",
                  "border border-border bg-card/50"
                )}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-muted cursor-pointer"
          onClick={() => {
            const servicesSection = document.querySelector("#services");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ArrowRight className="h-4 w-4 rotate-90" />
        </div>
      </div>
    </section>
  );
}