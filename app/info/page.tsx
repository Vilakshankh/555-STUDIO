import styles from "./page.module.css";

export default function Info() {
  return (
    <div className="pageBgBlack">
      <div className="wrapper">
        <div className={styles.infoPage}>

          {/* Intro */}
          <p className="type-body">
            Creation isn't always something you can hold. Sometimes it's a shift—a conversation that changes direction, a question that lingers, two strangers recognizing something familiar in each other. It's what gets revealed through presence and attention. We started 555 out of curiosity about why someone chooses a particular path, why certain ideas stay, and what brings a person back to the same obsession again and again. We're interested in what they're protecting and what they're pursuing. 555 is a space to ask those questions.
          </p>

          {/* Why We Experiment */}
          <div className={styles.infoBlock}>
            <h2 className={styles.infoSectionLabel}>Why We Experiment</h2>
            <p className="type-body">
              A studio is a place of attention. Connection shifts with space, scale, and presence. It responds to context.
              We experiment to learn the avatars of transformation. We adjust structure. We refine constraints. We explore different room sizes and ways of inviting people in. Each experiment sharpens our understanding of what creates depth, openness, and momentum. The goal is understanding. We are refining the conditions where people feel seen and ideas move forward. 555 evolves through attention.
            </p>
          </div>

          {/* Events */}
          <div className={styles.infoBlock}>
            <h2 className={styles.infoSectionLabel}>Events</h2>
            <div className={styles.infoList}>
              <p className="type-body">Experiment 01</p>
              <p className="type-body">Presentation Night</p>
            </div>
          </div>

          {/* People */}
          <div className={styles.infoBlock}>
            <h2 className={styles.infoSectionLabel}>People</h2>
            <div className={styles.infoList}>
              <p className="type-body">
                <a
                  href="https://www.linkedin.com/in/vilakshan-khanna/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vilakshan Khanna
                </a>{" "}
                – Co-host, Design
              </p>
              <p className="type-body">
                <a
                  href="https://www.linkedin.com/in/christian-levan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christian Levan
                </a>{" "}
                – Co-host, Operations
              </p>
              <p className="type-body">
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

          {/* Contact */}
          <div className={styles.infoBlock}>
            <h2 className={styles.infoSectionLabel}>Contact</h2>
            <p className="type-body">
              For inquiries and collaborations, reach out to us at{" "}
              <a href="mailto:fivefivefivemontreal@gmail.com">fivefivefivemontreal@gmail.com</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
