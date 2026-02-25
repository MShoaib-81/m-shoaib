import { Award, ExternalLink, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import certificateBestPaper from "@/assets/certificate-best-paper.jpeg";
import { useState } from "react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

const certificates: Certificate[] = [
  {
    title: "Best Paper Award",
    issuer: "ORIC – Aror University of Art, Architecture, Design & Heritage, Sukkur",
    date: "2026",
    description:
      "Certificate of Appreciation for securing the Best Paper Award at the 1st International Conference on Computing Sciences & Emerging Trends (CSET'26) held at QUEST.",
    image: certificateBestPaper,
    tags: ["Research Excellence", "AI", "CSET'26"],
  },
];

const CertificatesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              <span className="text-foreground">Certificates &</span>{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Awards
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Recognitions and achievements in research and technology
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={100 + index * 50}>
              <div className="soft-card-hover group overflow-hidden h-full flex flex-col">
                {/* Certificate Image */}
                <div
                  className="relative h-52 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 flex items-center gap-1.5">
                      <Award className="w-3 h-3" />
                      Award
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground font-display mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-secondary text-sm font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-1 mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
