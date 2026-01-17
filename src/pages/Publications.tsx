import { useState } from "react";
import { FileText, ExternalLink, Calendar, Users, BookOpen, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  tags: string[];
  doi?: string;
  pdfUrl?: string;
  status: "Published" | "Under Review" | "Preprint";
  citations?: number;
  type: "Journal" | "Conference" | "Preprint";
}

const publications: Publication[] = [
  {
    title: "Explainable AI for Alzheimer's Disease Detection Using Multimodal Data",
    authors: "Muhammad Shoaib, Ahmed Khan, Sarah Johnson",
    venue: "Journal of Medical AI",
    year: "2024",
    abstract: "A comprehensive study on leveraging explainable artificial intelligence techniques for early detection of Alzheimer's disease using multimodal neuroimaging data. This research introduces a novel framework that combines deep learning models with interpretability methods such as SHAP and Grad-CAM to provide clinicians with transparent and trustworthy diagnostic support. Our approach achieved 94.2% accuracy on the ADNI dataset while maintaining high interpretability scores.",
    tags: ["XAI", "Medical Imaging", "Deep Learning", "Alzheimer's", "Healthcare AI"],
    doi: "https://doi.org/example1",
    status: "Under Review",
    type: "Journal"
  },
  {
    title: "Deep Learning Approaches for Medical Image Analysis: A Systematic Review",
    authors: "Muhammad Shoaib, Maria Garcia, John Smith",
    venue: "IEEE Access",
    year: "2024",
    abstract: "A systematic review of deep learning methodologies applied to medical image analysis, covering CNNs, transformers, and hybrid architectures. This comprehensive survey analyzes over 200 papers published between 2018-2024, categorizing approaches by imaging modality (CT, MRI, X-ray, ultrasound) and clinical application. We identify key trends, challenges, and future directions in the field of AI-assisted medical diagnostics.",
    tags: ["Deep Learning", "Medical Imaging", "Systematic Review", "CNN", "Transformers"],
    status: "Under Review",
    type: "Journal"
  },
  {
    title: "Transformer-Based Sentiment Analysis with Explainability",
    authors: "Muhammad Shoaib, Li Wei, Omar Hassan",
    venue: "International Conference on Natural Language Processing",
    year: "2023",
    abstract: "Novel approach combining transformer architectures with explainability methods for transparent sentiment classification in social media text. We propose SentiXplain, a framework that integrates BERT-based models with attention visualization and feature attribution techniques. The system not only classifies sentiment but also highlights the key phrases and contextual elements driving each prediction, enabling users to understand and trust the model's decisions.",
    tags: ["NLP", "Transformers", "XAI", "Sentiment Analysis", "BERT"],
    doi: "https://doi.org/example2",
    status: "Published",
    citations: 12,
    type: "Conference"
  },
  {
    title: "Depression Detection in Social Media Using Multimodal Deep Learning",
    authors: "Muhammad Shoaib, Emily Brown, David Lee",
    venue: "Journal of Affective Computing",
    year: "2023",
    abstract: "This paper presents a multimodal approach to detecting depression indicators in social media posts by analyzing both textual content and user behavior patterns. Our model combines LSTM networks for sequential text analysis with graph neural networks for social interaction patterns. Tested on a dataset of 50,000 users, our approach achieved 89.7% accuracy in identifying at-risk individuals while maintaining strict privacy standards.",
    tags: ["Mental Health AI", "Multimodal Learning", "Social Media", "LSTM", "GNN"],
    doi: "https://doi.org/example3",
    status: "Published",
    citations: 28,
    type: "Journal"
  },
  {
    title: "Real-Time Sign Language Recognition Using 3D CNNs and Attention Mechanisms",
    authors: "Muhammad Shoaib, Anna Kowalski, Chen Xu",
    venue: "Computer Vision and Pattern Recognition Workshop",
    year: "2023",
    abstract: "We present a real-time sign language recognition system utilizing 3D convolutional neural networks enhanced with spatial-temporal attention mechanisms. Our approach processes video streams to recognize American Sign Language (ASL) gestures with 96.3% accuracy and sub-100ms latency. The system is designed for deployment on edge devices, enabling accessible communication tools for the deaf and hard-of-hearing community.",
    tags: ["Computer Vision", "Sign Language", "3D CNN", "Attention", "Accessibility"],
    status: "Published",
    citations: 8,
    type: "Conference"
  }
];

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === "All" || pub.type === selectedType;
    const matchesStatus = selectedStatus === "All" || pub.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-12">
              <Link to="/#publications" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground tracking-tight mb-4">
                Publications
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                My research focuses on developing AI systems for healthcare, natural language processing, 
                and computer vision with an emphasis on explainability and real-world impact.
              </p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-surface/50 border-white/10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["All", "Journal", "Conference", "Preprint"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedType === type
                        ? "bg-primary text-primary-foreground"
                        : "bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {["All", "Published", "Under Review"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedStatus === status
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-white/10"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <ScrollReveal key={publication.title} delay={150 + index * 50}>
                <article className="soft-card-hover p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 flex items-center justify-center">
                        {publication.type === "Journal" ? (
                          <BookOpen className="w-8 h-8 text-primary" />
                        ) : (
                          <FileText className="w-8 h-8 text-primary" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            publication.status === "Published"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : publication.status === "Under Review"
                              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}>
                            {publication.status}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface/80 text-foreground border border-white/10">
                            {publication.type}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold font-display text-foreground leading-tight">
                          {publication.title}
                        </h2>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          <span>{publication.authors}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          <span>{publication.venue}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.year}</span>
                        </div>
                        {publication.citations && (
                          <div className="flex items-center gap-1.5 text-primary">
                            <FileText className="w-4 h-4" />
                            <span>{publication.citations} citations</span>
                          </div>
                        )}
                      </div>

                      {/* Abstract */}
                      <p className="text-muted-foreground leading-relaxed">
                        {publication.abstract}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {publication.tags.map((tag) => (
                          <span key={tag} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      {publication.doi && (
                        <div className="pt-2">
                          <a
                            href={publication.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
                              <FileText className="w-4 h-4 mr-2" />
                              View Paper
                              <ExternalLink className="w-3 h-3 ml-2" />
                            </Button>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Publications;
