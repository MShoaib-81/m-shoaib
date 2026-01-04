import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

// Import project hero images
import alzheimerImage from "@/assets/alzheimer-detection.jpg";
import facialEmotionImage from "@/assets/facial-emotion.jpg";
import signLanguageImage from "@/assets/sign-language.jpg";
import sentimentAnalysisImage from "@/assets/sentiment-analysis.jpg";
import fakeNewsImage from "@/assets/fake-news.jpg";
import chatbotImage from "@/assets/chatbot.jpg";
import regressionModelsImage from "@/assets/regression-models.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Alzheimer's Disease Detection",
      subtitle: "Multimodal + XAI",
      description: "Early detection with MRI + text, XAI for transparency, research paper in progress.",
      image: alzheimerImage,
      technologies: ["Python", "TensorFlow", "XAI"],
      githubUrl: "https://github.com/MShoaib-81/alzheimer-detection",
      featured: true,
    },
    {
      title: "Facial Emotion Recognition",
      description: "CNN-based facial expression classification with real-time testing.",
      image: facialEmotionImage,
      technologies: ["Python", "OpenCV", "Keras"],
      githubUrl: "https://github.com/MShoaib-81/facial-emotion-recognition",
    },
    {
      title: "Sign Language Recognition",
      description: "CV-based hand gesture recognition with CNNs.",
      image: signLanguageImage,
      technologies: ["Python", "CNNs", "MediaPipe"],
      githubUrl: "https://github.com/MShoaib-81/sign-language-recognition",
    },
    {
      title: "Explainable Sentiment Analysis",
      subtitle: "NLP",
      description: "Advanced sentiment analysis with explainability using transformers.",
      image: sentimentAnalysisImage,
      technologies: ["TensorFlow", "Python", "BERT"],
      githubUrl: "https://github.com/MShoaib-81/Explainable_Sentiment_Analysis",
      featured: true,
    },
    {
      title: "Fake News Detection",
      description: "TF-IDF, BERT, embeddings for misinformation detection.",
      image: fakeNewsImage,
      technologies: ["Python", "BERT", "NLP"],
      githubUrl: "https://github.com/MShoaib-81/fake-news-detection",
    },
    {
      title: "Chatbot Development",
      description: "Seq2Seq + Transformer context-aware chatbot.",
      image: chatbotImage,
      technologies: ["PyTorch", "Transformers"],
      githubUrl: "https://github.com/MShoaib-81/chatbot-development",
    },
    {
      title: "Advanced Regression Models",
      description: "Linear, Polynomial, Lasso, Ridge regression comparisons.",
      image: regressionModelsImage,
      technologies: ["Python", "Scikit-learn"],
      githubUrl: "https://github.com/MShoaib-81/advanced-regression-models",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4 gradient-text">Research & Projects</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
              Exploring the intersection of AI, healthcare, and real-world applications
            </p>
          </ScrollReveal>
          
          {/* Bento Grid for Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 100}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <div className="glass-card-hover group h-full overflow-hidden">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${project.featured ? 'h-64' : 'h-48'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-background/80 backdrop-blur-sm border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                        <ExternalLink size={14} className="ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <span className="text-secondary text-sm font-medium">{project.subtitle}</span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
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
      </div>
    </section>
  );
};

export default ProjectsSection;