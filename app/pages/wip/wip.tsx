import './wip.css';

const Wip = () => {
  return (
    <section className="wip-scene" aria-labelledby="wip-title">
      <article className="wip-card">
        <p className="wip-kicker">still in progress</p>
        <h1 id="wip-title">coming soon</h1>
        <p className="wip-copy">
          I&apos;m putting together the next part of this little corner of the web.
          Check back soon for updates.
        </p>
      </article>
    </section>
  );
};

export default Wip;