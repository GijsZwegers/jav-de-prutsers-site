import type { Metadata } from "next";
import FacebookFeed from "@/components/FacebookFeed";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Media | JAV Luyksgestel De Prutsers",
  description: "Het laatste nieuws van JAV Luyksgestel De Prutsers via Facebook.",
};

export default function MediaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh-warm py-20 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-prutsers-orange-light">Volg ons</p>
          <h1 className="font-display mt-4 text-4xl text-white sm:text-6xl">
            <span className="text-prutsers-orange">Media</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Blijf op de hoogte van al onze activiteiten via onze Facebookpagina.
          </p>
        </div>
      </section>

      <section className="bg-prutsers-cream py-16">
        <Reveal className="mx-auto max-w-2xl px-4">
          <h2 className="font-display mb-4 flex items-center justify-center gap-2 text-2xl font-bold text-prutsers-dark">
            <span className="text-prutsers-accent-dark">Facebook</span>
          </h2>
          <FacebookFeed />
        </Reveal>
      </section>
    </>
  );
}
