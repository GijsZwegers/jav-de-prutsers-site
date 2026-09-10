"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type ActivityCategory = {
  label: string;
  photos: string[];
};

type CardState = {
  current: number;
  incoming: number | null;
  visible: boolean;
};

const SWAP_INTERVAL_MS = 6000;
const CARD_STAGGER_MS = 700;
const CROSSFADE_MS = 1100;

export default function ActivityShowcase({ categories }: { categories: ActivityCategory[] }) {
  const [cards, setCards] = useState<CardState[]>(() =>
    categories.map(() => ({ current: 0, incoming: null, visible: false })),
  );
  const [lightbox, setLightbox] = useState<{ category: number; photo: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  // Voorkom dat de pagina erachter meescrollt terwijl de lightbox open staat (vooral op mobiel vervelend).
  useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox]);

  // Elk kaartje wisselt rustig (met een langzame, echte overvloeier) en om beurten
  // naar de volgende foto, zodat het nooit allemaal tegelijk of te snel gebeurt.
  useEffect(() => {
    const timers: number[] = [];

    categories.forEach((cat, i) => {
      const interval = window.setInterval(() => {
        setCards((prev) => {
          const next = [...prev];
          const nextIncoming = (next[i].current + 1) % cat.photos.length;
          next[i] = { ...next[i], incoming: nextIncoming, visible: false };
          return next;
        });

        // Eén frame later de opacity naar 100% zetten, zodat de transition ook echt afspeelt.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setCards((prev) => {
              const next = [...prev];
              if (next[i].incoming !== null) next[i] = { ...next[i], visible: true };
              return next;
            });
          });
        });

        // Na de overvloeier de nieuwe foto definitief maken.
        const settle = window.setTimeout(() => {
          setCards((prev) => {
            const next = [...prev];
            if (next[i].incoming !== null) {
              next[i] = { current: next[i].incoming, incoming: null, visible: false };
            }
            return next;
          });
        }, CROSSFADE_MS + 60);
        timers.push(settle);
      }, SWAP_INTERVAL_MS + i * CARD_STAGGER_MS);
      timers.push(interval);
    });

    return () => timers.forEach((t) => clearTimeout(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const step = (delta: number) => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const photos = categories[prev.category].photos;
      return { ...prev, photo: (prev.photo + delta + photos.length) % photos.length };
    });
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {categories.map((item, i) => {
          const { current, incoming, visible } = cards[i];
          const len = item.photos.length;

          const slot = (offset: number) => {
            const currentSrc = item.photos[(current + offset) % len];
            const incomingSrc = incoming !== null ? item.photos[(incoming + offset) % len] : null;
            return { currentSrc, incomingSrc };
          };

          const back = slot(1);
          const front = slot(0);

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setLightbox({ category: i, photo: current })}
              className="group relative aspect-square w-full text-left"
              aria-label={`Bekijk foto's van ${item.label}`}
            >
              <div className="absolute inset-3 -rotate-6 overflow-hidden rounded-xl border-4 border-white bg-white shadow-md transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-12">
                <Image src={back.currentSrc} alt="" fill className="object-cover" />
                {back.incomingSrc && (
                  <Image
                    src={back.incomingSrc}
                    alt=""
                    fill
                    className={`object-cover transition-opacity ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
                  />
                )}
              </div>
              <div className="absolute inset-3 rotate-3 overflow-hidden rounded-xl border-4 border-white bg-white shadow-lg transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-0 group-hover:scale-105">
                <Image src={front.currentSrc} alt={item.label} fill className="object-cover" />
                {front.incomingSrc && (
                  <Image
                    src={front.incomingSrc}
                    alt=""
                    fill
                    className={`object-cover transition-opacity ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/10">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-prutsers-dark opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                    Bekijk foto&apos;s
                  </span>
                </div>
              </div>
              <span className="shadow-brand-sm absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-prutsers-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {lightbox &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Sluiten"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            >
              &times;
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Vorige foto"
              className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:left-6"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Volgende foto"
              className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-6"
            >
              &#8250;
            </button>

            <div className="flex w-full max-w-3xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <div
                className="relative h-[65vh] w-full touch-pan-y"
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                  touchStartY.current = e.touches[0].clientY;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current === null || touchStartY.current === null) return;
                  const dx = e.changedTouches[0].clientX - touchStartX.current;
                  const dy = e.changedTouches[0].clientY - touchStartY.current;
                  touchStartX.current = null;
                  touchStartY.current = null;
                  // Alleen als het duidelijk een horizontale swipe is (en geen verticale scroll/tik).
                  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                    step(dx < 0 ? 1 : -1);
                  }
                }}
              >
                <Image
                  src={categories[lightbox.category].photos[lightbox.photo]}
                  alt={categories[lightbox.category].label}
                  fill
                  className="rounded-lg object-contain"
                  sizes="90vw"
                />
              </div>
              <p className="mt-4 text-center text-sm font-bold uppercase tracking-wide text-white/80">
                {categories[lightbox.category].label} &middot; {lightbox.photo + 1}/
                {categories[lightbox.category].photos.length}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
