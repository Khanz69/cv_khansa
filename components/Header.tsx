'use client';

import PillNav from '../Animations/PillNav';

export default function Header() {
  // Header now delegates navigation rendering to PillNav for a modern pill-style header.
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Resume', href: '/#resume' },
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Contact', href: '/#contact' }
  ];

  return (
    <header id="header" className="header custom-header-bg d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <PillNav
          logo="/assets/img/favicon.png"
          logoAlt="Khansa Nisrina"
          items={items}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="transparent"
          pillColor="var(--surface-color)"
          hoveredPillTextColor="var(--heading-color)"
          pillTextColor="var(--default-color)"
        />
      </div>
    </header>
  );
}
