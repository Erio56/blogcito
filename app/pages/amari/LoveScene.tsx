
import { motion, useReducedMotion } from "motion/react";
import "./LoveScene.css";

export default function LoveScene() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="love-scene polka-hearts">
      <motion.div
        className="love-note"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="love-photo">
          <img
            src="/"
            alt=""
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="love-photo-placeholder">
            <span>♡</span>
            aqui imagen erio
          </div>
          <span className="love-photo-caption">mi media naranja</span>
        </div>

        <div className="love-message">
          <span className="love-eyebrow">Mi wawa</span>

          <h2>
            Amawi
            <br />
            <span>part of life.</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi laboriosam quasi magnam voluptatum repellat cum velit temporibus exercitationem commodi.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, quo!
          </p>

          <div className="love-signature">
            <span>ERIO,</span>
            <motion.span
              className="love-heart"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -5, 0], scale: [1, 1.08, 1] }
              }
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-label="heart"
            >
              ♥
            </motion.span>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="love-closing"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Algo cursi
        <span> meow.</span>
      </motion.p>
    </section>
  );
}