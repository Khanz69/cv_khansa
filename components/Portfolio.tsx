"use client";

import { useEffect, useState } from "react";

interface PortfolioItem {
  project_id: number;
  nama_proyek: string;
  kategori_proyek: string;
  tahun_proyek: number;
  deskripsi_proyek: string;
  gambar_proyek_url: string;
}

type FilterKey = "all" | "graphic" | "illustration" | "uiux" | "webdev";

const categories: { key: FilterKey; label: string }[] = [
  { key: "all",          label: "Semua Karya" },
  { key: "graphic",      label: "Graphic Design" },
  { key: "illustration", label: "Illustration" },
  { key: "uiux",         label: "UI/UX Design" },
  { key: "webdev",       label: "Web Development" },
];

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterKey>("all");

  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch("/api/portfolio", { cache: "no-store" });
        const json = await res.json();
        setItems(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error("Error fetching portfolio:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const filtered =
    filter === "all"
      ? items
      : items.filter(
          (item) =>
            item.kategori_proyek &&
            item.kategori_proyek.toLowerCase() === filter
        );

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setShowViewer(true);
  };

  const closeViewer = () => {
    setShowViewer(false);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex === null || filtered.length === 0) return;
    setCurrentIndex((currentIndex - 1 + filtered.length) % filtered.length);
  };

  const nextImage = () => {
    if (currentIndex === null || filtered.length === 0) return;
    setCurrentIndex((currentIndex + 1) % filtered.length);
  };

  if (loading) {
    return (
      <section id="portfolio" data-aos="zoom-in" className="portfolio section">
        <div className="container section-title text-center">
          <span className="subtitle">Portfolio</span>
          <h2>Portfolio</h2>
          <p>Sedang memuat data portfolio...</p>
        </div>
      </section>
    );
  }

  return (
  <section id="portfolio" data-aos="zoom-in" className="portfolio section">
      <div className="container section-title text-center">
        <span className="subtitle">Portfolio</span>
        <h2>Portfolio</h2>
        <p>
          Beberapa karya terbaik saya yang menampilkan kreativitas dan keahlian
          teknis dalam berbagai bidang.
        </p>
      </div>

      <div className="container">
        {/* FILTER */}
        <div className="portfolio-filter mb-4 text-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={filter === cat.key ? "active" : ""}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="row gy-4">
          {filtered.map((item, index) => (
            <div key={item.project_id} data-aos="fade-up" data-aos-delay={`${index * 60}`} className="col-lg-3 col-md-6">
              {/* HAPUS class Bootstrap: "card h-100 shadow-sm" */}
              <article className="portfolio-card h-100">
                <button
                  className="border-0 bg-transparent p-0"
                  onClick={() => openViewer(index)}
                >
                  <div className="portfolio-thumb-wrapper">
                    <img
                      src={item.gambar_proyek_url}
                      alt={item.nama_proyek}
                      className="portfolio-thumb"
                    />
                  </div>
                </button>

                {/* HAPUS "card-body" juga */}
                <div className="portfolio-card-body">
                  <div className="d-flex justify-content-between small portfolio-card-meta">
                    <span>{item.kategori_proyek}</span>
                    <span>{item.tahun_proyek}</span>
                  </div>

                  <h5 className="mt-2 portfolio-card-title">
                    {item.nama_proyek}
                  </h5>

                  <p className="portfolio-card-desc">
                    {item.deskripsi_proyek}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}
      {showViewer && currentIndex !== null && (
        <div className="portfolio-lightbox" onClick={closeViewer}>
          <div
            className="portfolio-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="portfolio-lightbox-close"
              aria-label="Close"
              onClick={closeViewer}
            >
              ×
            </button>

            {/* ARROW LEFT */}
            <button
              type="button"
              className="portfolio-lightbox-arrow portfolio-lightbox-arrow-left"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* ARROW RIGHT */}
            <button
              type="button"
              className="portfolio-lightbox-arrow portfolio-lightbox-arrow-right"
              onClick={nextImage}
            >
              ›
            </button>

            <h5 className="portfolio-lightbox-title">
              {filtered[currentIndex].nama_proyek}
            </h5>

            <img
              src={filtered[currentIndex].gambar_proyek_url}
              alt={filtered[currentIndex].nama_proyek}
              className="portfolio-lightbox-image"
            />

            <div className="portfolio-lightbox-caption">
              <p>
                <strong>Kategori:</strong>{" "}
                {filtered[currentIndex].kategori_proyek}
              </p>
              <p>
                <strong>Tahun:</strong> {filtered[currentIndex].tahun_proyek}
              </p>
              <p className="mt-3">
                {filtered[currentIndex].deskripsi_proyek}
              </p>
            </div>

            <div className="portfolio-lightbox-nav">
              <span className="portfolio-lightbox-counter">
                {currentIndex + 1} / {filtered.length}
              </span>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
