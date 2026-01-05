import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    type: "education",
    title: "Bachelor's in Artificial Intelligence",
    organization: "Aror University Sukkur",
    period: "2023 - 2027",
    description: "Pursuing a comprehensive degree in AI with focus on machine learning, deep learning, and computer vision.",
    highlights: ["Deep Learning", "Computer Vision", "NLP", "Research Methods"]
  },
  {
    type: "experience",
    title: "AI/ML Research Student",
    organization: "Independent Research",
    period: "2023 - Present",
    description: "Conducting research in healthcare AI, developing models for disease detection and mental health analysis.",
    highlights: ["Medical AI", "Explainable AI", "Published Research"]
  },
  {
    type: "experience",
    title: "Full-Stack AI Developer",
    organization: "Personal Projects",
    period: "2022 - Present",
    description: "Building end-to-end AI applications combining machine learning with web development.",
    highlights: ["TensorFlow", "PyTorch", "React", "Flask"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Education & <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              My academic journey and professional growth in AI and machine learning
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-glow z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="soft-card-hover p-6">
                      {/* Icon */}
                      <div className={`inline-flex items-center gap-2 mb-3 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <div className={`p-2 rounded-lg ${
                          item.type === 'education' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-secondary/10 text-secondary'
                        }`}>
                          {item.type === 'education' ? (
                            <GraduationCap className="w-5 h-5" />
                          ) : (
                            <Briefcase className="w-5 h-5" />
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          {item.type}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-semibold text-foreground font-display mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">{item.organization}</p>

                      {/* Period */}
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          {item.highlights.map((highlight) => (
                            <span key={highlight} className="tech-tag">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;