import { GraduationCap, Brain, Code, Stethoscope, Heart, MessageSquare, Eye, Lightbulb } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const infoCards = [
  { icon: Brain, label: "Focus", value: "Healthcare AI & XAI", color: "text-primary" },
  { icon: GraduationCap, label: "Education", value: "BS in AI", color: "text-secondary" },
  { icon: Code, label: "Recognition", value: "Best Paper Awardee", color: "text-purple-400" },
];

const researchAreas = [
  { icon: Stethoscope, title: "Alzheimer's & Medical AI", color: "from-red-500/20 to-red-600/20" },
  { icon: Brain, title: "Deep Learning", color: "from-purple-500/20 to-purple-600/20" },
  { icon: Eye, title: "Computer Vision", color: "from-blue-500/20 to-blue-600/20" },
  { icon: MessageSquare, title: "NLP for Low-Resource Languages", color: "from-green-500/20 to-green-600/20" },
  { icon: Heart, title: "Depression Detection AI", color: "from-pink-500/20 to-pink-600/20" },
  { icon: Lightbulb, title: "Explainable AI (XAI)", color: "from-yellow-500/20 to-yellow-600/20" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              <span className="text-foreground">About</span>{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Centered Content */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Info Cards - Centered Row */}
          <ScrollReveal delay={100}>
            <div className="flex justify-center gap-3 flex-wrap">
              {infoCards.map((card, index) => (
                <div 
                  key={index} 
                  className="py-3 px-5 rounded-xl bg-surface/60 border border-white/5 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/30 hover:bg-surface/80 group"
                >
                  <card.icon className={`w-5 h-5 ${card.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{card.label}</p>
                  <p className="text-sm font-semibold text-foreground">{card.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Bio - Centered */}
          <ScrollReveal delay={200}>
            <div className="text-center space-y-5">
              <h3 className="text-2xl font-bold font-display">
                <span className="text-foreground">Research-Driven AI</span>{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">for Healthcare & Society</span>
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  I'm an AI researcher focused on building intelligent systems that serve people — from early Alzheimer's detection and depression screening to making NLP accessible for low-resource languages like Urdu. My work sits at the intersection of deep learning, medical imaging, and human-centered design.
                </p>
                <p>
                  I believe AI should be explainable, trustworthy, and grounded in real clinical and social needs — not just technically impressive. My recent research on transformer explainability for Urdu sentiment analysis received the Best Paper Award, reflecting my commitment to both rigor and relevance.
                </p>
                <p>
                  Whether it's computer vision for diagnostics or NLP for underserved communities, I build systems that prioritize impact over hype — bridging research and practical applications to create meaningful change in healthcare and mental well-being.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Research Interests - Reduced top margin */}
        <ScrollReveal delay={300}>
          <div className="mt-10">
            <h3 className="text-2xl font-bold font-display text-center mb-6">
              <span className="text-foreground">Research</span>{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">Interests</span>
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
