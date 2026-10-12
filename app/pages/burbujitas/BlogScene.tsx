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
    description: "Mi cantante favorita y mi salvadora",
    content:
      "Su música me ha acompañado en mis peores y mejores momentos, amo su emotiva voz que le dan un toque que para mi es simplemente especial.",
    x: "clamp(24px, calc(50% - 650px), 320px)",
    y: "12%",
    delay: 0,
    mobileOrder: 1,
    interaction: {
      href: "https://www.youtube.com/channel/UCShXNLMXCfstmWKH_q86B8w",
      label: "Chismear",
    },
  },
  {
    title: "Yuri",
    description: "Soy una adicta al Yuri. No olvidar siempre rezar a Adashima",
    content: "Mis favoritos son.",
    x: "clamp(50%, calc(50% + 280px), calc(100% - 264px))",
    y: "25%",
    delay: 0.4,
    mobileOrder: 2,
    items: ["Adachi and Shimamura", " Kitanai Kimi ga Ichiban Kawaii (no soy redflag lo juro)", " Tensei Oujo to Tensai Reijou no Mahou Kakumei ", "Yagate Kimi ni Naru", " Kamiina Botan, Yoeru Sugata wa Yuri no Hana"],
    image: {
      src: "/assets/wife.png",
      alt: "Two anime characters posing together",
    },
  },
  {
    title: "Made in Abyss",
    description: "Mi anime favorito. Click para ver otros animes que me gustan",
    content: "No es para todo el mundo pero amo su misterio al rededor del abyss, amo sus personajes (Vueko <3), amo su música. Otros animes que me gustan son Bocchi the Rock!, y Gochiusa, amo Gochiusa",
    x: "clamp(24px, calc(50% - 650px), 320px)",
    y: "63%",
    delay: 0.8,
    mobileOrder: 4,
    interaction: {
      href: "https://anilist.co/user/Erio56/",
      label: "Anilist",
    },
  },
  {
    title: "Juegos",
    description: "Algunos juegos que me gustan.",
    content: "Music, art, technology, and everything else I enjoy exploring.",
    x: "clamp(50%, calc(50% + 280px), calc(100% - 264px))",
    y: "69%",
    delay: 1.2,
    mobileOrder: 5,
    items: ["Halo (mi saga favorita)", "Apex Legends (Le tengo 3k+ horas)", "Subnautica", "Aokana", "Minecraft", "Elden ring", "Minecraft", "Cities Skylines", "Persona 3 Reloaded", "Persona 4 Golder"],
    interaction: {
      href: "https://music.youtube.com/@erio056",
      label: "Listen with me",
    },
  },
];

const Wave = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#0099ff" fill-opacity="1" d="M0,224L40,218.7C80,213,160,203,240,208C320,213,400,235,480,245.3C560,256,640,256,720,245.3C800,235,880,213,960,197.3C1040,181,1120,171,1200,165.3C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>)
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
        <p className="blog-socials-heading">Redes antisociales, digo sociales tehe~</p>
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
                  <DiscordLogo/>
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



const DiscordLogo = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14391 4.13067C8.99457 3.77866 8.77056 3.33067 8.58922 3C7.05325 3.256 5.59191 3.71467 4.22552 4.34399C1.46286 8.41865 0.716188 12.3973 1.08952 16.3226C2.92418 17.6559 4.69486 18.4666 6.4346 19C6.86126 18.424 7.24527 17.8053 7.57594 17.1546C6.9466 16.92 6.34927 16.632 5.77327 16.2906C5.9226 16.184 6.07194 16.0667 6.21061 15.9493C9.68793 17.5387 13.4543 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5236 17.1546C15.8543 17.8053 16.2383 18.424 16.665 19C18.4036 18.4666 20.185 17.6559 22.01 16.3226C22.4687 11.7787 21.2836 7.83202 18.8943 4.34399ZM8.05593 13.9013C7.01058 13.9013 6.15725 12.952 6.15725 11.7893C6.15725 10.6267 6.98925 9.67731 8.05593 9.67731C9.11191 9.67731 9.97588 10.6267 9.95454 11.7893C9.95454 12.952 9.11191 13.9013 8.05593 13.9013ZM15.065 13.9013C14.0196 13.9013 13.1652 12.952 13.1652 11.7893C13.1652 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9636 11.7893C16.9636 12.952 16.1317 13.9013 15.065 13.9013Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}