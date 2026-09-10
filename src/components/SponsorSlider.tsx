import Image from "next/image";
import Link from "next/link";
import { sponsors } from "@/lib/sponsors";

export default function SponsorSlider() {
  const activeSponsors = sponsors.filter((s) => s.active !== false);
  const track = [...activeSponsors, ...activeSponsors];

  return (
    <section className="relative border-y-2 border-prutsers-orange bg-prutsers-cream py-6">
      <div className="mx-auto mb-3 max-w-6xl px-4">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-prutsers-orange-dark">
          Onze sponsoren
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-prutsers-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-prutsers-cream to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-10 px-5">
          {track.map((sponsor, i) => (
            <Link
              key={`${sponsor.name}-${i}`}
              href={sponsor.url ?? "/sponsoren"}
              target={sponsor.url ? "_blank" : undefined}
              rel={sponsor.url ? "noopener noreferrer" : undefined}
              title={sponsor.name}
              className="flex h-16 w-32 flex-shrink-0 items-center justify-center rounded-lg border border-black/5 bg-white p-2 opacity-75 shadow-sm transition hover:opacity-100 hover:border-prutsers-orange/30 hover:shadow-md"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={128}
                height={64}
                className="max-h-14 w-auto max-w-[112px] object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
