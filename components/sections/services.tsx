"use client";

import { useState } from "react";
import { motion } from "@/lib/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindow, Database, Globe, Cpu } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "webdev",
    title: "Web Development",
    icon: <AppWindow className="h-5 w-5" />,
    description:
      "We build responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices.",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWAs)",
      "Front-end development (Next.js, React, Angular, Vue)",
      "Back-end development (Node.js, Python, PHP)",
      "E-commerce solutions",
      "Content Management Systems",
    ],
    image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: <Cpu className="h-5 w-5" />,
    description:
      "We develop custom AI and machine learning solutions that automate processes, derive insights from data, and create intelligent applications.",
    features: [
      "Custom AI Assistant",
      "Natural language processing",
      "Computer vision applications",
      "Custom AI Models",
      "AI model development and training",
      "AI integration with existing systems",
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: <Globe className="h-5 w-5" />,
    description:
      "We develop custom e-commerce solutions that drive sales, enhance customer experience, and streamline operations for businesses of all sizes.",
    features: [
      "Custom web application development",
      "Shopify and WooCommerce development",
      "Payment gateway integration",
      "Inventory management systems",
      "Order fulfillment automation",
      "E-commerce analytics and reporting",
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    icon: <Database className="h-5 w-5" />,
    description:
      "We design and implement cloud infrastructure and services that optimize performance, security, and cost-efficiency for your applications.",
    features: [
      "Cloud architecture design",
      "AWS, Azure, and Google Cloud implementation",
      "Serverless architecture",
      "Database solutions",
      "DevOps and CI/CD pipelines",
      "Cloud migration strategies",
    ],
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("webdev");

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Specialized Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of digital services to help businesses
            transform, grow, and succeed in the digital landscape.
          </p>
        </div>

        <Tabs
          defaultValue="webdev"
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-[1200px] mx-auto"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center gap-2 px-4 py-3"
              >
                {service.icon}
                <span className="hidden md:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="mt-0"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <div className="h-5 w-5 mt-0.5 rounded-full bg-chart-1/20 text-chart-1 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-xl overflow-hidden"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full rounded-xl"
                        width={600}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}