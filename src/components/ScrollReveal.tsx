import { ReactNode } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className, delay = 0 }: ScrollRevealProps) => {
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("scroll-reveal", isRevealed && "revealed", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;