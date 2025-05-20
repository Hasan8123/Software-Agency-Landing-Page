import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2018, LumenDev began with a vision to bridge the gap between
                technical excellence and beautiful design. What started as a small team
                of passionate developers has grown into a full-service digital agency.
              </p>
              <p className="text-muted-foreground mb-6">
                We&apos;ve helped over 100 businesses across the globe transform their digital
                presence and create impactful applications that drive real results. Our
                approach combines technical innovation with user-centered design principles.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  { value: "100+", label: "Clients" },
                  { value: "150+", label: "Projects" },
                  { value: "98%", label: "Client Retention" },
                  { value: "25+", label: "Team Members" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our team collaborating"
                  className="w-full h-full object-cover"
                  width={1260}
                  height={750}
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 md:-left-12 p-6 md:p-8 bg-background rounded-xl shadow-lg max-w-[280px]">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted"
                      >
                        <Image
                          src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`}
                          alt="Team member"
                          className="w-full h-full object-cover"
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-muted-foreground">Trusted by</p>
                    <p className="text-sm font-medium">Global enterprises</p>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-chart-4"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}