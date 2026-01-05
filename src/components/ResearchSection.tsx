import { Brain, Heart, MessageSquare, Eye, Lightbulb, Stethoscope } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ResearchArea {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const researchAreas: ResearchArea[] = [
  {
    icon: Stethoscope,
    title: "Medical AI & Diagnostics",
    description: "Developing AI systems for early disease detection using medical imaging and multimodal data analysis.",
    color: "from-red-500/20 to-red-600/20"
  },
  {
    icon: Brain,
    title: "Deep Learning",
    description: "Exploring advanced neural network architectures for complex pattern recognition and prediction tasks.",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Building intelligent systems that can interpret and understand visual information from the world.",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Creating models that understand, interpret, and generate human language for various applications.",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    icon: Heart,
    title: "Mental Health AI",
    description: "Developing systems for mental health detection and support using social media and behavioral analysis.",
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    icon: Lightbulb,
    title: "Explainable AI (XAI)",
    description: "Making AI decisions transparent and interpretable for building trust in critical applications.",
    color: "from-yellow-500/20 to-yellow-600/20"
  }
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Research <span className="gradient-text">Interests</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Areas of focus where I'm actively exploring and contributing to the field
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {researchAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 100}>
              <div className="soft-card-hover p-6 h-full group">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground font-display mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;