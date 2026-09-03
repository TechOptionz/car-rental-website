"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, PHONE, PHONE_TEL } from "@/data/site";

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Soft shadow under the bar once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__bar">
        <Link href="/" aria-label="Motorana home" onClick={closeMenu} className="header-logo-link">
          <Image
            src="/assets/logo-bold.png"
            alt="Motorana Rideshare Rentals"
            width={2004}
            height={387}
            priority
            className="header-logo"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="site-nav hdr-desktop">
          {navItems.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.id}
                href={n.href}
                className={`nav-link${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="site-actions hdr-desktop">
          <a href={`tel:${PHONE_TEL}`} className="header-phone" aria-label={`Call ${PHONE}`} title={PHONE}>
            <span className="header-phone__icon">
              <PhoneIcon />
            </span>
            <span className="header-phone__number">{PHONE}</span>
          </a>
          <Link href="/contact" className="btn-navy header-cta">
            Enquire now
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="site-actions hdr-mobile">
          <Link href="/contact" className="btn-navy header-cta hdr-tablet">
            Enquire now
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="header-phone-btn" aria-label={`Call ${PHONE}`}>
            <PhoneIcon size={20} />
          </a>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu: overlay panel under the bar, backdrop closes it */}
      {menuOpen && (
        <>
          <div className="mobile-nav-backdrop" onClick={closeMenu} aria-hidden="true" />
          <nav id="mobile-nav" aria-label="Mobile" className="mobile-nav">
            <ul className="mobile-nav__list">
              {navItems.map((n) => {
                const active = isActive(n.href);
                return (
                  <li key={n.id}>
                    <Link
                      href={n.href}
                      onClick={closeMenu}
                      className={`mobile-nav__link${active ? " is-active" : ""}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mobile-nav__actions">
              <a href={`tel:${PHONE_TEL}`} className="btn-outline-navy mobile-nav__btn" onClick={closeMenu}>
                <PhoneIcon />
                Call {PHONE}
              </a>
              <Link href="/contact" onClick={closeMenu} className="btn-navy mobile-nav__btn">
                Enquire now
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
