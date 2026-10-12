
import { motion, useReducedMotion } from "motion/react";
import "./ScrollBubbleScene.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { div } from "motion/react-client";

const items: {
  id: string,
  eyebrow: string,
  title: string,
  description?: string,
  lyric?: string,
  ytVideo?: { id: string, title: string }
}[] = [
  {
    id: "1",
    eyebrow: "Kano",
    title: "Yoru ga Kureba Mata",
    description: "Una canción que honestamente no escucho mucho, pero me acompañó en un mal momento, por eso decidí ponerla aqui, me encanta.",
    lyric: "When night comes, I remember you. But when morning comes I forget you again In this way I deceive myself and lie to myself... This grating heart is too much for my body, won't someone come pick it up for me someday?",
    ytVideo: {
      id: 'lzil9xE0wrM',
      title: 'Yoru ga Kureba Mata'
    }
  },
  {
    id: "2",
    eyebrow: "Nowhere",
    title: "umbrella",
    description: "Sus canciones siempre son deprimientes, pero aún así me encantan.",
    lyric:
      "The overflowing tears do not need to be hidden. It is fine to keep your back scrunched up. It's fine to not feel confident. Just recognize your own existence",
    ytVideo: {
      id: 'DlgfKHVZbdI',
      title: 'umbrella'
    }
  },
  {
    id: "rtgerwtre",
    eyebrow: "Suisei",
    title: "Debutante Ball ",
    description:
      "Una canción que me gusta mucho y compartí también con alguien quien fue muy especial para mi",
    lyric: "My unfilled hearts is always longing for unbreakeable spell to make my extraordinary days pour down",
    ytVideo: {
      id: 'lBM2j13sdOs',
      title: 'Debutante Ball '
    }
  },
  {
    id: "rtgerwtre",
    eyebrow: "Hiro Shinosawa",
    title: "SUNFADED ",
    description:
      "No tengo mucho que decir sobre sunfaded, más que es una canción perfecta, la amo asjsjajsa. Recuerdo tenerla un día el loop por 8 horas seguidas en el trabajo hehe",
    ytVideo: {
      id: 'XLwmEuM0dIw',
      title: 'SUNFADED '
    }
  },
  {
    id: "sdfsdaf",
    eyebrow: "Kano",
    title: "Good Night Everyone",
    description: "Esta canción tiene unas lyrics hermosas, cada frase me pone demasiado sentimental y me hace querer seguir esperando un brillante futuro. Si estás pasando por un mal momento, date un momento para escuchar esta canción",
    lyric:
      "I wish you a good night and that someday you'll be able to genuinely smile. For now, I will take care of all your tears and sadness",
    ytVideo: {
      id: 'RQD7IURUePQ',
      title: 'Good Night Everyone'
    }
  },
  {
    id: "rtgerwtre",
    eyebrow: "Kano",
    title: "Kenshinteki Ningen wa Yasashii Hito ni Narenai",
    description:
      "Escucho esta canción cuando estoy muy melancólica, me da una sensación muy extraña que me encanta, suelo escucharla cuando no encuentro significado a lo que estoy sintiendo. Las lyrics tienen mucho signficado para mi.",
    lyric: "The me of today and the me of tomorrow, both seem relatively happy. I'm aware of that. Yet, somewhere, inside of me, feels unfulfiled.",
    ytVideo: {
      id: 'Frmz2nwtQFU',
      title: 'Kenshinteki Ningen wa Yasashii Hito ni Narenai'
    }
  },
  {
    id: "rtgerwtre",
    eyebrow: "Suisex, digo Suisei",
    title: "Kenshinteki Ningen wa Yasashii Hito ni Narenai",
    description:
      "Una canción que una persona muy importante para mi decidió dedicarme y que desde entonces escucho mucho, gracias amor. <3",
    lyric: "I want to be the light that scatters over your heat. The light that can dissolve your sadness. I'll carry the sorrow and pain with me",
    ytVideo: {
      id: 'tQRk5OFsGXo',
      title: 'Andromeda'
    }
  },
  {
    id: "rtgerwtre",
    eyebrow: "Watashiii",
    title: "Mucha música",
    description:
      "Tengo tantas canciones que si pongo más acabaré llenado esta pagina de solo links jajaajas, en mi YT Music tengo una lista con muchas otras que me gustan",
    
  },
];

type YtEmbedProps = {
  id: string;
  title: string;
};

const YtEmbed = ({ id, title }: YtEmbedProps) => {
  return <div className="ytEmbeder"><LiteYouTubeEmbed id={id} title={title} /></div>;
};

export default function ScrollBubbleScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="scroll-bubble-scene rain">
      <header className="scroll-scene-header">
        <h1>Cositas que me gustan.</h1>
        <p>Disfruto de canciones melancólicas y quizás algo depresivas</p>
        <p>Pero por alguna razón, me hacen sentir que merece la pena vivir la vida. Me motivan de cierta forma.</p>
        <p>Supongo que me gusta dejarme a la mercer de la melancolía para luego reflexionar.</p>
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
            {item.lyric && (
              <blockquote className="scroll-bubble-lyric">
                <cite>{item.lyric}</cite>
              </blockquote>
            )}
            {item.ytVideo && <YtEmbed id={item.ytVideo.id} title={item.ytVideo.title} />}
          </motion.article>
        ))}
      </div>
    </section>
  );
}