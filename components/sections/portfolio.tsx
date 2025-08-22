"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web" },
  { id: "mobile", name: "Mobile" },
  { id: "design", name: "UI/UX" },
  { id: "saas", name: "SaaS" },
  { id: "ai", name: "AI/ML" },
];

const projects = [
  {
    id: 1,
    title: "HealthTrack Pro",
    description: "A comprehensive health tracking platform for healthcare providers",
    image: "https://images.pexels.com/photos/3927392/pexels-photo-3927392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["web", "saas"],
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "EcoShop",
    description: "An e-commerce platform for eco-friendly products",
    image: "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["web", "design"],
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "TaskFlow",
    description: "A mobile productivity app for busy professionals",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["mobile", "design"],
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 4,
    title: "FinanceHub",
    description: "Personal finance management application",
    image: "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["web", "saas"],
    tags: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    id: 5,
    title: "DeliveryDash",
    description: "On-demand logistics and delivery service",
    image: "https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["mobile"],
    tags: ["Flutter", "Firebase", "Google Maps API"],
  },
  {
    id: 6,
    title: "WorkspaceOS",
    description: "Workspace management system for modern offices",
    image: "https://images.pexels.com/photos/6372/coffee-smartphone-desk-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["web", "saas", "design"],
    tags: ["Angular", "Express", "MongoDB"],
  },
  {
    id: 7,
    title: "SmartVision AI",
    description: "Advanced computer vision platform for automated quality control in manufacturing",
    image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["ai", "saas"],
    tags: ["Python", "TensorFlow", "OpenCV", "FastAPI", "OpenAI SDK"],
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of successful projects across various industries
            and technologies.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-[100px]"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pt-5">
                  <div className="flex gap-2 mb-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

              </Card>
            </motion.div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              onClick={() => setVisibleProjects((prev) => prev + 3)}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}