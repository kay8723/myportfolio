
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-lightblue to-white pt-16">
      <div className="absolute inset-0 bg-[url('/info-science-wordcloud.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-darkgray mb-6">
            Hi, I'm <span className="text-portfolio-blue">Thato Maphakula</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            An energetic individual with exceptional communication skills and a passion for learning new technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-8 py-6 text-lg rounded-md"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
            <Button
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-lightblue px-8 py-6 text-lg rounded-md"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-portfolio-blue">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
