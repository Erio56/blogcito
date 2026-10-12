
import { motion, AnimatePresence } from "motion/react";
import { FloatingBubble } from "./FloatingBubble";
import "./bubble.css";

type BubbleProps = {
  title: string;
  description: string;
  content: string;
  x: string;
  y: string;
  delay?: number;
  mobileOrder: number;
  image?: {
    src: string;
    alt: string;
  };
  interaction?: {
    href: string;
    label: string;
  };
  items?: string[];
  expanded: boolean;
  onToggle: () => void;
};

export function Bubble({
  title,
  description,
  content,
  x,
  y,
  delay = 0,
  mobileOrder,
  interaction,
  image,
  items,
  expanded,
  onToggle,
}: BubbleProps) {
  return (
    <FloatingBubble
      x={x}
      y={y}
      delay={delay}
      className={`bubble-wrapper mobile-order-${mobileOrder}${expanded ? " is-expanded" : ""}`}
    >
      <motion.div
        className="bubble"
        layout
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <button
          type="button"
          className="bubble-toggle"
          onClick={onToggle}
          aria-expanded={expanded}
        >
          <span className="bubble-title">{title}</span>
          <span className="bubble-description">{description}</span>
          <span className="bubble-hint">
            {expanded ? "Close −" : "Explore +"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              className="bubble-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {image && (
                <img className="bubble-image" src={image.src} alt={image.alt} />
              )}
              <span>{content}</span>
              {items && items.length > 0 && (
                <ul className="bubble-items">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {interaction && (
                <a
                  href={interaction.href}
                  className="bubble-interaction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {interaction.label}
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FloatingBubble>
  );
}