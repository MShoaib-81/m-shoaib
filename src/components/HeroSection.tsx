import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Muhammad Shoaib</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            AI & ML Research Student | Developer
          </h2>
          
          <p className="text-lg md:text-xl text-surface-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Enthusiastic AI and Machine Learning student with a strong focus on Deep Learning, 
            medical image analysis, and intelligent systems. Interested in applying ML/DL 
            techniques for healthcare, mental health detection, and explainable AI. Actively 
            building projects and research ideas in computer vision, NLP, and audio-based 
            analysis to create impactful real-world solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-hero"
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
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;