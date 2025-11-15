"use client";

import { useEffect, useState } from "react";
import Particles from "./Particles";

interface Profile {
  nama?: string;
  sosial_twitter?: string;
  sosial_facebook?: string;
  sosial_instagram?: string;
  sosial_linkedin?: string;
}

export default function Hero() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profil");
        if (!res.ok) return;
        const data = await res.json();
        let p: Profile | null = null;
        if (Array.isArray(data)) p = data.length > 0 ? data[0] : null;
        else p = data;
        setProfile(p);
      } catch (e) {
        console.error(e);
      }
    }
    fetchProfile();
  }, []);

  // Measure header height and set CSS variable so hero centers exactly below the fixed header
  useEffect(() => {
    const setHeaderHeight = () => {
      const header = document.getElementById('header');
      const h = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
      if (h) document.documentElement.style.setProperty('--header-height', `${h}px`);
    };
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    return () => window.removeEventListener('resize', setHeaderHeight);
  }, []);

  const nama = profile?.nama || "Khansa Nisrina";

  return (
    <section
      id="hero"
      data-aos="zoom-in"
      className="relative w-full overflow-hidden"
      style={{
        height: 'calc(100vh - var(--header-height))',
        background: ' #1d1b17)',
      }}
      suppressHydrationWarning
    >
      {/* Particles Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#7f9e74", "#4a5f47"]}
          particleCount={120}
          particleSpread={4}
          speed={0.08}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          cameraDistance={25}
        />
      </div>

      {/* Content: center vertically within area below header */}
      <div className="relative z-[50] max-w-4xl mx-auto text-center px-4" style={{ height: '100%' }}>
        <div className="h-full flex items-center justify-center flex-col gap-8 hero-push">
          <h1 data-aos="fade-up" data-aos-delay="200" className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white font-mulish animate-fade-up leading-tight">
            Halo, Saya {nama}
          </h1>

          <p data-aos="fade-up" data-aos-delay="350" className="text-lg md:text-2xl text-gray-300 animate-fade-up max-w-2xl">
            Saya adalah <span className="text-white-400 font-semibold">Mahasiswa UMMI</span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-zoom-in">
            {profile?.sosial_twitter && (
              <a
                href={profile.sosial_twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 hover:bg-green-600 text-white transition transform hover:scale-110"
              >
                <i className="bi bi-twitter-x text-xl"></i>
              </a>
            )}
            {profile?.sosial_facebook && (
              <a
                href={profile.sosial_facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 hover:bg-green-600 text-white transition transform hover:scale-110"
              >
                <i className="bi bi-facebook text-xl"></i>
              </a>
            )}
            {profile?.sosial_instagram && (
              <a
                href={profile.sosial_instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 hover:bg-green-600 text-white transition transform hover:scale-110"
              >
                <i className="bi bi-instagram text-xl"></i>
              </a>
            )}
            {profile?.sosial_linkedin && (
              <a
                href={profile.sosial_linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 hover:bg-green-600 text-white transition transform hover:scale-110"
              >
                <i className="bi bi-linkedin text-xl"></i>
              </a>
            )}
          </div>

          {/* CTA Button */}
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition transform hover:scale-105 active:scale-95"
          >
            Pelajari Selengkapnya
          </a>
        </div>
      </div>

      {/* removed inline style block to avoid conflicting top-padding adjustments */}
    </section>
  );
}
