"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "SKYLINE PENTHOUSE",
    category: "Residential / Solar Control",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    href: "/projects/skyline"
  },
  {
    title: "DOWNTOWN CORPORATE CENTER",
    category: "Commercial / Safety & Security",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    href: "/projects/downtown"
  },
  {
    title: "MODERN OASIS VILLA",
    category: "Residential / Privacy",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    href: "/projects/oasis"
  },
  {
    title: "TECH HUB HEADQUARTERS",
    category: "Commercial / Solar Control",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    href: "/projects/tech-hub"
  }
];

export default function ProjectsGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    // Mobile: disable horizontal GSAP scroll, let native touch overflow-x do it
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const panels = gsap.utils.toArray(".project-panel");
      
      const totalWidth = scrollContainer.scrollWidth - window.innerWidth;

      // Pin the section and scroll the container horizontally
      gsap.to(scrollContainer, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth * 0.5}`,
        }
      });

      // Image Parallax inside the panels
      panels.forEach((panel: any) => {
        const img = panel.querySelector(".project-image");
        gsap.fromTo(img, 
          { x: "-10%" },
          {
            x: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              scrub: true,
              start: "top top",
              end: () => `+=${totalWidth * 0.5}`,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-auto md:h-screen bg-[var(--color-warm-ivory)] overflow-hidden flex flex-col justify-center py-20 md:py-0 relative">
      
      {/* Title */}
      <div className="container-master relative md:absolute md:top-12 left-0 right-0 z-20 pointer-events-none mb-8 md:mb-0">
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] font-extrabold tracking-tighter text-[var(--color-deep-forest)] leading-none">
          OUR WORK.
        </h2>
      </div>

      {/* Container: Vertical stack on mobile, Horizontal scroll on desktop */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-col md:flex-row w-full h-auto md:h-[80vh] md:w-[250vw] lg:w-[200vw] gap-8 md:gap-0 items-center px-4 md:px-0"
      >
        {projects.map((project, i) => (
          <div 
            key={project.title} 
            className="project-panel relative w-full h-[60vh] md:w-[60vw] lg:w-[50vw] md:h-full flex-shrink-0 px-0 md:px-6"
          >
            <Link href={project.href} className="group relative block w-full h-full overflow-hidden rounded-[24px] md:rounded-[32px] bg-[var(--color-deep-forest)] shadow-2xl">
              
              <div className="absolute inset-0 w-[120%] -left-[10%]">
                <div 
                  className="project-image absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-[var(--color-warm-ivory)]">
                <div className="text-[var(--color-arch-sand)] text-[10px] md:text-[12px] font-bold tracking-widest uppercase mb-2 md:mb-3 transition-transform duration-500 group-hover:-translate-y-2">
                  {project.category}
                </div>
                <h3 className="text-[28px] md:text-[40px] font-bold tracking-tight mb-4 md:mb-6 leading-tight transition-transform duration-500 group-hover:-translate-y-2">
                  {project.title}
                </h3>
                
                <div className="inline-flex items-center gap-2 font-bold tracking-widest text-[12px] uppercase transition-all opacity-100 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 duration-500">
                  VIEW PROJECT <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
    </section>
  );
}
