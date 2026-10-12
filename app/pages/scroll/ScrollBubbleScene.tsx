
import { motion, useReducedMotion } from "motion/react";
import "./ScrollBubbleScene.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const items: {
  id: string,
  eyebrow: string,
  title: string,
  description?: string,
  ytVideo?: { id: string, title: string }
}[] = [
  {
    id: "1",
    eyebrow: "Kano",
    title: "sdfsadfsadfsadf",
    ytVideo: {
      id: 'vKDa7yfpd2M',
      title: 'asdfsdaf'
    }
  },
  {
    id: "2",
    eyebrow: "02 — sdfa",
    title: "sdafasdfasfdsfsadfsadfsadfasdf",
    ytVideo: {
      id: 'lzil9xE0wrM',
      title: 'sdikfjdskfa'
    }
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

type YtEmbedProps = {
  id: string;
  title: string;
};

const YtEmbed = ({ id, title }: YtEmbedProps) => {
  return <LiteYouTubeEmbed id={id} title={title} />;
};

export default function ScrollBubbleScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="scroll-bubble-scene rain">
      <header className="scroll-scene-header">
        <span className="scene-kicker">music and stuff</span>
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
            {item.description && (<p>{item.description}</p>)}
            {item.ytVideo && <YtEmbed id={item.ytVideo.id} title={item.ytVideo.title} />}
          </motion.article>
        ))}
      </div>
    </section>
  );
}