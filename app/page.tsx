import HomeScrollGate from "./components/HomeScrollGate";

const heroContent = (
  <>
    <div className="homeHeroAbout__left">
      <p className="type-body">
        555 is a creative experimentation studio. We design spaces,
        formats, and experiences that bring people into deeper
        conversation, guided by curiosity and attention.
      </p>
      <p className="type-body">
        Recent experiments include Presentation Night, our first
        creative format built on five stories, five slides, five
        minutes, along with curated gatherings that explore personality
        and creative identity. As we move forward, we&apos;re building
        new experiments focused on creative transformation. We want to
        give artists, creators, and entrepreneurs across Canada a
        platform to share their work, show what they care about, and
        create real opportunities for connection.
      </p>
      <p className="type-body">
        Our goal is simple: create the conditions where people feel
        seen, inspired, and moved to keep building.
      </p>
      <p className="type-body">
        If you&apos;re interested in collaborating, participating, or
        supporting the evolution of 555, we&apos;d love to hear from you
        at{" "}
        <a
          href="mailto:fivefivefivemontreal@gmail.com"
          aria-label="Email 555 Studio"
        >
          fivefivefivemontreal@gmail.com
        </a>
      </p>
    </div>

    <div className="homeHeroAbout__gutter" aria-hidden="true" />

    <aside className="homeHeroAbout__right" aria-label="Studio information">
      <small className="type-caption">
        <strong>PARTNERS IN THE PAST</strong>
        <br />
        Shopify
        <br />
        Planned
        <br />
        ETS
        <br />
        cansbridge
        <br />
        HEC
        <br />
        technoel district concordia
        <br />
        <br />
        <strong>SERVICES</strong>
        <br />
        creative event organizing
        <br />
        art direction
        <br />
        brand design
        <br />
        digital design
        <br />
        graphic and editorial design
        <br />
        <br />
        <strong>PRESS</strong>
        <br />
        <a
          href="https://youtu.be/y9wt2DvbKVo?si=_Ex0Ki3wAqh5IEY6"
          target="_blank"
          rel="noopener noreferrer"
        >
          555 Official Video
        </a>
        <br />
        <a
          href="https://www.youtube.com/watch?v=_BOcLXgTI9Y"
          target="_blank"
          rel="noopener noreferrer"
        >
          Northstar Montreal 555 Studio
        </a>
        <br />
        <br />
        <strong>Instagram</strong>{" "}
        <a
          href="https://www.instagram.com/fivefivefive_studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @fivefivefive_studio
        </a>
        <br />
        <strong>X</strong>{" "}
        <a
          href="https://x.com/555studio_"
          target="_blank"
          rel="noopener noreferrer"
        >
          @555studio_
        </a>
        <br />
        <strong>LinkedIn</strong>{" "}
        <a
          href="https://www.linkedin.com/company/555studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          555 Studio
        </a>
        <br />
        <br />
        Formed in Montréal, Québec, Canada. <strong>© 2024</strong>
      </small>
    </aside>
  </>
);

export default function Home() {
  return <HomeScrollGate heroContent={heroContent} />;
}
