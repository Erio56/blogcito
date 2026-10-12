
import { motion, useReducedMotion } from "motion/react";
import "./ScrollBubbleScene.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const items = [
  {
    id: "1",
    eyebrow: "01 — 23245r43543",
    title: "sdfsadfsadfsadf",
    description:
      "sdafdsfsadfd.",
  },
  {
    id: "2",
    eyebrow: "02 — sdfa",
    title: "sdafasdfasfdsfsadfsadfsadfasdf",
    description:
      "sdafsdafsdafsdafsdafsadf",
  },
  {
    id: "sdfsdaf",
    eyebrow: "03 — dsafsadfsdafsdaf",
    title: "dsfsdafdsafsdafsad",
    description:
      "sdfsadf432r43tr34t342t342",
  },
  {
    id: "rtgerwtre",
    eyebrow: "04 — terwtwe",
    title: "ertewtweterw",
    description:
      "ertrewterwgthbgfhbdfh",
  },
];

export default function ScrollBubbleScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="scroll-bubble-scene">
      <header className="scroll-scene-header">
        <span className="scene-kicker">More things</span>
        <h1>A few things i like, in no particular order.</h1>
        <p>meow</p>
      </header>

      <div className="scroll-bubble-list">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            className={`scroll-bubble scroll-bubble-${index + 1}`}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 70, scale: 0.96 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="scroll-bubble-eyebrow">
              {item.eyebrow}
            </span>

            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <LiteYouTubeEmbed
              id="7bX5muCSV6k"
              title="yeah"    
            />
            

            <span className="scroll-bubble-index">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}