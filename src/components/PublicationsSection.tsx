import { FileText, ExternalLink, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const publication = {
  title: "Explainability of Transformer Models for Sentiment Analysis in Urdu",
  authors: "Muhammad Shoaib et al.",
  venue: "CSET 2026",
  year: "2026",
  abstract: "This research investigates the explainability of transformer-based models for sentiment analysis in Urdu, a low-resource language. By integrating interpretability techniques with state-of-the-art transformers, the study provides transparent and trustworthy sentiment classification — advancing NLP for underserved languages.",
  tags: ["NLP", "Transformers", "XAI", "Urdu", "Sentiment Analysis"],
  pdfUrl: "/CSET2026_1_1.pdf",
  status: "Published" as const,
  award: "Best Paper Award"
};

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              <span className="text-foreground">My</span>{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">Publications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Research contributions in AI, machine learning, and healthcare technology
            </p>
            <Link to="/publications" className="inline-flex items-center mt-4 text-primary hover:text-primary/80 transition-colors font-medium">
              View All Publications
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-2xl mx-auto">
            <div className="soft-card-hover group overflow-hidden flex flex-col ring-2 ring-primary/40 shadow-[0_0_30px_rgba(0,188,212,0.2)]">
              {/* Header */}
              <div className="relative h-32 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1">
                  <Award className="w-10 h-10 text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-400 tracking-wide uppercase">{publication.award}</span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    {publication.status}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface/80 text-foreground border border-white/10">
                    {publication.year}
                  </span>
                </div>

                <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-primary">
                      <FileText className="w-4 h-4 mr-2" />
                      View Paper
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground font-display">{publication.title}</h3>
                <p className="text-secondary text-sm font-medium mt-1">{publication.authors}</p>
                <p className="text-muted-foreground text-xs mt-1">{publication.venue}</p>
                <p className="text-sm text-muted-foreground my-4">{publication.abstract}</p>
                <div className="flex flex-wrap gap-2">
                  {publication.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PublicationsSection;
