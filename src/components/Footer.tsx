import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/MShoaib-81", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-shoaib-726b0a382/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mshoaib54@outlook.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-display text-foreground">Muhammad Shoaib</span>
            <p className="text-muted-foreground text-sm mt-1">
              AI & ML Research Student
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Made with 
            <Heart className="w-4 h-4 text-red-400" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;