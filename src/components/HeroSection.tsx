import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.png";
const roles = ["Healthcare AI Researcher", "Explainable AI Advocate", "NLP for Low-Resource Languages", "Computer Vision & Medical Imaging"];
const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentRoleIndex]);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleDownloadCV = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/Muhammad_Shoaib_CV.pdf';
      link.download = 'Muhammad_Shoaib_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => setIsDownloading(false), 1000);
    }, 500);
  };
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="space-y-4">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 status-badge open">
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                Open to Opportunities
              </div>
              
              {/* Name */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                <span className="text-foreground">Muhammad</span>{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">Shoaib</span>
              </h1>
              
              {/* Static Subtitle */}
              
              
              {/* Typewriter Role */}
              <div className="h-8 flex items-center">
                <span className="text-lg md:text-xl text-primary-foreground font-semibold">
                  {displayedText}
                  <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink" />
                </span>
              </div>
              
              {/* Bio */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl pt-2">
                Building trustworthy AI systems for healthcare, mental well-being, and underserved languages — where research meets real-world impact.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="btn-primary group" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className={`btn-download group ${isDownloading ? 'downloading' : ''}`} onClick={handleDownloadCV} disabled={isDownloading}>
                  <Download className={`w-4 h-4 mr-2 transition-transform ${isDownloading ? 'animate-bounce' : 'group-hover:-translate-y-0.5'}`} />
                  {isDownloading ? 'Downloading...' : 'Download CV'}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Static gradient border */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30" />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 transition-transform duration-500 ease-out group-hover:scale-105" style={{
              background: 'hsl(220 20% 4%)'
            }}>
                <img src={profilePhoto} alt="Muhammad Shoaib - AI/ML Research Student" className="w-full h-full object-cover object-top rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>;
};
export default HeroSection;