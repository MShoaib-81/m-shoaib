import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">Get in Touch</h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-surface-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              I'm always interested in discussing new opportunities, innovative projects, and collaborative research initiatives.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to integrate AI into your product, need a modern web application, or want to explore creative technology solutions, I'd love to hear from you.
            </p>
          </div>
          
          {/* Email Section */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <Mail className="w-5 h-5 text-primary" />
            <a 
              href="mailto:mshoaib54@outlook.com" 
              className="text-lg text-primary hover:text-primary/80 transition-colors"
            >
              mshoaib54@outlook.com
            </a>
          </div>
          
          {/* Connect With Me Section */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open("https://github.com/MShoaib-81", '_blank')}
              >
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open("https://www.linkedin.com/in/muhammad-shoaib-726b0a382/", '_blank')}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Research Collaboration Section */}
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Research Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Interested in academic research partnerships, open-source contributions, or discussing the latest 
              developments in AI/ML? I'm always excited to connect with fellow researchers and innovators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;