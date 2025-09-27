import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: "Home", href: "#home", type: "hash" },
    { label: "About", href: "#about", type: "hash" },
    { label: "Projects", href: "#projects", type: "hash" },
    { label: "Blog", href: "/blog", type: "route" },
    { label: "Contact", href: "#contact", type: "hash" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { label: string; href: string; type: string }) => {
    if (item.type === "route") {
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (item.type === "hash") {
      if (!isHomePage) {
        // If not on homepage, navigate to homepage first
        window.location.href = "/" + item.href;
        return;
      }
      // If on homepage, scroll to section
      scrollToSection(item.href);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-foreground">
            <span className="gradient-text">MS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => 
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors animated-link font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground hover:text-primary transition-colors animated-link font-medium"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item) => 
                item.type === "route" ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-6 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-6 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;