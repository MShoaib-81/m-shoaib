import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Alzheimer's Disease Detection (Multimodal + XAI)",
      description: "Early detection with MRI + text, XAI for transparency, research paper in progress.",
      githubUrl: "https://github.com/MShoaib-81/alzheimer-detection"
    },
    {
      title: "Facial Emotion Recognition",
      description: "CNN-based facial expression classification, real-time tested.",
      githubUrl: "https://github.com/MShoaib-81/facial-emotion-recognition"
    },
    {
      title: "Sign Language Recognition",
      description: "CV-based hand gesture recognition with CNNs.",
      githubUrl: "https://github.com/MShoaib-81/sign-language-recognition"
    },
    {
      title: "Sentiment Analysis using NLP",
      description: "LSTM/Transformers vs classical ML.",
      githubUrl: "https://github.com/MShoaib-81/sentiment-analysis-nlp"
    },
    {
      title: "Fake News Detection",
      description: "TF-IDF, BERT, embeddings for misinformation detection.",
      githubUrl: "https://github.com/MShoaib-81/fake-news-detection"
    },
    {
      title: "Chatbot Development",
      description: "Seq2Seq + Transformer context-aware chatbot.",
      githubUrl: "https://github.com/MShoaib-81/chatbot-development"
    },
    {
      title: "Advanced Regression Models",
      description: "Linear, Polynomial, Lasso, Ridge regression comparisons.",
      githubUrl: "https://github.com/MShoaib-81/advanced-regression-models"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-16">Research & Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4">
                  <Button
                    className="github-btn w-full justify-center"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={18} />
                    View on GitHub
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;