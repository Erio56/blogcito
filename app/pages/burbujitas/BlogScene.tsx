import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Bubble } from "../../components/Bubble";
import "./BlogScene.css";

const bubbles = [
  {
    title: "Kano (鹿乃)",
    description: "My favorite singer and mood saviour.",
    content:
      "Her music has been with me even in the darkess times of my life. Her sad and broken hearted songs have been my companions in the lonliest nights. Her music has been my therapy.",
    x: "clamp(24px, calc(50% - 650px), 320px)",
    y: "12%",
    delay: 0,
    mobileOrder: 1,
  },
  {
    title: "Yuri",
    description: "I'm a yuri addict. Don't forget to always pray Adashima",
    content: "My favorite ones are.",
    x: "clamp(50%, calc(50% + 280px), calc(100% - 264px))",
    y: "25%",
    delay: 0.4,
    mobileOrder: 2,
    items: ["Music", "Art", "Technology", "Games"],
    image: {
      src: "/assets/wife.png",
      alt: "Two anime characters posing together",
    },
  },
  {
    title: "Thoughts",
    description: "Notes from my corner of the internet.",
    content: "Personal essays, random observations, and little discoveries.",
    x: "clamp(24px, calc(50% - 650px), 320px)",
    y: "63%",
    delay: 0.8,
    mobileOrder: 4,
  },
  {
    title: "Interests",
    description: "Things that keep me curious.",
    content: "Music, art, technology, and everything else I enjoy exploring.",
    x: "clamp(50%, calc(50% + 280px), calc(100% - 264px))",
    y: "69%",
    delay: 1.2,
    mobileOrder: 5,
    items: ["Music", "Art", "Technology", "Games"],
    interaction: {
      href: "https://music.youtube.com/@erio056",
      label: "Listen with me",
    },
  },
];

const Wave = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L40,218.7C80,213,160,203,240,208C320,213,400,235,480,245.3C560,256,640,256,720,245.3C800,235,880,213,960,197.3C1040,181,1120,171,1200,165.3C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>)
}


export default function BlogScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const [openBubble, setOpenBubble] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const illustrationY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const illustrationRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <main className="blog-page">
    <Wave />
      <header className="blog-header">
        <p className="eyebrow">~✦✳✦~~✳✦✳--------✳✦✳~~✦✳✦~</p>
        <h1>Things I enjoy.</h1>
        <p>Scroll around. Pick a bubble.</p>
      </header>

      <section
        ref={sceneRef}
        className="bubble-scene"
        aria-label="Explore my personal blog"
      >
        <div className="illustration-position">
          <div className="illustration-shadow" aria-hidden="true" />
          <motion.img
            className="central-illustration"
            src="./assets/erio.png"
            alt="Central blog illustration"
            style={{
              y: illustrationY,
              rotate: illustrationRotate,
            }}
            draggable={false}
          />
        </div>

        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.title}
            {...bubble}
            expanded={openBubble === bubble.title}
            onToggle={() =>
              setOpenBubble((current) =>
                current === bubble.title ? null : bubble.title
              )
            }
          />
        ))}
      </section>

      <footer className="blog-socials">
        <p className="blog-socials-heading">Find me around the web</p>
        <nav aria-label="Social networks">
          <ul className="blog-social-list">
            {[
              {
                name: "YouTube Music",
                href: "https://music.youtube.com/@erio056",
                mark: "♪",
              },
              {
                name: "AniList",
                href: "https://anilist.co/user/Erio56/",
                mark: "A",
              },
              {
                name: "Twitter",
                href: "https://x.com/erio_56",
                mark: "𝕏",
              },
            ].map((social, index) => (
              <motion.li
                key={social.name}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.04 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a href={social.href} target="_blank" rel="noreferrer">
                  <span className="blog-social-mark" aria-hidden="true">
                    {social.mark}
                  </span>
                  {social.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.04 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="blog-social-handle">
                <span className="blog-social-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      fill="currentColor"
                      d="M19.73 5.11a18.2 18.2 0 0 0-4.48-1.39.07.07 0 0 0-.08.04c-.2.36-.43.83-.59 1.2a16.7 16.7 0 0 0-5.16 0c-.16-.38-.39-.84-.6-1.2a.08.08 0 0 0-.08-.04 18.15 18.15 0 0 0-4.48 1.39.07.07 0 0 0-.03.03C1.37 9.27.6 13.3.98 17.28c0 .02.01.04.03.05a18.34 18.34 0 0 0 5.5 2.78.08.08 0 0 0 .09-.03c.42-.57.8-1.17 1.12-1.81a.08.08 0 0 0-.04-.1 12.1 12.1 0 0 1-1.72-.82.08.08 0 0 1-.01-.13l.34-.27a.08.08 0 0 1 .08-.01c3.6 1.64 7.5 1.64 11.05 0a.08.08 0 0 1 .08.01l.34.27a.08.08 0 0 1-.01.13c-.55.32-1.13.6-1.73.82a.08.08 0 0 0-.04.1c.33.64.7 1.24 1.12 1.81a.08.08 0 0 0 .09.03 18.28 18.28 0 0 0 5.5-2.78.08.08 0 0 0 .03-.05c.45-4.6-.75-8.6-3.24-12.14a.06.06 0 0 0-.03-.03ZM8.02 14.8c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2c1.1 0 1.99 1 1.97 2.2 0 1.21-.87 2.2-1.97 2.2Zm7.96 0c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2c1.1 0 1.99 1 1.97 2.2 0 1.21-.87 2.2-1.97 2.2Z"
                    />
                  </svg>
                </span>
                <span>Discord</span>
                <span className="blog-discord-name">erio_</span>
              </span>
            </motion.li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}
