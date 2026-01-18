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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight">
              About Me
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-start">
          {/* Left Column - Image + Info Cards */}
          <ScrollReveal delay={100}>
            <div className="space-y-3 w-full max-w-[260px] mx-auto lg:mx-0">
              {/* Profile Image with Animated Border */}
              <div className="relative group">
                {/* Animated rotating border */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_3s_linear_infinite]"
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
                    backgroundSize: '300% 100%',
                  }}
                />
                
                {/* Glowing effect behind the border */}
                <div 
                  className="absolute -inset-1 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-[gradient-shift_3s_linear_infinite]"
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
                    backgroundSize: '300% 100%',
                  }}
                />
                
                {/* Inner container to create the border effect */}
                <div className="relative rounded-2xl p-[3px]" style={{ background: 'hsl(220 20% 4%)' }}>
                  <img
                    src={profilePhoto}
                    alt="Muhammad Shoaib"
                    className="relative w-full aspect-square object-cover object-top rounded-xl transition-all duration-500"
                  />
                </div>
                
                {/* Open to Work Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/40 backdrop-blur-sm z-10">
                  <span className="text-[10px] font-medium text-green-400">Open to Work</span>
                </div>
              </div>

              {/* Compact Info Cards */}
              <div className="flex gap-2">
                {infoCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="flex-1 py-2.5 px-2 rounded-lg bg-surface/60 border border-white/5 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/30 hover:bg-surface/80 group"
                  >
                    <card.icon className={`w-4 h-4 ${card.color} mx-auto mb-1.5 group-hover:scale-110 transition-transform duration-300`} />
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-0.5">{card.label}</p>
                    <p className="text-[11px] font-semibold text-foreground leading-tight">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Bio */}
          <ScrollReveal delay={200}>
            <div className="space-y-5">
              <h3 className="text-2xl font-bold font-display text-foreground">
                Passionate AI Researcher & Developer
              </h3>
              
              <div className="space-y-3 text-muted-foreground leading-7">
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

        {/* Research Interests - Reduced top margin */}
        <ScrollReveal delay={300}>
          <div className="mt-10">
            <h3 className="text-2xl font-bold font-display text-foreground text-center mb-6">
              Research Interests
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {researchAreas.map((area, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-xl bg-surface/50 border border-white/5 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/20 hover:bg-surface/70 hover:shadow-[0_0_20px_rgba(0,188,212,0.15)] group cursor-pointer"
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <area.icon className="w-4 h-4 text-foreground group-hover:animate-pulse transition-all duration-300" />
                  </div>
                  <p className="text-xs font-medium text-foreground leading-tight group-hover:text-primary transition-colors duration-300">{area.title}</p>
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
