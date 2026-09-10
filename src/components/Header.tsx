"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLeft = [
  { href: "/", label: "Home" },
  { href: "/sponsoren", label: "Sponsoren" },
  { href: "/media", label: "Media" },
];

const navRight = [{ href: "/club-van-11", label: "Club van 11" }];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const solid = !isHome || scrolled || open;

  const linkClass = (active: boolean) =>
    `relative rounded-lg px-4 py-2 text-sm font-bold tracking-wide transition-all duration-200 after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:transition-opacity after:content-[''] ${
      solid
        ? active
          ? "text-prutsers-green-deep after:bg-prutsers-orange after:opacity-100"
          : "text-prutsers-green-deep/70 hover:text-prutsers-green-deep after:bg-prutsers-orange after:opacity-0 hover:after:opacity-60"
        : active
          ? "text-white after:bg-prutsers-orange after:opacity-100"
          : "text-white/85 hover:text-white after:bg-prutsers-orange after:opacity-0 hover:after:opacity-60"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b-2 border-prutsers-orange bg-prutsers-cream shadow-md shadow-black/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4">
        <nav className="col-start-1 hidden items-center gap-1 md:flex">
          {navLeft.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(pathname === item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="group col-start-2 flex items-center justify-center gap-2 justify-self-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src={solid ? "/images/logo-transparent-black.png" : "/images/logo-transparent-white.png"}
            alt="JAV Luyksgestel De Prutsers"
            width={44}
            height={62}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span
            className={`font-display hidden text-base leading-none transition-colors duration-300 sm:block ${
              solid ? "text-prutsers-orange" : "text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]"
            }`}
          >
            JAV Luyksgestel De Prutsers
          </span>
        </Link>

        <div className="col-start-3 flex items-center justify-end gap-1 justify-self-end">
          <nav className="hidden items-center gap-1 md:flex">
            {navRight.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(pathname === item.href)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/lid-worden"
              className="shadow-brand-sm ml-1 rounded-full bg-prutsers-orange px-4 py-2 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-prutsers-orange-dark"
            >
              Lid worden
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 transition-transform ${solid ? "bg-prutsers-green-deep" : "bg-white"} ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 transition-opacity ${solid ? "bg-prutsers-green-deep" : "bg-white"} ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 transition-transform ${solid ? "bg-prutsers-green-deep" : "bg-white"} ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-prutsers-green-deep/10 bg-prutsers-cream px-4 py-3 md:hidden">
          {[...navLeft, ...navRight].map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-bold tracking-wide ${
                  active
                    ? "bg-prutsers-green-deep/10 text-prutsers-green-deep"
                    : "text-prutsers-green-deep/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/lid-worden"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-prutsers-orange px-3 py-3 text-center text-sm font-bold tracking-wide text-white"
          >
            Lid worden
          </Link>
        </nav>
      )}
    </header>
  );
}
