"use client";

import { useEffect, useRef, useState } from "react";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/JAVdeprutsersluyksgestel/";
const MIN_WIDTH = 280;
const MAX_WIDTH = 700;

declare global {
  interface Window {
    FB?: { XFBML: { parse: (el?: HTMLElement) => void } };
  }
}

export default function FacebookFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // Laad de Facebook SDK eenmalig.
  useEffect(() => {
    if (window.FB) {
      setReady(true);
      return;
    }

    const existing = document.getElementById("facebook-jssdk") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => setReady(true));
      return;
    }

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v21.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

  // Houd de breedte van de embed in de pas met de breedte van zijn eigen kaart,
  // zodat hij op elk schermformaat mooi meeschaalt i.p.v. een vast formaat aan te houden.
  useEffect(() => {
    if (!ready) return;
    const container = containerRef.current;
    const page = pageRef.current;
    if (!container || !page) return;

    const applyWidth = () => {
      const width = Math.round(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, container.offsetWidth)));
      const current = Number(page.getAttribute("data-width")) || 0;
      if (Math.abs(current - width) < 8) return;
      page.setAttribute("data-width", String(width));
      window.FB?.XFBML.parse(container);
    };

    applyWidth();

    const observer = new ResizeObserver(() => applyWidth());
    observer.observe(container);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5"
    >
      {!ready && (
        <div className="flex h-[700px] animate-pulse items-center justify-center bg-prutsers-cream">
          <p className="text-sm text-prutsers-dark/40">Facebook-feed laden…</p>
        </div>
      )}

      <div className={`flex justify-center p-2 ${ready ? "" : "hidden"}`}>
        <div
          ref={pageRef}
          className="fb-page"
          data-href={FACEBOOK_PAGE_URL}
          data-tabs="timeline"
          data-width="500"
          data-height="700"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
        >
          <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
            <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
              JAV Luyksgestel De Prutsers
            </a>
          </blockquote>
        </div>
      </div>

      {/* Altijd zichtbare uitwijkmogelijkheid: sommige browsers/ad-blockers blokkeren
          embeds van facebook.com standaard, ongeacht of de koppeling zelf goed staat. */}
      <div className="border-t border-black/5 p-3 text-center">
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-prutsers-accent-dark hover:underline"
        >
          Bekijk onze pagina rechtstreeks op Facebook →
        </a>
      </div>
    </div>
  );
}
