
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Bubble } from "../../components/Bubble";
import "./BlogScene.css";

const bubbles = [
  {
    title: "Kano (鹿乃)",
    description: "My favorite singer and mood saviour.",
    content:
      "Her music has been with me even in the darkess times of my life. Her sad and broken hearted songs have been my companions in the lonliest nights. Her music has been my therapy.",
    x: "4%",
    y: "12%",
    delay: 0,
    mobileOrder: 1,
    interaction: "https://example.com",
    interactionMethod: "anchor" as const,
  },  
  {
    title: "Yuri",
    description: "I'm a yuri addict. Don't forget to always pray Adashima",
    content:
      "My favorite ones are.",
    x: "69%",
    y: "25%",
    delay: 0.4,
    mobileOrder: 2,
  },
  {
    title: "Thoughts",
    description: "Notes from my corner of the internet.",
    content:
      "Personal essays, random observations, and little discoveries.",
    x: "8%",
    y: "63%",
    delay: 0.8,
    mobileOrder: 4,
  },
  {
    title: "Interests",
    description: "Things that keep me curious.",
    content:
      "Music, art, technology, and everything else I enjoy exploring.",
    x: "68%",
    y: "69%",
    delay: 1.2,
    mobileOrder: 5,
  },
];

export default function BlogScene() {
  const sceneRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const illustrationY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  const illustrationRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-3, 3]
  );

  return (
    <main className="blog-page">
      <header className="blog-header">
        <p className="eyebrow">
          ~✦✳✦~~✳✦✳--------✳✦✳~~✦✳✦~
        </p>
        <h1>Things I enjoy.</h1>
        <p>Scroll around. Pick a bubble.</p>
      </header>

      <section
        ref={sceneRef}
        className="bubble-scene"
        aria-label="Explore my personal blog"
      >
        <div className="illustration-position">
          <motion.img
            className="central-illustration"
            src="./assets/40390-1376597976.png"
            alt="Central blog illustration"
            style={{
              y: illustrationY,
              rotate: illustrationRotate,
            }}
            draggable={false}
          />
        </div>

        {bubbles.map((bubble) => (
          <Bubble key={bubble.title} {...bubble} />
        ))}
      </section>
    </main>
  );
}