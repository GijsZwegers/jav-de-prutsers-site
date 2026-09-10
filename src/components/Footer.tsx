import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-prutsers-green-deep to-prutsers-green-deepest text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-transparent-green.png"
              alt="JAV Luyksgestel De Prutsers"
              width={48}
              height={68}
              className="h-12 w-auto object-contain"
            />
            <span className="font-display text-base leading-none text-white">
              JAV Luyksgestel De Prutsers
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Jongeren Activiteiten Vereniging Luyksgestel &ldquo;De Prutsers&rdquo; &mdash; opgericht in 2003, een
            snel groeiende vereniging voor jongeren door jongeren.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Navigatie
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li><Link href="/" className="hover:text-prutsers-orange-light">Home</Link></li>
            <li><Link href="/sponsoren" className="hover:text-prutsers-orange-light">Sponsoren</Link></li>
            <li><Link href="/media" className="hover:text-prutsers-orange-light">Media</Link></li>
            <li><Link href="/club-van-11" className="hover:text-prutsers-orange-light">Club van 11</Link></li>
            <li><Link href="/lid-worden" className="hover:text-prutsers-orange-light">Lid worden</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>Luyksgestel</li>
            <li>
              <a href="mailto:info@javluyksgestel.nl" className="hover:text-prutsers-orange-light">
                info@javluyksgestel.nl
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/JAVdeprutsersluyksgestel/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-prutsers-orange-light"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/javluyksgestel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-prutsers-orange-light"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/20 py-4 text-center text-xs text-white/60">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4">
          <span>
            &copy; {new Date().getFullYear()} JAV Luyksgestel De Prutsers. Alle rechten voorbehouden.
          </span>
          <span className="hidden sm:inline">&middot;</span>
          <span>
            Mede mogelijk gemaakt door{" "}
            <a
              href="https://www.zwegersit.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/80 hover:text-prutsers-orange-light"
            >
              ZwegersIT
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
