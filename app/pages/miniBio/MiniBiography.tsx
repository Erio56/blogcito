
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
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
        <span className="bio-orbit-star">ᓚᘏᗢ</span>
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
          ☂
        </motion.div>

        <motion.p
          className="bio-overline"
          initial={reduceMotion ? false : { opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hiiii! I'm Erio <span>(She/Her)</span>౨ৎ
        </motion.p>

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

        <motion.p
          className="bio-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <p>
            I am a software engineer and a weeb at heart.
          </p>
          <p>
            I'm 24 from Colombia 🇨🇴!!!.
          </p>
          <p>
            I can speak English and Spanish.
          </p>
        </motion.p>

        <motion.p
          className="bio-copy bio-copy-secondary"
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.58, duration: 0.6 }}
        >
          I spend most of my time listening to music and playing some games. Also like to daydream about the future.
        </motion.p>

        <div className="bio-card-footer">
          <span>My bd is on april 26 if you want to give me a gift wink wink meow 🩷~</span>
          <motion.span
            animate={reduceMotion ? undefined : { rotate: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            aria-hidden="true"
          >
            <span className="heart">♡</span>
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
    </section>
  );
}