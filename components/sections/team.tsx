"use client";

import { useState } from "react";
import { motion } from "@/lib/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Emma Richardson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in tech, Emma leads our vision and strategy with a focus on innovation and client success.",
    image: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    bio: "David oversees our technical direction and ensures we stay at the forefront of technology trends and best practices.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Design Director",
    bio: "Sophia leads our design team with a passion for creating beautiful, functional interfaces that users love.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Lead Developer",
    bio: "James brings technical excellence and leadership to our development team, mentoring junior developers and solving complex challenges.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Aisha Johnson",
    role: "Project Manager",
    bio: "Aisha ensures our projects run smoothly, on time, and on budget while maintaining clear communication with clients.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Michael Patel",
    role: "DevOps Engineer",
    bio: "Michael oversees our infrastructure and deployment processes, ensuring scalability, security, and reliability.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };
  
  const getItemsToShow = () => {
    // For simplicity, we'll determine based on window width if available
    // In a real implementation, you'd use a hook like useBreakpoint
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return itemsPerPage.mobile;
      if (window.innerWidth < 1024) return itemsPerPage.tablet;
    }
    return itemsPerPage.desktop;
  };
  
  const visibleItems = getItemsToShow();
  const totalPages = Math.ceil(teamMembers.length / visibleItems);
  
  const handleNext = () => {
    if (currentIndex < teamMembers.length - visibleItems) {
      setCurrentIndex(currentIndex + visibleItems);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleItems);
    } else {
      // Go to the last page
      setCurrentIndex(Math.max(0, teamMembers.length - visibleItems));
    }
  };
  
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Our talented team of experts is passionate about creating exceptional
            digital experiences that drive results.
          </p>
        </div>
        
        <div className="relative max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-semibold">Leadership & Key Team Members</h3>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers
              .slice(currentIndex, currentIndex + visibleItems)
              .map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setIsHovering(member.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-[3/4] overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            width={300}
                            height={400}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-white/80 text-sm mb-3">
                            {member.role}
                          </p>
                          <p className={`text-white/70 text-sm transition-opacity duration-300 ${
                            isHovering === member.id ? "opacity-100" : "opacity-0"
                          }`}>
                            {member.bio}
                          </p>
                          <div className="flex gap-3 mt-4">
                            <a
                              href={member.social.linkedin}
                              className="text-white/80 hover:text-white transition-colors"
                            >
                              <LinkedinIcon className="h-5 w-5" />
                            </a>
                            <a
                              href={member.social.twitter}
                              className="text-white/80 hover:text-white transition-colors"
                            >
                              <TwitterIcon className="h-5 w-5" />
                            </a>
                            <a
                              href={member.social.github}
                              className="text-white/80 hover:text-white transition-colors"
                            >
                              <GithubIcon className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-2 h-2 rounded-full mx-1 p-0 ${
                  Math.floor(currentIndex / visibleItems) === index
                    ? "bg-primary"
                    : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index * visibleItems)}
              ></Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}