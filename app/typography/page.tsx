/**
 * Typography specimen - for visual verification against Figma node 139-514
 * Matches the structure: HEADLINES, BODY CONTENT, CAPTIONS
 */
export default function TypographySpecimen() {
  return (
    <div className="typography-specimen">
      <div className="typography-specimen__section">
        <span className="type-caption typography-specimen__label">HEADLINES</span>
        <div className="type-display typography-specimen__sample">
          Host Grotesk
          <br />
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br />
          abcdefghijklmnopqrstuvwxyz
          <br />
          0123456789
        </div>
      </div>

      <div className="typography-specimen__section">
        <span className="type-caption typography-specimen__label">
          BODY CONTENT
        </span>
        <div className="type-body typography-specimen__sample">
          Host Grotesk
          <br />
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br />
          abcdefghijklmnopqrstuvwxyz
          <br />
          0123456789
        </div>
      </div>

      <div className="typography-specimen__section">
        <span className="type-caption typography-specimen__label">CAPTIONS</span>
        <div className="type-caption typography-specimen__sample">
          HOST GROTESK
        </div>
      </div>

      <div className="typography-specimen__meta">
        <p className="type-caption">
          Source: Figma 555_online (node-id=139-514) • Font: Host Grotesk
        </p>
      </div>
    </div>
  );
}
