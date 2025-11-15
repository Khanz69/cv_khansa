"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader mati otomatis setelah 800ms
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    // ⛔ Untuk sekarang: JANGAN load script vendor dulu,
    // supaya tidak mengganggu hydration React.
    // Nanti kalau UI sudah stabil, baru kita hidupkan lagi pelan-pelan.

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="index-page">
      {loading && <Preloader />}

      <Header />
      <main className="main">
        <Hero />
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
