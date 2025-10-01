import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Name cannot be empty" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().nonempty({ message: "Message cannot be empty" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = () => {
    const parsed = contactSchema.safeParse({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    });

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Please check your inputs.";
      toast({ variant: "destructive", title: "Invalid form data", description: firstError });
      return;
    }

    const { name, email, message } = parsed.data;
    const subject = `Message from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:mshoaib54@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const opened = window.open(mailtoLink, "_blank");
    if (!opened) {
      window.location.href = mailtoLink;
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-16">Get in Touch</h2>
          
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12">
            {/* Left Side - Send Message Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project ideas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>
                
                <Button
                  onClick={handleSendMessage}
                  className="w-full"
                  size="lg"
                  disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
            
            {/* Right Side - Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Get In Touch</h3>
              
              <div className="mb-8">
                <p className="text-lg text-surface-foreground leading-relaxed mb-6">
                  I'm always interested in discussing new opportunities, innovative projects, and collaborative research initiatives.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Whether you're looking to integrate AI into your product, need a modern web application, or want to explore creative technology solutions, I'd love to hear from you.
                </p>
              </div>
              
              {/* Email Section */}
              <div className="flex items-center gap-3 mb-8">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:mshoaib54@outlook.com" 
                  className="text-lg text-primary hover:text-primary/80 transition-colors"
                >
                  mshoaib54@outlook.com
                </a>
              </div>
              
              {/* Connect With Me Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Connect With Me</h4>
                <div className="flex gap-4">
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
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-card-foreground mb-3">Research Collaboration</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Interested in academic research partnerships, open-source contributions, or discussing the latest 
                  developments in AI/ML? I'm always excited to connect with fellow researchers and innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;