import styles from "./page.module.css";

export default function Info() {
  return (
    <div className="pageBgBlack">
      {/* Intro section */}
      <article className={styles.pageArticle}>
        <div className="wrapper">
          <header className="pageHeader">
            <h1 className="pageTitle">About</h1>
          </header>
          <div className={`${styles.postContent} textFlow`}>
            <p>
              Creation isn't always something you can hold. Sometimes it's a shift—a conversation that changes direction, a question that lingers, two strangers recognizing something familiar in each other. It's what gets revealed through presence and attention. We started 555 out of curiosity about why someone chooses a particular path, why certain ideas stay, and what brings a person back to the same obsession again and again. We're interested in what they're protecting and what they're pursuing. 555 is a space to ask those questions.
            </p>
          </div>
        </div>
      </article>

      {/* Why We Experiment section */}
      <section className="sectionModuleText" aria-labelledby="experiment-heading">
        <div className="wrapper">
          <h2 id="experiment-heading" className={`sectionTitle ${styles.sectionTitleOneLine}`}>
            Why We Experiment
          </h2>
          <div className="textFlow">
            <p>A studio is a place of attention. Connection shifts with space, scale, and presence. It responds to context.
            We experiment to learn the avatars of transformation. We adjust structure. We refine constraints. We explore different room sizes and ways of inviting people in. Each experiment sharpens our understanding of what creates depth, openness, and momentum. The goal is understanding. We are refining the conditions where people feel seen and ideas move forward. 555 evolves through attention.</p>
          </div>
        </div>
      </section>

      {/* Events section */}
      <section className="sectionModuleText" aria-labelledby="events-heading">
        <div className="wrapper">
          <h2 id="events-heading" className="sectionTitle">
            Events
          </h2>
          <div className={styles.eventsGrid}>
            <div className={styles.eventItem}>
              <span className={styles.eventTitle}>Experiment 01</span>
            </div>
            <div className={styles.eventItem}>
              <span className={styles.eventTitle}>Presentation Night</span>
            </div>
          </div>
        </div>
      </section>

      {/* People section */}
      <section className="sectionModuleText" aria-labelledby="people-heading">
        <div className="wrapper">
          <h2 id="people-heading" className="sectionTitle">
            People
          </h2>
          <div className={`${styles.peopleList} textFlow`}>
            <p>
              <a
                href="https://www.linkedin.com/in/vilakshan-khanna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vilakshan Khanna
              </a>{" "}
              – Co-host, Design
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/christian-levan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Christian Levan
              </a>{" "}
              – Co-host, Operations
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/raqibmuktadir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raqib Muktadir
              </a>{" "}
              – Co-host, Logistics
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="sectionModule" aria-labelledby="contact-heading">
        <div className="wrapper">
          <h2 id="contact-heading" className="sectionTitle">
            Contact
          </h2>
          <address className={`${styles.contactInfo} textFlow`}>
            <p>
              For inquiries and collaborations, reach out to us at{" "}
              <a href="mailto:hello@555studio.com">hello@555studio.com</a>
            </p>
          </address>
        </div>
      </section>
    </div>
  );
}
