"use client";

import { useMemo } from "react";

const PRESENTATION_BASE = "/presentation%20night%20pictures";

/** Seeded shuffle so server and client render the same order (avoids hydration mismatch). */
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const out = [...array];
  let s = seed;
  const next = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const PRESENTATION_IMAGES = [
  "555-vElectra-1.jpg",
  "555-vElectra-10.jpg",
  "555-vElectra-11.jpg",
  "555-vElectra-14.jpg",
  "555-vElectra-15.jpg",
  "555-vElectra-17.jpg",
  "555-vElectra-18.jpg",
  "555-vElectra-19.jpg",
  "555-vElectra-2.jpg",
  "555-vElectra-21.jpg",
  "555-vElectra-23.jpg",
  "555-vElectra-24.jpg",
  "555-vElectra-27.jpg",
  "555-vElectra-3.jpg",
  "555-vElectra-30.jpg",
  "555-vElectra-33.jpg",
  "555-vElectra-34.jpg",
  "555-vElectra-35.jpg",
  "555-vElectra-37.jpg",
  "555-vElectra-42.jpg",
  "555-vElectra-44.jpg",
  "555-vElectra-45.jpg",
  "555-vElectra-47.jpg",
  "555-vElectra-49.jpg",
  "555-vElectra-5.jpg",
  "555-vElectra-51.jpg",
  "555-vElectra-52.jpg",
  "555-vElectra-54.jpg",
  "555-vElectra-56.jpg",
  "555-vElectra-6.jpg",
  "555-vElectra-8.jpg",
  "555-vElectra-9.jpg",
  "555.jpg",
  "Artboard 1.png",
  "Artboard 7-1.png",
  "Artboard 7-3.png",
  "Artboard 7.png",
  "IMG_0269.jpeg",
  "IMG_3657.JPG",
  "IMG_3945.jpeg",
  "IMG_3946.jpeg",
  "IMG_3950.jpeg",
  "IMG_3954.jpeg",
  "IMG_3956.jpeg",
  "IMG_3958.jpeg",
  "IMG_3970.JPG",
  "IMG_4027.JPG",
  "IMG_4031.JPG",
  "IMG_4032.JPG",
  "IMG_4036.jpg",
  "IMG_4822.jpeg",
  "IMG_4828.jpeg",
  "IMG_4835.jpeg",
  "IMG_5178.JPG",
  "IMG_5181.JPG",
  "IMG_5182.JPG",
  "IMG_5184.JPG",
  "IMG_5192.JPG",
  "IMG_5194.JPG",
  "IMG_5196.JPG",
  "IMG_6523.JPG",
  "IMG_6841.PNG",
  "IMG_7001.JPG",
  "IMG_7018.JPG",
  "IMG_7021.JPG",
  "IMG_7023.JPG",
  "IMG_7031.JPG",
  "IMG_7033.JPG",
  "IMG_7036.JPG",
  "IMG_7037.JPG",
  "IMG_7039.JPG",
  "IMG_7044.JPG",
  "IMG_7045.JPG",
  "IMG_7047.JPG",
  "IMG_7048.JPG",
  "IMG_7064.JPG",
  "IMG_7072.JPG",
  "IMG_7085.JPG",
  "IMG_7696.PNG",
  "IMG_8376.JPG",
  "IMG_8381.JPG",
  "IMG_8382.JPG",
  "IMG_8873.JPG",
  "IMG_8874.JPG",
  "IMG_8875.JPG",
  "IMG_8881.JPG",
  "IMG_8883.JPG",
  "IMG_8884.JPG",
  "IMG_8885.JPG",
  "IMG_8886.JPG",
  "IMG_9752.JPG",
  "IMG_9754.JPG",
  "IMG_9756.JPG",
  "IMG_9759.JPG",
  "IMG_9760.JPG",
  "IMG_9761.JPG",
  "IMG_9765.JPG",
  "IMG_9768.JPG",
  "IMG_9772.JPG",
  "IMG_9773.JPG",
  "IMG_9775.JPG",
  "IMG_9779.JPG",
  "_DSC1035.JPG",
  "_DSC1062.JPG",
  "_DSC1154-Edit.JPG",
  "_DSC1273.JPG",
  "_DSC1286.JPG",
  "_DSC1413.JPG",
  "_DSC1477.JPG",
];

export default function ReverseScrollColumns() {
  const images = useMemo(
    () =>
      shuffleWithSeed(PRESENTATION_IMAGES, 555123).map(
        (name) => `${PRESENTATION_BASE}/${encodeURIComponent(name)}`
      ),
    []
  );
  // Left column (reverse): indices 0, 3, 6, 9, ...
  // Center column (normal): indices 1, 4, 7, ...
  // Right column (reverse): indices 2, 5, 8, ...
  const leftColumnImages = images.filter((_, i) => i % 3 === 0);
  const centerColumnImages = images.filter((_, i) => i % 3 === 1);
  const rightColumnImages = images.filter((_, i) => i % 3 === 2);

  return (
    <div className="columns">
      <div className="column column-reverse">
        {leftColumnImages.map((src, index) => (
          <div key={`left-${index}`} className="column__item">
            <img
              src={src}
              alt={`Presentation night photo ${index + 1}`}
              className="column__img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="column">
        {centerColumnImages.map((src, index) => (
          <div key={`center-${index}`} className="column__item">
            <img
              src={src}
              alt={`Presentation night photo ${index + 1}`}
              className="column__img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="column column-reverse">
        {rightColumnImages.map((src, index) => (
          <div key={`right-${index}`} className="column__item">
            <img
              src={src}
              alt={`Presentation night photo ${index + 1}`}
              className="column__img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
