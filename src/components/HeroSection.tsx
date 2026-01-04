import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 font-display leading-none tracking-tight">
            <span className="gradient-text text-glow">Muhammad</span>
            <br />
            <span className="text-foreground">Shoaib</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-secondary mb-8 font-medium font-body tracking-wide">
            AI & ML Research Student <span className="text-muted-foreground">|</span> Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-body">
            Enthusiastic AI and Machine Learning student with a strong focus on Deep Learning, 
            medical image analysis, and intelligent systems. Interested in applying ML/DL 
            techniques for healthcare, mental health detection, and explainable AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-hero animate-pulse-glow"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              className="btn-hero-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;