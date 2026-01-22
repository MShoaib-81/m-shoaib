import ScrollReveal from "./ScrollReveal";
import { 
  Brain, Eye, MessageSquare, Lightbulb, Code, 
  GitBranch, Terminal, Container, BookOpen, Cloud,
  Cpu, BarChart3, Database, Layers, Zap, Binary
} from "lucide-react";
import { ReactNode } from "react";

type SkillItem = {
  name: string;
  icon: ReactNode;
};

const coreSkills: SkillItem[] = [
  { name: "Python", icon: <Code size={16} /> },
  { name: "TensorFlow", icon: <Layers size={16} /> },
  { name: "PyTorch", icon: <Zap size={16} /> },
  { name: "Machine Learning", icon: <Brain size={16} /> },
  { name: "Deep Learning", icon: <Cpu size={16} /> },
  { name: "Computer Vision", icon: <Eye size={16} /> },
  { name: "NLP", icon: <MessageSquare size={16} /> },
  { name: "Explainable AI", icon: <Lightbulb size={16} /> },
  { name: "C++", icon: <Binary size={16} /> },
  { name: "JavaScript", icon: <Code size={16} /> },
];

const toolsSkills: SkillItem[] = [
  { name: "OpenCV", icon: <Eye size={16} /> },
  { name: "Scikit-learn", icon: <BarChart3 size={16} /> },
  { name: "NumPy", icon: <Database size={16} /> },
  { name: "Pandas", icon: <Database size={16} /> },
  { name: "Keras", icon: <Layers size={16} /> },
  { name: "Git & GitHub", icon: <GitBranch size={16} /> },
  { name: "Linux", icon: <Terminal size={16} /> },
  { name: "Docker", icon: <Container size={16} /> },
  { name: "Jupyter", icon: <BookOpen size={16} /> },
  { name: "Google Colab", icon: <Cloud size={16} /> },
  { name: "BERT", icon: <MessageSquare size={16} /> },
  { name: "Transformers", icon: <Cpu size={16} /> },
];

const SkillBadge = ({ skill }: { skill: SkillItem }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/40 border border-primary/20 backdrop-blur-sm text-sm font-medium text-foreground whitespace-nowrap mx-2">
    <span className="text-primary">{skill.icon}</span>
    {skill.name}
  </span>
);

const MarqueeRow = ({ skills, direction = "left" }: { skills: SkillItem[], direction?: "left" | "right" }) => (
  <div className="relative overflow-hidden py-3">
    {/* Gradient masks */}
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
    
    <div className={`flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
      {/* First set */}
      {skills.map((skill, index) => (
        <SkillBadge key={`first-${index}`} skill={skill} />
      ))}
      {/* Duplicate for seamless loop */}
      {skills.map((skill, index) => (
        <SkillBadge key={`second-${index}`} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              <span className="text-foreground">Technical</span>{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              My expertise in AI/ML, development frameworks, and modern technologies
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="space-y-8">
            {/* Core Technologies */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 text-center">
                Core Technologies
              </h3>
              <MarqueeRow skills={coreSkills} direction="left" />
            </div>
            
            {/* Tools & Frameworks */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 text-center">
                Tools & Frameworks
              </h3>
              <MarqueeRow skills={toolsSkills} direction="right" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
