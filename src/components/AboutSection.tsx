import { GraduationCap, Brain, Code, Stethoscope, Heart, MessageSquare, Eye, Lightbulb } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import profilePhoto from "@/assets/profile-photo.png";

const infoCards = [
  { icon: Brain, label: "Focus", value: "Healthcare AI", color: "text-primary" },
  { icon: GraduationCap, label: "Education", value: "BS in AI", color: "text-secondary" },
  { icon: Code, label: "Experience", value: "AI Developer", color: "text-purple-400" },
];

const researchAreas = [
  { icon: Stethoscope, title: "Medical AI & Diagnostics", color: "from-red-500/20 to-red-600/20" },
  { icon: Brain, title: "Deep Learning", color: "from-purple-500/20 to-purple-600/20" },
  { icon: Eye, title: "Computer Vision", color: "from-blue-500/20 to-blue-600/20" },
  { icon: MessageSquare, title: "Natural Language Processing", color: "from-green-500/20 to-green-600/20" },
  { icon: Heart, title: "Mental Health AI", color: "from-pink-500/20 to-pink-600/20" },
  { icon: Lightbulb, title: "Explainable AI (XAI)", color: "from-yellow-500/20 to-yellow-600/20" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image + Info Cards */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              {/* Profile Image with Open to Work Badge */}
              <div className="relative max-w-sm mx-auto lg:mx-0 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl transition-all duration-500 group-hover:from-primary/40 group-hover:to-secondary/40 group-hover:blur-3xl" />
                <img
                  src={profilePhoto}
                  alt="Muhammad Shoaib"
                  className="relative w-full aspect-square object-cover object-top rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(0,188,212,0.3)]"
                />
                {/* Open to Work Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 backdrop-blur-sm">
                  <span className="text-xs font-medium text-green-400">Open to Work</span>
                </div>
              </div>

              {/* Info Cards Grid - 3 cards */}
              <div className="grid grid-cols-3 gap-3">
                {infoCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl bg-surface/50 border border-white/5 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/20 hover:bg-surface/70"
                  >
                    <card.icon className={`w-5 h-5 ${card.color} mx-auto mb-2`} />
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="text-xs font-semibold text-foreground">{card.value}</p>
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
              
              <div className="space-y-4 text-muted-foreground leading-7">
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
            </div>
          </ScrollReveal>
        </div>

        {/* Research Interests */}
        <ScrollReveal delay={300}>
          <div className="mt-20">
            <h3 className="text-2xl font-bold font-display text-foreground text-center mb-10">
              Research <span className="gradient-text">Interests</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {researchAreas.map((area, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-surface/50 border border-white/5 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/20 hover:bg-surface/70 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <p className="text-xs font-medium text-foreground leading-tight">{area.title}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
