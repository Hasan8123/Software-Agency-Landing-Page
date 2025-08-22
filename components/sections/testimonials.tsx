"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "@/lib/motion-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
    "LumenDev helped us with a complete website redesign, transforming our outdated site into a modern, user-friendly platform. Their professional and responsive team delivered a website development solution that perfectly represents our brand and exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechInnovate Inc.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 2,
    content:
      "LumenDev's expertise in mobile app development transformed our business. They delivered an app that our customers love and helped us achieve a 40% increase in engagement. A truly exceptional team.",
    author: "Michael Chen",
    position: "CEO",
    company: "GrowFast Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    content:
      "LumenDev's e-commerce platform development was a game-changer for our business. The new platform has dramatically improved our conversion rates and boosted customer satisfaction. Their team took the time to understand our unique needs and delivered a solution that truly exceeded our expectations.",
    author: "Emily Rodriguez",
    position: "E-Commerce Manager",
    company: "StyleHouse",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: 4,
    content:
      "LumenDev's custom software development expertise helped us solve a complex challenge. Their team provided an elegant solution that was delivered on time and within our budget. Their technical knowledge and strategic thinking truly made them the perfect partner.",
    author: "James Wilson",
    position: "CTO",
    company: "DataFlow Systems",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 5,
    content:
      "LumenDev's SaaS platform redesign was a game-changer. It significantly improved our user experience and helped us reduce churn by an impressive 25%. Their team was collaborative, insightful, and truly invested in our product's success.",
    author: "Amanda Park",
    position: "Product Manager",
    company: "CloudSync",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  
  const getItemsToShow = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };
  
  const visibleItems = getItemsToShow();
  
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (currentIndex < testimonials.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, currentIndex, visibleItems]);
  
  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - visibleItems);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, currentIndex, visibleItems]);
  
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(autoplayInterval);
  }, [currentIndex, isAnimating, handleNext]);
  
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us.
          </p>
        </div>
        
        <div className="relative max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Quote className="h-10 w-10 text-primary/20 mr-3" />
              <h3 className="text-xl font-semibold">Success Stories</h3>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full"
                disabled={isAnimating}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                gap: "1.5rem",
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-[calc(100%/var(--visible-items))]"
                  style={{ "--visible-items": visibleItems } as React.CSSProperties}
                >
                  <Card className="h-full">
                    <div className="p-6 flex flex-col h-full justify-between">
                      <div>
                        <Quote className="h-8 w-8 text-primary/30 mb-4" />
                        <p className="text-muted-foreground mb-6">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {Array.from({ length: testimonials.length - visibleItems + 1 }).map(
              (_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`w-2 h-2 rounded-full mx-1 p-0 ${
                    currentIndex === index ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => {
                        setIsAnimating(false);
                      }, 500);
                    }
                  }}
                ></Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}