"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/backgrounds/2026.jpg", alt: "Carnaval 2026 - De Prutsers" },
  { src: "/images/backgrounds/2025.jpg", alt: "Carnaval 2025 - De Prutsers" },
  { src: "/images/backgrounds/2024.jpg", alt: "Carnaval 2024 - De Prutsers" },
  { src: "/images/backgrounds/2023.jpg", alt: "Carnaval 2023 - De Prutsers" },
  { src: "/images/backgrounds/CV-2019.jpeg", alt: "Carnavalswagen 2019" },
  { src: "/images/backgrounds/Carnaval2017Prutsers.jpg", alt: "Carnaval 2017 - De Prutsers" },
  { src: "/images/backgrounds/Carnaval2016Prutsers.jpg", alt: "Carnaval 2016 - De Prutsers" },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative -mt-20 flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-prutsers-dark">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1800ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Light vignette - just enough for legibility, photos stay clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-prutsers-dark/55 via-prutsers-dark/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

      <div className="animate-fade-up relative z-10 mx-auto max-w-4xl px-4 text-center [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-prutsers-orange-light">
          Jongeren Activiteiten Vereniging Luyksgestel
        </p>

        <h1 className="font-display mt-6 text-4xl text-prutsers-orange sm:text-5xl md:text-6xl">
          JAV Luyksgestel De Prutsers
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-prutsers-orange/60" />
        <p className="mt-6 text-base text-white/90 sm:text-lg">
          Een vereniging voor jongeren door jongeren &mdash; sinds 2003.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Toon slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-prutsers-orange" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
