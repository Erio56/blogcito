
import { motion, useReducedMotion } from "motion/react";
import "./LoveScene.css";

const shootingStars = [
  { left: "104%", top: "12%", travelY: 24, duration: 3.8, delay: 0, length: 68, angle: -2 },
  { left: "92%", top: "20%", travelY: 32, duration: 4.4, delay: 0.5, length: 46, angle: -3 },
  { left: "110%", top: "34%", travelY: -42, duration: 4.8, delay: 1, length: 58, angle: 3 },
  { left: "98%", top: "46%", travelY: -28, duration: 4, delay: 0.25, length: 74, angle: 2 },
  { left: "106%", top: "58%", travelY: 38, duration: 3.5, delay: 1.5, length: 42, angle: -4 },
  { left: "88%", top: "68%", travelY: -30, duration: 4.2, delay: 0.75, length: 52, angle: 3 },
  { left: "112%", top: "82%", travelY: 40, duration: 5, delay: 2, length: 64, angle: -3 },
  { left: "96%", top: "90%", travelY: -24, duration: 3.8, delay: 1.25, length: 48, angle: 2 },
  { left: "108%", top: "26%", travelY: 30, duration: 4.8, delay: 2.5, length: 56, angle: -2 },
  { left: "90%", top: "76%", travelY: -36, duration: 4.5, delay: 1.75, length: 62, angle: 3 },
  { left: "102%", top: "6%", travelY: 28, duration: 3.6, delay: 0.9, length: 44, angle: -3 },
  { left: "114%", top: "32%", travelY: 36, duration: 4.7, delay: 2.2, length: 66, angle: -3 },
  { left: "94%", top: "72%", travelY: -32, duration: 4.1, delay: 1.1, length: 50, angle: 3 },
  { left: "106%", top: "94%", travelY: -26, duration: 3.7, delay: 2.8, length: 54, angle: 2 },
];

export default function LoveScene() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="love-scene polka-hearts">
      <div className="love-sky" aria-hidden="true">
        {shootingStars.map((star, index) => (
          <motion.span
            key={index}
            className="love-shooting-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.length,
              rotate: `${star.angle}deg`,
            }}
            initial={{ opacity: reduceMotion ? 0.45 : 0 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["0vw", "-75vw", "-150vw"],
                    y: [0, star.travelY * 0.5, star.travelY],
                    opacity: [0, 0.9, 0],
                  }
            }
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            }}
          />
        ))}
      </div>

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