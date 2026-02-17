"use client";

export default function CornerOverlay() {
  return (
    <div className="corner-overlay" aria-hidden="true">
      <span className="corner-mark corner-mark--top-left">5</span>
      <span className="corner-mark corner-mark--top-right">5</span>
      <span className="corner-mark corner-mark--bottom-left">5</span>
      <span className="corner-mark corner-mark--bottom-right">STUDIO</span>
    </div>
  );
}
