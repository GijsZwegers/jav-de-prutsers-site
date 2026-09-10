import Image from "next/image";
import Link from "next/link";
import ActivityShowcase from "@/components/ActivityShowcase";
import FacebookFeed from "@/components/FacebookFeed";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import { geledingen, tijdlijn } from "@/lib/about";

const activityCategories = [
  {
    label: "Zeskamp",
    photos: [
      "/images/activiteiten/zeskamp-1.jpg",
      "/images/activiteiten/zeskamp-2.jpg",
      "/images/activiteiten/zeskamp-3.jpg",
      "/images/activiteiten/zeskamp-4.jpg",
    ],
  },
  {
    label: "Activiteiten",
    photos: [
      "/images/activiteiten/activiteiten-1.jpg",
      "/images/activiteiten/activiteiten-2.jpg",
      "/images/activiteiten/activiteiten-3.jpg",
      "/images/activiteiten/activiteiten-4.jpg",
    ],
  },
  {
    label: "Carnaval",
    photos: [
      "/images/activiteiten/carnaval-1.jpg",
      "/images/activiteiten/carnaval-2.jpg",
      "/images/activiteiten/carnaval-3.jpg",
      "/images/activiteiten/carnaval-4.jpg",
    ],
  },
  {
    label: "Samen bouwen",
    photos: [
      "/images/activiteiten/samenbouwen-1.jpg",
      "/images/activiteiten/samenbouwen-2.jpg",
      "/images/activiteiten/samenbouwen-3.jpg",
      "/images/activiteiten/samenbouwen-4.jpg",
    ],
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Wie zijn wij - intro */}
      <section className="relative overflow-hidden bg-prutsers-cream py-20">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--color-prutsers-orange), transparent 70%)" }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-prutsers-orange-dark">
              <span className="h-px w-8 bg-prutsers-orange-dark" />
              Wie zijn wij
            </p>
            <h2 className="font-display mt-3 text-3xl text-prutsers-orange sm:text-4xl">
              JAV Luyksgestel De Prutsers
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-prutsers-dark/75">
              <p>
                Jongeren Activiteiten Vereniging (JAV) Luyksgestel is een vereniging waar jongeren en
                (jong)volwassenen samenkomen, ideeën tot leven brengen en vooral veel plezier maken. Wat ooit begon
                met een groep vrienden en een carnavalswagen onder een carport, is inmiddels uitgegroeid tot een
                bruisende vereniging met ruim 100 leden.
              </p>
              <p>
                Ons doel is helder: jongeren met elkaar verbinden en samen zorgen voor een levendig en leefbaar
                Luyksgestel. Een vereniging waar je vrienden maakt, nieuwe dingen leert en vooral merkt hoeveel je
                samen voor elkaar kunt krijgen.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/lid-worden"
                className="shadow-brand-sm rounded-xl bg-prutsers-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-prutsers-orange-dark hover:shadow-brand"
              >
                Lid worden
              </Link>
              <Link
                href="/club-van-11"
                className="rounded-xl border border-prutsers-dark/15 bg-white px-6 py-3 text-sm font-semibold text-prutsers-dark transition hover:-translate-y-0.5 hover:border-prutsers-orange/40 hover:text-prutsers-orange-dark hover:shadow-brand-sm"
              >
                Club van 11
              </Link>
              <Link
                href="/sponsoren"
                className="rounded-xl border border-prutsers-dark/15 bg-white px-6 py-3 text-sm font-semibold text-prutsers-dark transition hover:-translate-y-0.5 hover:border-prutsers-orange/40 hover:text-prutsers-orange-dark hover:shadow-brand-sm"
              >
                Onze sponsoren
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white">
              <Image
                src="/images/backgrounds/CV-2019.jpeg"
                alt="Carnavalswagen JAV Luyksgestel De Prutsers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prutsers-dark/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kerncijfers */}
      <section className="relative overflow-hidden bg-mesh-light py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 text-center sm:grid-cols-3">
          {[
            { value: "2003", label: "Ontstaan" },
            { value: "100+", label: "Leden" },
            { value: "2022", label: "Eigen bouwhal" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="glass-light rounded-2xl px-6 py-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-prutsers-orange/10">
                <p className="font-display text-4xl text-prutsers-orange sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-prutsers-dark/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Onze vereniging - drie geledingen */}
      <section className="bg-prutsers-cream py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-prutsers-orange-dark">
              <span className="h-px w-8 bg-prutsers-orange-dark" />
              Onze vereniging
              <span className="h-px w-8 bg-prutsers-orange-dark" />
            </p>
            <h2 className="font-display mt-3 text-3xl text-prutsers-dark sm:text-4xl">Drie generaties, één club</h2>
            <p className="mt-4 text-prutsers-dark/70">
              Onze vereniging bestaat uit drie onderdelen &mdash; van jeugdlid tot betrokken oud-lid.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {geledingen.map((g, i) => (
              <Reveal key={g.title} delay={i * 120}>
                <div className="group relative overflow-hidden rounded-2xl border border-prutsers-dark/5 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-brand-sm">
                  <span className="font-display absolute -right-2 -top-4 text-7xl text-prutsers-orange-tint transition group-hover:text-prutsers-orange-tint/80">
                    0{i + 1}
                  </span>
                  <div className="relative">
                    <span className="mb-4 inline-block h-1.5 w-10 rounded-full bg-prutsers-orange" />
                    <h3 className="font-display text-xl text-prutsers-dark">{g.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-prutsers-dark/70">{g.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ons verhaal - tijdlijn */}
      <section className="relative overflow-hidden bg-mesh-light py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-prutsers-orange-dark">
              <span className="h-px w-8 bg-prutsers-orange-dark" />
              Ons verhaal
              <span className="h-px w-8 bg-prutsers-orange-dark" />
            </p>
            <h2 className="font-display mt-3 text-3xl text-prutsers-dark sm:text-4xl">Van carport tot bouwhal</h2>
          </Reveal>

          <div className="relative mt-14 space-y-12">
            <div className="timeline-line absolute bottom-2 left-[27px] top-2 w-0.5 sm:left-[31px]" />
            {tijdlijn.map((event, i) => (
              <Reveal key={event.year} delay={i * 100}>
                <div className="relative flex gap-6 sm:gap-8">
                  <div
                    className={`timeline-node relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-16 sm:w-16 sm:text-base ${
                      event.future
                        ? "border-2 border-dashed border-prutsers-accent-dark bg-prutsers-cream text-prutsers-accent-dark"
                        : "bg-prutsers-orange text-white"
                    }`}
                  >
                    {event.future ? (
                      <span className="text-2xl leading-none sm:text-3xl">+</span>
                    ) : (
                      event.year
                    )}
                  </div>
                  <div className="pt-2">
                    {event.future && (
                      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-prutsers-accent-dark">
                        {event.year}
                      </p>
                    )}
                    <h3 className="font-display text-lg text-prutsers-dark sm:text-xl">{event.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-prutsers-dark/70 sm:text-base">
                      {event.description}
                    </p>
                    {event.future && (
                      <Link
                        href="/lid-worden"
                        className="shadow-brand-sm mt-4 inline-block rounded-xl bg-prutsers-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-prutsers-orange-dark hover:shadow-brand"
                      >
                        Lid worden
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wat we doen */}
      <section className="bg-prutsers-cream py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-prutsers-orange-dark">
              <span className="h-px w-8 bg-prutsers-orange-dark" />
              Meer dan carnaval
            </p>
            <h2 className="font-display mt-3 text-3xl text-prutsers-dark sm:text-4xl">Wat we samen doen</h2>
            <p className="mt-5 text-base leading-relaxed text-prutsers-dark/75">
              We organiseren en beleven samen allerlei activiteiten, van zeskampen en sportevenementen tot carnaval
              en andere activiteiten voor en door jongeren. Daarbij draait het niet alleen om plezier, maar ook om
              samen leren, verantwoordelijkheid nemen en iets neerzetten waar je trots op kunt zijn.
            </p>
            <p className="mt-4 text-base leading-relaxed text-prutsers-dark/75">
              Jongeren krijgen bij ons de ruimte om ideeën te bedenken, activiteiten te organiseren, samen te werken
              en hun creativiteit kwijt te kunnen. Techniek, organisatie, sociale vaardigheden en samenwerking komen
              daarbij vanzelf samen.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <ActivityShowcase categories={activityCategories} />
          </Reveal>
        </div>
      </section>

      {/* Laatste nieuws */}
      <section className="relative overflow-hidden bg-mesh-light py-20">
        <div className="mx-auto max-w-2xl px-4">
          <Reveal className="text-center">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-prutsers-orange-dark">
              <span className="h-px w-8 bg-prutsers-orange-dark" />
              Volg ons
              <span className="h-px w-8 bg-prutsers-orange-dark" />
            </p>
            <h2 className="font-display mt-3 text-3xl text-prutsers-dark sm:text-4xl">Laatste nieuws</h2>
            <p className="mt-4 text-prutsers-dark/70">
              Rechtstreeks van onze Facebookpagina &mdash; zo mis je nooit iets.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <FacebookFeed />
          </Reveal>
        </div>
      </section>

      {/* Missie */}
      <section className="relative overflow-hidden bg-mesh-warm py-20 text-center text-white">
        <Reveal className="relative z-10 mx-auto max-w-2xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-prutsers-orange-light">Ons doel</p>
          <p className="font-display mt-5 text-2xl leading-snug text-white sm:text-3xl">
            Jongeren met elkaar verbinden en samen zorgen voor een{" "}
            <span className="text-prutsers-orange">levendig en leefbaar Luyksgestel</span>.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Een vereniging waar je vrienden maakt, nieuwe dingen leert en vooral merkt hoeveel je samen voor elkaar
            kunt krijgen.
          </p>
        </Reveal>
      </section>
    </>
  );
}
