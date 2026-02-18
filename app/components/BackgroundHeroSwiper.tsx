"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { fetchSignedImageUrls } from "@/lib/supabase/storage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const INITIAL_HERO_SIGN_COUNT = 1;

const BACKGROUND_IMAGES = [
  "backgrounds/1.png",
  "backgrounds/2.png",
  "backgrounds/555-vElectra-10.jpg",
  "backgrounds/555-vElectra-54.JPEG",
  "backgrounds/555-vElectra-9.jpg",
  "backgrounds/IMG_4031.JPG",
  "backgrounds/IMG_6523.JPG",
  "backgrounds/IMG_7031.JPG",
  "backgrounds/IMG_7045.JPG",
  "backgrounds/IMG_8881.JPG",
  "backgrounds/IMG_8884.JPG",
  "backgrounds/IMG_9762.JPG",
  "backgrounds/IMG_9764.JPG",
  "backgrounds/IMG_9773.JPG",
  "backgrounds/IMG_9775.JPG",
  "backgrounds/_DSC1062.JPG",
  "backgrounds/presentation-2.jpg",
];

export default function BackgroundHeroSwiper() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadInitialImage() {
      try {
        const signedUrls = await fetchSignedImageUrls(
          BACKGROUND_IMAGES.slice(0, INITIAL_HERO_SIGN_COUNT)
        );
        if (!cancelled) {
          setImages(signedUrls.filter(Boolean));
        }
      } catch {
        if (!cancelled) {
          setImages([]);
        }
      }
    }

    loadInitialImage();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadRemainingImages() {
      try {
        const signedUrls = await fetchSignedImageUrls(BACKGROUND_IMAGES);
        if (!cancelled) {
          setImages(signedUrls.filter(Boolean));
        }
      } catch {}
    }

    loadRemainingImages();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="home-hero__bg">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={650}
        allowTouchMove={false}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              sizes="100vw"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
