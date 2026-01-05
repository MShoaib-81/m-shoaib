import { 
  Code, 
  Brain, 
  Layers, 
  Wrench,
  FileCode,
  Cpu,
  Eye,
  MessageSquare,
  Lightbulb,
  GitBranch,
  Terminal,
  Box,
  BookOpen,
  Cloud
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500/20 to-blue-600/20",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "C++", icon: FileCode },
      { name: "JavaScript", icon: FileCode },
    ]
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "from-purple-500/20 to-purple-600/20",
    skills: [
      { name: "Machine Learning", icon: Cpu },
      { name: "Deep Learning", icon: Layers },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
      { name: "Explainable AI", icon: Lightbulb },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    color: "from-orange-500/20 to-orange-600/20",
    skills: [
      { name: "TensorFlow", icon: Box },
      { name: "PyTorch", icon: Box },
      { name: "OpenCV", icon: Eye },
      { name: "Scikit-learn", icon: Cpu },
      { name: "NumPy", icon: Cpu },
      { name: "Pandas", icon: Cpu },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-green-500/20 to-green-600/20",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "Docker", icon: Box },
      { name: "Jupyter", icon: BookOpen },
      { name: "Google Colab", icon: Cloud },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              My expertise in AI/ML, development frameworks, and modern technologies
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 100}>
              <div className="soft-card-hover p-6 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-badge flex items-center gap-2"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      <skill.icon className="w-4 h-4 text-primary" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;