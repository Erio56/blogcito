
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { SiteIcon } from "~/components/SiteIcon";
import "./MiniBiography.css";

export default function MiniBiography() {
  const sceneRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [70, 0, -35]
  );

  const cardRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [2, 0, -1]
  );

  return (
    <section className="mini-bio-scene squares-grid" ref={sceneRef}>
      <motion.div
        className="bio-orbit bio-orbit-one"
        animate={
          reduceMotion
            ? undefined
            : { rotate: 360 }
        }
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="bio-orbit-dot" />
      </motion.div>

      <motion.div
        className="bio-orbit bio-orbit-two"
        animate={
          reduceMotion
            ? undefined
            : { rotate: -360 }
        }
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <SiteIcon name="cat" className="site-icon bio-orbit-star" />
      </motion.div>

      <motion.article
        className="mini-bio-card"
        style={{
          y: cardY,
          rotate: cardRotate,
        }}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, scale: 0.94, y: 55 }
        }
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="bio-card-topline">
          <span>My little page~</span>
        </div>

        <motion.div
          className="bio-sticker"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -7, 0], rotate: [8, 13, 8] }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          <SiteIcon name="umbrella" className="site-icon" />
        </motion.div>

        <motion.div
          className="bio-overline"
          initial={reduceMotion ? false : { opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Holaaaap! Soy Erio <span>(She/Her)</span>
        </motion.div>

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A silly soul,
          <br />
          <span>doing silly stuff.</span>
        </motion.h2>

        <motion.div
          className="bio-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <p>
            Trabajo como ingeniera de Software y soy re weeb la verdad jsjas.
            Bienvenid@ a mi pequeño blog, es la primer vez que hago un proyectito personal, solo para mi
            desde que aprendí a programar.
          </p>
          <p>
            Tengo 24 y soy de Colombia{" "}
            <SiteIcon name="colombia" className="site-icon bio-flag" />!!!.
          </p>
          <p>
            I can speak English and Español.
          </p>
        </motion.div>

        <motion.p
          className="bio-copy bio-copy-secondary"
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.58, duration: 0.6 }}
        >
          Paso la mayoría del tiempo escuchando música, jugando de vez en cuando algunos jueguitos y pensando en el futuro, tengo muchos planes y quiero hacer muchas cositas, gambaru~
        </motion.p>

        <div className="bio-card-footer">
          <span>Mi cumple es el 26 de abril por si me queres dar un regalito wink wink hehe~</span>
          <motion.span
            className="bio-footer-heart"
            animate={reduceMotion ? undefined : { rotate: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            aria-hidden="true"
          >
            <SiteIcon name="heart" className="site-icon" />
          </motion.span>
        </div>
      </motion.article>

      <motion.span
        className="bio-floating-note"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [-4, 2, -4] }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        currently evolving...
      </motion.span>

      <motion.a
        className="bio-scroll-hint"
        href="#blog-scene"
        aria-label="Desliza hacia abajo para explorar el blog"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>hay más abajitoooo, haz scroll!!</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="m5 9 7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}