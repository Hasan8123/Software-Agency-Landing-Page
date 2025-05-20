"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "@/lib/motion-wrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Visit Us",
      details: ["123 Innovation Way", "San Francisco, CA 94107"],
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email Us",
      details: ["lumendev8@gmail.com"],
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Working Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 2PM"],
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to learn more about our services? We&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <Card>
              <CardContent className="pt-6">
                {isSuccess ? (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-300 p-4 rounded-lg mb-4">
                    <p className="text-sm font-medium">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : null}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="bg-muted/40"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                {...field}
                                className="bg-muted/40"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company name"
                              {...field}
                              className="bg-muted/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              rows={5}
                              {...field}
                              className="resize-none bg-muted/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-muted rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">{item.title}</h4>
                        {item.details.map((detail, i) => (
                          <p
                            key={i}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-auto">
              <CardHeader>
                <CardTitle>Let&apos;s Discuss Your Project</CardTitle>
                <CardDescription>
                  Schedule a free 30-minute consultation with our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <Button className="w-full" disabled>
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}