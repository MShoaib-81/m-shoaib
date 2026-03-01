import { useState } from "react";
import { FileText, ExternalLink, Calendar, Users, BookOpen, ArrowLeft, Search, Award } from "lucide-react";
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
  award?: string;
}

const publications: Publication[] = [
  {
    title: "Explainability of Transformer Models for Sentiment Analysis in Urdu",
    authors: "Muhammad Shoaib et al.",
    venue: "CSET 2026",
    year: "2026",
    abstract: "This research investigates the explainability of transformer-based models for sentiment analysis in Urdu, a low-resource language. By integrating interpretability techniques with state-of-the-art transformers, the study provides transparent and trustworthy sentiment classification — advancing NLP for underserved languages. Received the Best Paper Award.",
    tags: ["NLP", "Transformers", "XAI", "Urdu", "Sentiment Analysis", "Best Paper Award"],
    pdfUrl: "/CSET2026_1_1.pdf",
    status: "Published",
    type: "Conference",
    award: "Best Paper Award"
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
                          {publication.award && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                              <Award className="w-3 h-3" />
                              {publication.award}
                            </span>
                          )}
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
                      {(publication.doi || publication.pdfUrl) && (
                        <div className="pt-2">
                          <a
                            href={publication.pdfUrl || publication.doi}
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
