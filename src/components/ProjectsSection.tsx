import { useState, useEffect, useCallback } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

import alzheimerImage from "@/assets/alzheimer-detection.jpg";
import facialEmotionImage from "@/assets/facial-emotion.jpg";
import signLanguageImage from "@/assets/sign-language.jpg";
import sentimentAnalysisImage from "@/assets/sentiment-analysis.jpg";
import fakeNewsImage from "@/assets/fake-news.jpg";
import chatbotImage from "@/assets/chatbot.jpg";
import regressionModelsImage from "@/assets/regression-models.jpg";

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  category: string;
  status: "Completed" | "In Progress";
}

const projects: Project[] = [
  {
    title: "Alzheimer's Disease Detection",
    subtitle: "Multimodal + XAI",
    description: "Deep learning-based system for early Alzheimer's detection using MRI scans and multimodal data with explainable AI for transparency.",
    image: alzheimerImage,
    technologies: ["Python", "TensorFlow", "XAI", "Keras"],
    githubUrl: "https://github.com/MShoaib-81/alzheimer-detection",
    category: "Medical AI",
    status: "Completed"
  },
  {
    title: "Facial Emotion Recognition",
    description: "CNN-based facial expression classification with real-time testing using computer vision.",
    image: facialEmotionImage,
    technologies: ["Python", "OpenCV", "Keras", "CNN"],
    githubUrl: "https://github.com/MShoaib-81/facial-emotion-recognition",
    category: "Computer Vision",
    status: "Completed"
  },
  {
    title: "Sign Language Recognition",
    description: "CV-based hand gesture recognition using CNNs and MediaPipe for accessibility.",
    image: signLanguageImage,
    technologies: ["Python", "CNNs", "MediaPipe"],
    githubUrl: "https://github.com/MShoaib-81/sign-language-recognition",
    category: "Computer Vision",
    status: "Completed"
  },
  {
    title: "Explainable Sentiment Analysis",
    subtitle: "NLP",
    description: "Advanced sentiment analysis with explainability using transformers and BERT.",
    image: sentimentAnalysisImage,
    technologies: ["TensorFlow", "Python", "BERT"],
    githubUrl: "https://github.com/MShoaib-81/Explainable_Sentiment_Analysis",
    category: "NLP",
    status: "Completed"
  },
  {
    title: "Fake News Detection",
    description: "TF-IDF, BERT, and embeddings for misinformation detection and classification.",
    image: fakeNewsImage,
    technologies: ["Python", "BERT", "NLP"],
    githubUrl: "https://github.com/MShoaib-81/fake-news-detection",
    category: "NLP",
    status: "Completed"
  },
  {
    title: "AI Chatbot System",
    description: "Seq2Seq + Transformer context-aware conversational chatbot.",
    image: chatbotImage,
    technologies: ["PyTorch", "Transformers", "NLP"],
    githubUrl: "https://github.com/MShoaib-81/chatbot-development",
    category: "NLP",
    status: "Completed"
  },
  {
    title: "Advanced Regression Models",
    description: "Linear, Polynomial, Lasso, Ridge regression comparisons and analysis.",
    image: regressionModelsImage,
    technologies: ["Python", "Scikit-learn", "NumPy"],
    githubUrl: "https://github.com/MShoaib-81/advanced-regression-models",
    category: "Research",
    status: "Completed"
  }
];

const ProjectCard = ({ project, isCenter }: { project: Project; isCenter: boolean }) => (
  <div 
    className={`soft-card-hover group overflow-hidden h-full flex flex-col transition-all duration-500 ${
      isCenter ? 'ring-2 ring-primary/40 shadow-[0_0_30px_rgba(0,188,212,0.2)]' : ''
    }`}
  >
    {/* Image Container */}
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
      
      {/* Status Badge */}
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.status === "Completed" 
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
        }`}>
          {project.status}
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn-primary">
            <Github className="w-4 h-4 mr-2" />
            View Code
            <ExternalLink className="w-3 h-3 ml-2" />
          </Button>
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex-1 flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-foreground font-display">
          {project.title}
        </h3>
        {project.subtitle && (
          <span className="text-secondary text-sm font-medium">{project.subtitle}</span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-4 flex-1">
        {project.description}
      </p>
      
      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = projects.length;
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Get visible projects with infinite loop
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentIndex + i) % totalSlides;
      visible.push({ project: projects[index], index });
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();
  const centerIndex = Math.floor(slidesPerView / 2);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight">
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              A showcase of innovative solutions at the intersection of AI, healthcare, and technology
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal delay={100}>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-surface/80 border border-white/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-surface/80 border border-white/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-6">
              <div className="flex gap-6 transition-transform duration-500 ease-out">
                {visibleProjects.map(({ project, index }, i) => (
                  <div 
                    key={`${project.title}-${index}`}
                    className="flex-shrink-0"
                    style={{ width: `calc((100% - ${(slidesPerView - 1) * 24}px) / ${slidesPerView})` }}
                  >
                    <ProjectCard 
                      project={project} 
                      isCenter={slidesPerView === 3 ? i === centerIndex : slidesPerView === 1}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
