"use client";

import { useEffect, useState } from "react";

interface Service {
  layanan_id: number;
  nama_layanan: string;
  deskripsi_layanan: string;
  ikon_layanan: string;
  link_layanan: string | null;
  featured: number; 
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);


  const normalize = (data: any): Service[] => {
    if (!data) return [];
    if (Array.isArray(data)) return data as Service[];
    if (Array.isArray(data.data)) return data.data as Service[];
    return [data as Service];
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/layanan");
        const json = await res.json();
        const normalized = normalize(json);
        setServices(normalized);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching services:", err);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" data-aos="fade-left" className="services section">
        <div className="container section-title">
          <span className="subtitle">Services</span>
          <h2>Layanan Saya</h2>
          <p>Sedang memuat data layanan...</p>
        </div>
      </section>
    );
  }

  const safeServices = Array.isArray(services) ? services : [];

  return (
    <section id="services" data-aos="fade-left" className="services section">
      <div className="container section-title">
        <span className="subtitle">Services</span>
        <h2>Layanan Saya</h2>
        <p>
          Berbagai layanan profesional yang saya tawarkan untuk membantu
          mewujudkan visi dan misi bisnis Anda.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {safeServices.length === 0 && (
            <p>Belum ada data layanan yang tersedia.</p>
          )}

          {safeServices.map((service, index) => (
            <div key={service.layanan_id} className="col-lg-3 col-md-6">
              <div
                data-aos="fade-up"
                data-aos-delay={`${index * 80}`}
                className={`service-item ${
                  service.featured ? "featured" : ""
                }`}
              >
                {service.featured ? (
                  <div className="featured-tag">Featured</div>
                ) : null}

                <div className="icon-wrapper">
                  <i className={`bi ${service.ikon_layanan}`}></i>
                </div>

                <h4>{service.nama_layanan}</h4>
                <p>{service.deskripsi_layanan}</p>

                {service.link_layanan && service.link_layanan !== "#" && (
                  <a href={service.link_layanan} className="read-more">
                    <span>Selengkapnya</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Siap untuk Memulai Proyek Bersama?</h3>
                  <p>
                    Mari kita diskusikan ide Anda dan ciptakan solusi terbaik
                    yang sesuai dengan kebutuhan Anda.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  <a href="#contact" className="cta-btn">
                    Hubungi Saya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
