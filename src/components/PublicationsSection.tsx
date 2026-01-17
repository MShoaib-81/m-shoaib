import { useState, useEffect, useCallback } from "react";
import { FileText, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

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
}

const publications: Publication[] = [
  {
    title: "Explainable AI for Alzheimer's Disease Detection Using Multimodal Data",
    authors: "Muhammad Shoaib et al.",
    venue: "Journal of Medical AI",
    year: "2024",
    abstract: "A comprehensive study on leveraging explainable artificial intelligence techniques for early detection of Alzheimer's disease using multimodal neuroimaging data.",
    tags: ["XAI", "Medical Imaging", "Deep Learning"],
    doi: "https://doi.org/example",
    status: "Under Review"
  },
  {
    title: "Deep Learning Approaches for Medical Image Analysis: A Systematic Review",
    authors: "Muhammad Shoaib et al.",
    venue: "IEEE Access",
    year: "2024",
    abstract: "A systematic review of deep learning methodologies applied to medical image analysis, covering CNNs, transformers, and hybrid architectures.",
    tags: ["Deep Learning", "Medical Imaging", "Review"],
    status: "Under Review"
  },
  {
    title: "Transformer-Based Sentiment Analysis with Explainability",
    authors: "Muhammad Shoaib et al.",
    venue: "NLP Conference",
    year: "2023",
    abstract: "Novel approach combining transformer architectures with explainability methods for transparent sentiment classification in social media text.",
    tags: ["NLP", "Transformers", "XAI"],
    status: "Published"
  }
];

const PublicationCard = ({ publication, isCenter }: { publication: Publication; isCenter: boolean }) => (
  <div 
    className={`soft-card-hover group overflow-hidden h-full flex flex-col transition-all duration-500 ${
      isCenter ? 'ring-2 ring-primary/40 shadow-[0_0_30px_rgba(0,188,212,0.2)]' : ''
    }`}
  >
    {/* Header with Icon */}
    <div className="relative h-32 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 flex items-center justify-center">
      <FileText className="w-16 h-16 text-primary/60" />
      
      {/* Status Badge */}
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          publication.status === "Published" 
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : publication.status === "Under Review"
            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
        }`}>
          {publication.status}
        </span>
      </div>

      {/* Year Badge */}
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface/80 text-foreground border border-white/10">
          {publication.year}
        </span>
      </div>

      {/* Hover Overlay */}
      {publication.doi && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={publication.doi}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-primary">
              <FileText className="w-4 h-4 mr-2" />
              View Paper
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </a>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6 flex-1 flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-foreground font-display line-clamp-2">
          {publication.title}
        </h3>
        <p className="text-secondary text-sm font-medium mt-1">{publication.authors}</p>
        <p className="text-muted-foreground text-xs mt-1">{publication.venue}</p>
      </div>
      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
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
    </div>
  </div>
);

const PublicationsSection = () => {
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

  const totalSlides = publications.length;
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Get visible publications with infinite loop
  const getVisiblePublications = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentIndex + i) % totalSlides;
      visible.push({ publication: publications[index], index });
    }
    return visible;
  };

  const visiblePublications = getVisiblePublications();
  const centerIndex = Math.floor(slidesPerView / 2);

  return (
    <section id="publications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight">
              Publications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Research contributions in AI, machine learning, and healthcare technology
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
              aria-label="Previous publication"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-surface/80 border border-white/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
              aria-label="Next publication"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-6">
              <div className="flex gap-6 transition-transform duration-500 ease-out">
                {visiblePublications.map(({ publication, index }, i) => (
                  <div 
                    key={`${publication.title}-${index}`}
                    className="flex-shrink-0"
                    style={{ width: `calc((100% - ${(slidesPerView - 1) * 24}px) / ${slidesPerView})` }}
                  >
                    <PublicationCard 
                      publication={publication} 
                      isCenter={slidesPerView === 3 ? i === centerIndex : slidesPerView === 1}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {publications.map((_, index) => (
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

export default PublicationsSection;
