import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

const formUrl =
  "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=jMOZr_-fF0KMXVIFjgU_N59M3lrGmn5Ljilk9t_Q7itUNkIxRVVVS0RFODNKQjExUlhGVzVSRkcwSSQlQCN0PWcu";

export const metadata: Metadata = {
  title: "Club van 11 | JAV Luyksgestel De Prutsers",
  description:
    "Word lid van de Club van 11 van JAV Luyksgestel De Prutsers en steun onze vereniging met een symbolisch bedrag van €11,-.",
};

export default function ClubVan11Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh-warm py-20 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-prutsers-orange-light">
            Steun de vereniging
          </p>
          <h1 className="font-display mt-4 text-4xl text-white sm:text-6xl">
            Club van <span className="text-prutsers-orange">11</span>
          </h1>
        </div>
      </section>

      <section className="bg-prutsers-cream py-16">
        <Reveal className="mx-auto max-w-3xl space-y-6 rounded-3xl bg-white p-8 shadow-sm sm:p-12 text-base leading-relaxed text-prutsers-dark/80">
          <p>Leuk dat je geïnteresseerd bent in onze Club van 11.</p>
          <p>
            Wij hebben er bewust voor gekozen om dit keer niet het bedrijfsleven als doelgroep te nemen. Er zijn
            namelijk heel veel andere mensen die JAV Luyksgestel De Prutsers een warm hart toe willen dragen en hun
            steentje bij willen dragen aan onze vereniging. Door middel van een symbolisch bedrag van{" "}
            <strong className="text-prutsers-orange-dark">€11,-</strong> willen wij hiermee een extraatje creëren om
            onze activiteiten nog verder uit te breiden en mede om onze vaste lasten van onze eigen loods te
            bekostigen.
          </p>
          <p>
            Heeft u vragen over de Club van 11? Mail naar{" "}
            <a href="mailto:clubvan11@javluyksgestel.nl" className="font-semibold text-prutsers-accent-dark underline decoration-prutsers-accent-dark/40 underline-offset-2">
              clubvan11@javluyksgestel.nl
            </a>
            .
          </p>
          <p className="font-semibold text-prutsers-dark">
            Alvast hartelijk dank! En welkom bij de Club van 11 van JAV Luyksgestel De Prutsers.
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-brand-sm inline-block rounded-xl bg-prutsers-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-prutsers-orange-dark hover:shadow-brand"
          >
            Aanmelden voor de Club van 11
          </a>
        </Reveal>
      </section>
    </>
  );
}
