import { motion, useReducedMotion } from "motion/react";
import { SiteIcon } from "~/components/SiteIcon";
import "./RandomMediaScene.css";

type MediaItem = {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  shape?: "wide" | "tall" | "square";
};

const media: MediaItem[] = [
  {
    src: "/images/media/media-1.jpg",
    alt: "A favorite anime scene",
    label: "somewhere else",
    caption: "wish I could live in this frame",
    shape: "tall",
  },
  {
    src: "/images/media/media-2.jpg",
    alt: "A picture worth keeping",
    label: "saved at 2am",
    shape: "wide",
  },
  {
    src: "/images/media/media-3.jpg",
    alt: "A random favorite image",
    label: "literally me",
    caption: "no explanation needed",
    shape: "square",
  },
  {
    src: "/images/media/media-4.jpg",
    alt: "A beautiful little moment",
    label: "pretty things",
    shape: "square",
  },
  {
    src: "/images/media/media-5.jpg",
    alt: "A memory from the internet",
    label: "internet archaeology",
    shape: "tall",
  },
  {
    src: "/images/media/media-6.jpg",
    alt: "Something I found and liked",
    label: "just because",
    shape: "wide",
  },
];

export default function RandomMediaScene() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="random-media-scene">
      <motion.header
        className="media-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="media-eyebrow">THE MISCELLANEOUS DEPARTMENT</span>
          <h2>
            A little bit of <span>everything.</span>
          </h2>
        </div>

        <p>
          Things I found, things I loved, things that mean nothing
          and everything at the same time.
        </p>
      </motion.header>

      <div className="media-grid">
        {media.map((item, index) => (
          <motion.article
            key={item.src}
            className={`media-item media-${item.shape ?? "square"}`}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 24, rotate: index % 2 ? 1.5 : -1.5 }
            }
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : (index % 3) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduceMotion ? undefined : { y: -5, rotate: 0 }}
          >
            <div className="media-image">
              <img src={item.src} alt={item.alt} loading="lazy" />

              <div className="media-overlay">
                <span>{item.caption ?? item.alt}</span>
              </div>

              <span className="media-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="media-label">
              <span>{item.label}</span>
              <SiteIcon
                name="sparkle"
                className="media-sparkle site-icon"
              />
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        className="media-footer"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>no theme, no reason.</span> just things I wanted to keep{" "}
        <SiteIcon name="heart" className="site-icon" />
      </motion.p>
    </section>
  );
}
