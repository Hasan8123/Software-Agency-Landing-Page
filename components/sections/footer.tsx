import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookie" },
      { name: "GDPR", href: "#gdpr" },
      { name: "Accessibility", href: "#accessibility" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">Lumen</span>
              <span className="text-foreground">Dev</span>
            </Link>
            <p className="text-muted-foreground mt-4 mb-6 max-w-md">
              Lighting the path to digital excellence.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">
                  123 Innovation Way, San Francisco, CA 94107
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">
                 lumendev8@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-background/60 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-muted-foreground">
                Stay updated with the latest trends and news
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-background"
                />
                <Button>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} LumenDev. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}