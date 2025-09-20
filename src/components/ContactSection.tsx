import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Sukkur, Sindh, Pakistan",
      link: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 316 3813033",
      link: "tel:+923163813033"
    },
    {
      icon: Mail,
      label: "Email",
      value: "mshoaib54@outlook.com",
      link: "mailto:mshoaib54@outlook.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammad-shoaib",
      link: "https://www.linkedin.com/in/muhammad-shoaib/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MShoaib-81",
      link: "https://github.com/MShoaib-81"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">Get in Touch</h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-surface-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing AI/ML research opportunities, collaborations, 
              or potential projects. Feel free to reach out through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              const isClickable = item.link !== null;
              
              return (
                <div
                  key={index}
                  className={`
                    bg-card border border-border rounded-lg p-6 text-center
                    transition-all duration-300 hover:shadow-lg
                    ${isClickable ? 'cursor-pointer hover:-translate-y-1' : 'cursor-default'}
                  `}
                  onClick={() => isClickable && item.link && window.open(item.link, '_blank')}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {item.label}
                  </h3>
                  
                  <p className={`
                    text-muted-foreground
                    ${isClickable ? 'hover:text-primary transition-colors animated-link' : ''}
                  `}>
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent rounded-full">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-accent-foreground font-medium">
                Available for research collaborations and opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;