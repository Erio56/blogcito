
import { motion, useReducedMotion } from "motion/react";
import { SiteIcon } from "~/components/SiteIcon";
import "./CatsScene.css";

const cats = [
  {
    id: "cat-one",
    name: "Mahoro",
    nickname: "Bastión de la discordia",
    description:
      "Se sube a las cortinas y siempre está buscando un sitio alto.",
    image: "/assets/gatas/mahoro.jpg",
    note: "Probably plotting something",
  },
  {
    id: "cat-two",
    name: "Kafuu",
    nickname: "Está gordísima",
    description:
      "Se caga en mi habitación y me aruña el colchón.",
    image: "/assets/gatas/kafuu.jpg",
    note: "Currently judging you",
  },
];

const gallerySlots = [
  {
    label: "Mahoro",
    shape: "gallery-wide",
    image: "/assets/gatas/mahoro.jpg",
  },
  {
    label: "Kafuu",
    shape: "gallery-tall",
    image: "/assets/gatas/kafuu.jpg",
  },
  {
    label: "Silly Mahoro",
    shape: "gallery-square",
    image: "/assets/gatas/sillymaho.jpg",
  },
];

export default function CatsScene() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="cats-scene">
      <SiteIcon
        name="sparkle"
        className="cats-decoration cats-decoration-one site-icon"
      />
      <SiteIcon
        name="cat"
        className="cats-decoration cats-decoration-two site-icon"
      />

      <header className="cats-header">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Mis hijas
          <br />
          <span>miau.</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Comen y cagan igual las quiero.
        </motion.p>
      </header>

      <div className="cats-profiles">
        {cats.map((cat, index) => (
          <motion.article
            key={cat.id}
            className={`cat-card cat-card-${index + 1}`}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 45, rotate: index === 0 ? -3 : 3 }
            }
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion ? undefined : { y: -7, rotate: index === 0 ? -1 : 1 }
            }
          >
            <div className="cat-photo-frame">
              <img
                src={cat.image}
                alt={`${cat.name}`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="cat-photo-placeholder">
                <small>{cat.image}</small>
              </div>
            </div>

            <div className="cat-card-content">
              <span className="cat-nickname">{cat.nickname}</span>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* <section className="cats-gallery">
        <motion.div
          className="cats-gallery-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="cats-eyebrow">Fotitos</span>
          <h2>Las que ocupan todo mi Icloud.</h2>
          <p>ujum ujum.</p>
        </motion.div>

        <div className="cats-gallery-grid">
          {gallerySlots.map((slot, index) => (
            <motion.div
              key={slot.label}
              className={`cats-gallery-slot ${slot.shape}`}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <img src={slot.image} alt={`${slot.label}, one of my cats`} />
              <span className="cats-gallery-caption">
                <span>{slot.label}</span>
                <small>Photo {index + 1}</small>
              </span>
            </motion.div>
          ))}
        </div>
      </section> */}

      <motion.footer
        className="cats-footer"
        initial={reduceMotion ? false : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SiteIcon name="heart" className="site-icon" />
        <p>las amo.</p>
      </motion.footer>
    </section>
  );
}