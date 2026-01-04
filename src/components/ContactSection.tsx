import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import ScrollReveal from "@/components/ScrollReveal";

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

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "mshoaib54@outlook.com",
      href: "mailto:mshoaib54@outlook.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Muhammad Shoaib",
      href: "https://www.linkedin.com/in/muhammad-shoaib-726b0a382/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@MShoaib-81",
      href: "https://github.com/MShoaib-81",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4 gradient-text">Get In Touch</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Let's collaborate on something amazing
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ScrollReveal delay={100}>
              <div className="glass-card-hover p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Send a Message</h3>
                
                <div className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-white/10 focus:border-primary/50"
                  />
                  
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-white/10 focus:border-primary/50"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project ideas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[120px] resize-none"
                  />
                  
                  <Button
                    onClick={handleSendMessage}
                    className="btn-hero w-full"
                    disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Links */}
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <ScrollReveal key={link.label} delay={200 + index * 100}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="glass-card-hover group p-6 flex items-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold">{link.label}</h3>
                      <p className="text-muted-foreground text-sm group-hover:text-secondary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}

              {/* Research Collaboration Card */}
              <ScrollReveal delay={500}>
                <div className="glass-card-hover p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-display">Research Collaboration</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Interested in academic research partnerships, open-source contributions, or discussing the latest 
                    developments in AI/ML? I'm always excited to connect with fellow researchers and innovators.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;