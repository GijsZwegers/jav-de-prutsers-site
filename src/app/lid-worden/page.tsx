import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Lid worden | JAV Luyksgestel De Prutsers",
  description: "Meld je aan als lid van JAV Luyksgestel De Prutsers via het aanmeldformulier.",
};

export default function LidWordenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh-warm py-20 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-prutsers-orange-light">
            Word onderdeel van de vereniging
          </p>
          <h1 className="font-display mt-4 text-4xl text-white sm:text-6xl">
            Lid <span className="text-prutsers-orange">worden?</span>
          </h1>
        </div>
      </section>

      <section className="bg-prutsers-cream py-16">
        <Reveal className="mx-auto max-w-3xl space-y-6 rounded-3xl bg-white p-8 shadow-sm sm:p-12 text-base leading-relaxed text-prutsers-dark/80">
          <p>Vul onderstaand formulier in om je aan te melden als lid van onze vereniging.</p>

          <div className="rounded-2xl border border-prutsers-orange/25 bg-prutsers-orange-tint p-5 text-sm leading-relaxed text-prutsers-dark/80">
            <p>
              <strong className="text-prutsers-orange-dark">Let op:</strong> door grote belangstelling bij de
              jeugdleden van JAV Luyksgestel word je na aanmelding op een wachtlijst geplaatst. Na bevestiging van
              de aanmelding word je toegelaten bij onze vereniging. Hiervoor wordt contact met je opgenomen. Dit
              doen we zodat veiligheid en de juiste begeleiding gewaarborgd kan blijven worden.
            </p>
          </div>

          <p>
            Heeft u specifieke vragen over de jeugdgroep van JAV Luyksgestel? Stel uw vraag via{" "}
            <a
              href="mailto:jeugd@javluyksgestel.nl"
              className="font-semibold text-prutsers-accent-dark underline decoration-prutsers-accent-dark/40 underline-offset-2"
            >
              jeugd@javluyksgestel.nl
            </a>
            .
          </p>
          <p>
            Algemene vragen over de vereniging en lid worden? Stel uw vraag dan via{" "}
            <a
              href="mailto:secretaris@javluyksgestel.nl"
              className="font-semibold text-prutsers-accent-dark underline decoration-prutsers-accent-dark/40 underline-offset-2"
            >
              secretaris@javluyksgestel.nl
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl bg-white px-4 shadow-sm">
          <iframe
            title="Aanmeldformulier JAV Luyksgestel De Prutsers"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=jMOZr_-fF0KMXVIFjgU_N7ECRyvGDYpNuZGjQ9ChjIVUMURLQTFLMDNFUzlBODZFRjFPUkcxUlU1TyQlQCN0PWcu&embed=true"
            width="100%"
            height="800"
            style={{ border: "none", maxWidth: "100%" }}
            allowFullScreen
          />
        </Reveal>
      </section>
    </>
  );
}
