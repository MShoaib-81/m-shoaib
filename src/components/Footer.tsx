import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            © 2024 Muhammad Shoaib. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            for AI research and innovation.
          </p>
          <p className="text-xs mt-2 text-background/70">
            Building the future through artificial intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;