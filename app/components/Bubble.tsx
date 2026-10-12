
import { useState } from "react";
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
  interaction?: string;
  interactionMethod?: 'button' | 'anchor';
};


const BubbleInteraction = (interaction: string, interactionMethod: 'button' | 'anchor' ) => {
  if (interactionMethod === 'button') {
    return (
      <button
        type="button"
        className="bubble-interaction"
        onClick={() => alert(interaction)}
      >
        {interaction}
      </button>
    );
  } else if (interactionMethod === 'anchor') {
    return (
      <a
        href={interaction}
        className="bubble-interaction"
        target="_blank"
        rel="noopener noreferrer"
      >
        {interaction}
      </a>
    );
  } else {
    return null;
  }
}


export function Bubble({
  title,
  description,
  content,
  x,
  y,
  delay = 0,
  mobileOrder,
  interaction,
  interactionMethod
}: BubbleProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FloatingBubble
      x={x}
      y={y}
      delay={delay}
      className={`bubble-wrapper mobile-order-${mobileOrder}`}
    >
      <motion.button
        type="button"
        className="bubble"
        layout
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
      >
        <span className="bubble-title">{title}</span>

        <span className="bubble-description">
          {description}
        </span>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.span
              className="bubble-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {content}
              {(interaction && interactionMethod) && BubbleInteraction(interaction, interactionMethod)}
            </motion.span>
          )}
        </AnimatePresence>

        <span className="bubble-hint">
          {expanded ? "Close −" : "Explore +"}
        </span>
      </motion.button>
    </FloatingBubble>
  );
}