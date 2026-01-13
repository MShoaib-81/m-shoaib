import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '#home', type: 'hash' },
    { label: 'About', href: '#about', type: 'hash' },
    { label: 'Skills', href: '#skills', type: 'hash' },
    { label: 'Projects', href: '#projects', type: 'hash' },
    { label: 'Contact', href: '#contact', type: 'hash' },
    { label: 'Publications', href: '/blog', type: 'route' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.type === 'hash') {
      if (location.pathname !== '/') {
        window.location.href = '/' + item.href;
      } else {
        scrollToSection(item.href.replace('#', ''));
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold font-display">
            <span className="gradient-text">MS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === 'hash' ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm animated-underline"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm animated-underline"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden soft-card rounded-xl mt-2 p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                item.type === 'hash' ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200 font-medium text-left py-3 px-4 rounded-lg"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;