import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import ScrollReveal from "./ScrollReveal";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = () => {
    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      toast({ 
        variant: "destructive", 
        title: "Invalid form data", 
        description: parsed.error.errors[0]?.message 
      });
      return;
    }

    const { name, email, message } = parsed.data;
    const subject = `Message from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:mshoaib54@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank") || (window.location.href = mailtoLink);
  };

  const socialLinks = [
    { icon: Mail, label: "Email", value: "mshoaib54@outlook.com", href: "mailto:mshoaib54@outlook.com" },
    { icon: Linkedin, label: "LinkedIn", value: "Muhammad Shoaib", href: "https://www.linkedin.com/in/muhammad-shoaib-726b0a382/" },
    { icon: Github, label: "GitHub", value: "@MShoaib-81", href: "https://github.com/MShoaib-81" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Let's connect and discuss new opportunities, projects, or collaborations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <div className="soft-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 font-display">Send Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={4}
                    className="form-input resize-none"
                  />
                </div>
                
                <Button
                  onClick={handleSendMessage}
                  className="btn-primary w-full"
                  disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to connect with fellow researchers, developers, and anyone 
                interested in AI and technology. Whether you have a project idea, research 
                collaboration, or just want to chat about the latest in AI — feel free to reach out!
              </p>
            </ScrollReveal>

            {/* Social Links */}
            {socialLinks.map((link, index) => (
              <ScrollReveal key={link.label} delay={250 + index * 100}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="soft-card-hover p-5 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{link.label}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;