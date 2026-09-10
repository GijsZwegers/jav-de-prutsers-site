export type Geleding = {
  title: string;
  description: string;
};

export const geledingen: Geleding[] = [
  {
    title: "Jeugdprutsers",
    description:
      "De jongste groep, voor jongeren van groep 8 tot en met 15 jaar. Zij maken op een actieve en gezellige manier kennis met de vereniging en alles wat daarbij komt kijken.",
  },
  {
    title: "De Prutsers",
    description:
      "De actieve leden van de vereniging. Zij organiseren activiteiten, bouwen, steken de handen uit de mouwen en zorgen ervoor dat er altijd iets te beleven is.",
  },
  {
    title: "Vrienden van de Prutsers",
    description:
      "Niet meer actief lid, maar nog altijd betrokken bij de vereniging en dragen de Prutsers nog altijd een warm hart toe.",
  },
];

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  future?: boolean;
};

export const tijdlijn: TimelineEvent[] = [
  {
    year: "2003",
    title: "Onder de carport",
    description:
      "Een groep enthousiaste jongeren die zichzelf ‘de Prutsers’ noemde, besloot een carnavalswagen te bouwen. Geen professionele werkplaats, maar gewoon onder een carport. Met creativiteit, enthousiasme en een flinke dosis doorzettingsvermogen werd de eerste wagen gebouwd.",
  },
  {
    year: "2005",
    title: "Officiële vereniging",
    description:
      "De groep groeide uit tot een officiële vereniging. Wat begon met ongeveer 20 leden, is inmiddels uitgegroeid tot een vereniging van ruim 100 leden.",
  },
  {
    year: "2022",
    title: "Eigen bouwhal",
    description:
      "Na jaren bouwen op verschillende plekken kregen we de mogelijkheid om onze eigen bouwhal aan het Boscheind in Luyksgestel te realiseren — dé plek waar onze carnavalswagens tot leven komen.",
  },
  {
    year: "En verder",
    title: "Het verhaal gaat door",
    description:
      "We blijven bouwen aan nieuwe activiteiten, verwelkomen nieuwe (jeugd)leden en dromen van nog mooiere carnavalswagens. Het verhaal van JAV Luyksgestel De Prutsers is nog lang niet af — wie weet schrijf jij binnenkort de volgende pagina mee.",
    future: true,
  },
];
