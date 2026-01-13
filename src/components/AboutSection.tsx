import { GraduationCap, Briefcase, Brain, Code } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import profilePhoto from "@/assets/profile-photo.png";

const infoCards = [
  { icon: Briefcase, label: "Status", value: "Open to Work", color: "text-green-400" },
  { icon: Brain, label: "Focus", value: "Healthcare AI", color: "text-primary" },
  { icon: GraduationCap, label: "Education", value: "BS in AI", color: "text-secondary" },
  { icon: Code, label: "Experience", value: "AI Developer", color: "text-purple-400" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image + Info Cards */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                <img
                  src={profilePhoto}
                  alt="Muhammad Shoaib"
                  className="relative w-full aspect-square object-cover object-top rounded-2xl border border-white/10"
                />
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {infoCards.map((card, index) => (
                  <div key={index} className="info-card group hover:border-primary/20 transition-all duration-300">
                    <card.icon className={`w-5 h-5 ${card.color} mb-2`} />
                    <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
                    <p className="text-sm font-semibold text-foreground">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Bio */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-foreground">
                Passionate AI Researcher & Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed-lg">
                <p>
                  I'm an AI student and researcher passionate about computer vision, medical AI, 
                  and intelligent systems with real-world impact. My focus is on building applications 
                  that enhance healthcare and mental well-being.
                </p>
                <p>
                  From brain tumor detection in MRI scans to depression detection on social media, 
                  I work at the intersection of deep learning, natural language processing, and 
                  practical solutions that make a difference.
                </p>
                <p>
                  With a strong foundation in machine learning frameworks and a passion for 
                  explainable AI, I bridge the gap between cutting-edge research and real-world 
                  applications. My goal is to leverage AI to create meaningful impact in 
                  healthcare and beyond.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 soft-card">
                  <p className="text-2xl font-bold gradient-text">5+</p>
                  <p className="text-xs text-muted-foreground mt-1">Projects</p>
                </div>
                <div className="text-center p-4 soft-card">
                  <p className="text-2xl font-bold gradient-text">3+</p>
                  <p className="text-xs text-muted-foreground mt-1">Research Areas</p>
                </div>
                <div className="text-center p-4 soft-card">
                  <p className="text-2xl font-bold gradient-text">10+</p>
                  <p className="text-xs text-muted-foreground mt-1">Technologies</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;