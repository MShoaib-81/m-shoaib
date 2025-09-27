import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      title: "Alzheimer's Disease Detection (Multimodal + XAI)",
      description: "Early detection with MRI + text, XAI for transparency, research paper in progress.",
      image: alzheimerImage,
      technologies: ["Python", "TensorFlow", "Jupyter", "Google Scholar"],
      githubUrl: "https://github.com/MShoaib-81/alzheimer-detection"
    },
    {
      title: "Facial Emotion Recognition",
      description: "CNN-based facial expression classification, real-time tested.",
      image: facialEmotionImage,
      technologies: ["Python", "OpenCV", "Keras", "TensorFlow"],
      githubUrl: "https://github.com/MShoaib-81/facial-emotion-recognition"
    },
    {
      title: "Sign Language Recognition",
      description: "CV-based hand gesture recognition with CNNs.",
      image: signLanguageImage,
      technologies: ["Python", "Computer Vision", "CNNs", "MediaPipe"],
      githubUrl: "https://github.com/MShoaib-81/sign-language-recognition"
    },
    {
      title: "Explainable Sentiment Analysis using NLP",
      description: "Advanced sentiment analysis with explainability features using transformers and classical ML approaches.",
      image: sentimentAnalysisImage,
      technologies: ["TensorFlow", "Python", "Jupyter", "Google Scholar"],
      githubUrl: "https://github.com/MShoaib-81/Explainable_Sentiment_Analysis"
    },
    {
      title: "Fake News Detection",
      description: "TF-IDF, BERT, embeddings for misinformation detection.",
      image: fakeNewsImage,
      technologies: ["Python", "BERT", "NLP", "Scikit-learn"],
      githubUrl: "https://github.com/MShoaib-81/fake-news-detection"
    },
    {
      title: "Chatbot Development",
      description: "Seq2Seq + Transformer context-aware chatbot.",
      image: chatbotImage,
      technologies: ["Python", "Transformers", "PyTorch", "NLP"],
      githubUrl: "https://github.com/MShoaib-81/chatbot-development"
    },
    {
      title: "Advanced Regression Models",
      description: "Linear, Polynomial, Lasso, Ridge regression comparisons.",
      image: regressionModelsImage,
      technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "Statistics"],
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
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Hero Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Card Content */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Code Button */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;