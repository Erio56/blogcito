import './wip.css';

const Wip = () => {
  return (
    <section className="wip-scene" aria-labelledby="wip-title">
      <article className="wip-card">
        <h1 id="wip-title">WIP</h1>
        <p className="wip-copy">
          Estoy empezando a construir este sitio, y decidí hacerlo con React así que iterar el algo lento jajajaa.
        </p>
        <p className="wip-copy">Poco a poco iré añadiendo más contenido, interactibilidad y también easter eggs</p>
      </article>
    </section>
  );
};

export default Wip;