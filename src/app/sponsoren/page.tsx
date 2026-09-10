import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { allSponsorNames, sponsors } from "@/lib/sponsors";

export const metadata: Metadata = {
  title: "Sponsoren | JAV Luyksgestel De Prutsers",
  description: "Onze sponsoren maken het mogelijk om ieder jaar weer een prachtige carnavalswagen te bouwen.",
};

export default function SponsorenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh-warm py-20 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-prutsers-orange-light">Bedankt aan</p>
          <h1 className="font-display mt-4 text-4xl text-white sm:text-6xl">
            Onze <span className="text-prutsers-orange">Sponsoren</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Om onze carnavalswagen te kunnen betalen vragen wij een jaarlijkse contributie aan onze leden. De
            opbrengst van de contributie is niet genoeg om de kosten van een complete wagen met loopgroep te dekken.
            Dankzij onze sponsoren is dit gelukkig wel mogelijk.
          </p>
        </div>
      </section>

      <section className="bg-prutsers-cream py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:grid-cols-4">
          {sponsors.filter((sponsor) => sponsor.active !== false).map((sponsor, i) => {
            const card = (
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-prutsers-orange/30 hover:shadow-brand-sm">
                <div className="relative h-16 w-full">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-prutsers-dark/70 transition group-hover:text-prutsers-orange-dark">
                  {sponsor.name}
                </p>
              </div>
            );
            return (
              <Reveal key={sponsor.name} delay={(i % 4) * 70} className="h-full">
                {sponsor.url ? (
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-prutsers-cream pb-16">
        <Reveal className="mx-auto max-w-4xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-prutsers-orange-dark">
            Met dank aan al onze sponsoren
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {allSponsorNames.map((name) => (
              <span
                key={name}
                className="rounded-full border border-prutsers-dark/10 bg-white px-4 py-2 text-sm text-prutsers-dark/75"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-mesh-light py-16 text-center">
        <Reveal className="relative z-10 mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl text-prutsers-orange sm:text-4xl">Sponsor worden?</h2>
          <p className="mt-4 text-prutsers-dark/65">
            Niet alleen carnaval is belangrijk voor ons, steeds meer gaan we ons richten op het sociale en creatieve
            belang van onze gemeenschap. Wil jouw bedrijf sponsor worden of meer informatie ontvangen over
            sponsoring?
          </p>
          <a
            href="mailto:info@javluyksgestel.nl"
            className="shadow-brand-sm mt-6 inline-block rounded-xl bg-prutsers-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-prutsers-orange-dark hover:shadow-brand"
          >
            info@javluyksgestel.nl
          </a>
        </Reveal>
      </section>
    </>
  );
}
