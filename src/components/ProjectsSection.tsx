import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
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

const categories = ["All", "Medical AI", "Computer Vision", "NLP", "Research"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              A showcase of innovative solutions at the intersection of AI, healthcare, and technology
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="soft-card-hover group overflow-hidden h-full flex flex-col">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;