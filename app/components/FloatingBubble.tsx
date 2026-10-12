
import type { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

type FloatingBubbleProps = {
  children: ReactNode;
  x: string;
  y: string;
  delay?: number;
  scrollDistance?: number;
  className?: string;
};

export function FloatingBubble({
  children,
  x,
  y,
  delay = 0,
  scrollDistance = -60,
  className = "",
}: FloatingBubbleProps) {
  const { scrollYProgress } = useScroll();

  const scrollOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, scrollDistance]
  );

  return (
    <motion.div
      className={`bubble-position ${className}`}
      style={{
        left: x,
        top: y,
        y: scrollOffset,
      }}
    >
      <motion.div
        className="bubble-float"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay },
          scale: { duration: 0.5, delay },
          y: {
            duration: 4 + delay,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}