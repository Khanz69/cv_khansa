'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        id="header"
        className="header custom-header-bg d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          {/* LOGO */}
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">Khansa Nisrina</h1>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            id="navmenu"
            className="navmenu d-none d-lg-block"
            suppressHydrationWarning
          >
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* HAMBURGER (MOBILE) */}
          <button
            type="button"
            className="mobile-nav-toggle d-lg-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" />
          </button>
        </div>
      </header>

      {/* SIDEBAR + OVERLAY (MOBILE) */}
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`mobile-nav-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Menu</span>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <i className="bi bi-x" />
          </button>
        </div>

        <ul>
          <li>
            <a href="#hero" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#resume" onClick={closeMenu}>Resume</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </aside>
    </>
  );
}
