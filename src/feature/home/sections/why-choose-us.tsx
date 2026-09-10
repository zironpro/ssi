"use client";

import React from "react";

const reasons = [
  {
    title: "Premium Materials",
    description: "We partner exclusively with industry-leading manufacturers to provide high-performance window films that guarantee longevity, clarity, and maximum protection.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Certified Experts",
    description: "Our installation teams are rigorously trained and certified, ensuring flawless, bubble-free applications even on the most challenging panoramic or high-rise glass.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.204-.25.43-.528.671-.832M11.42 15.17a6.5 6.5 0 01-9.193-9.192 6.5 6.5 0 019.193 9.192zm0 0l-3.328-3.328" />
      </svg>
    ),
  },
  {
    title: "Zero Disruption",
    description: "We understand the value of your time. Our seamless scheduling and efficient installation process mean your home or business operations continue without interruption.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Warranty",
    description: "We stand behind our work. Every installation is backed by an extensive 10-year warranty covering both the film materials and the labor.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24 sm:py-32 w-full overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <div className="sticky top-32">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white mb-6 border border-white/10 backdrop-blur-md">
                Why Choose SSI
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-sans">
                Engineered for <br />
                <span className="text-white">Excellence.</span>
              </h2>
              
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
                We don't just install window film; we engineer comfort and protect your investments. Here is why industry leaders and homeowners trust us.
              </p>
              
              <button className="group relative inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-sm font-bold text-black transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <span>Talk to an Expert</span>
                <span className="flex size-8 items-center justify-center rounded-full bg-white/50 text-black transition-transform group-hover:rotate-45">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Scrolling Right Column: Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col p-8 sm:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 inline-flex items-center justify-center size-14 rounded-2xl bg-white/10 text-white border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                    {reason.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
