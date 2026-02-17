import BackgroundHeroSwiper from "./components/BackgroundHeroSwiper";
import ReverseScrollColumns from "./components/ReverseScrollColumns";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <BackgroundHeroSwiper />
        <p className="home-hero__tagline">
          555 IS A CREATIVE EXPERIMENTATION STUDIO DESIGNING TRANSFORMATIVE IRL
          EXPERIENCES IN MONTRÉAL AND TORONTO.
        </p>
      </section>
      <section className="home-section" aria-label="Content section">
        <ReverseScrollColumns />
      </section>
      <section className="home-section" aria-label="Content section">
      <p>Section three content</p>

      </section>
    </>
  );
}
