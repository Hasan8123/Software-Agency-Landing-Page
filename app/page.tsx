import { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import About from "@/components/sections/about";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "LumenDev - Software Agency",
  description: "Lighting the path to digital excellence.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}