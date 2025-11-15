"use client";

import { useEffect, useState } from "react";

interface Experience {
  pengalaman_id: number;
  jabatan: string;
  nama_perusahaan: string;
  tahun_mulai: number;
  tahun_selesai: number | null;
  deskripsi: string;
}

interface Education {
  pendidikan_id: number;
  tingkat_gelar: string;
  nama_gelar: string;
  nama_institusi: string;
  tahun_mulai: number;
  tahun_selesai: number | null;
  deskripsi: string;
}

interface Certificate {
  sertifikat_id: number;
  nama_sertifikasi: string;
  tahun: number;
}

export default function Resume() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  // --- NORMALISASI DATA API ---
  const normalize = (data: any): any[] => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.data)) return data.data;

    // Jika API balikin 1 object → jadikan array
    return [data];
  };

  const fetchData = async () => {
    try {
      const [exp, edu, cert] = await Promise.all([
        fetch("/api/pengalaman").then((r) => r.json()),
        fetch("/api/pendidikan").then((r) => r.json()),
        fetch("/api/sertifikat").then((r) => r.json()),
      ]);

      setExperiences(normalize(exp));
      setEducations(normalize(edu));
      setCertificates(normalize(cert));

      setLoading(false);
    } catch (err) {
      console.error("Error Resume:", err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="resume" data-aos="fade-up" className="resume section">
        <div className="container section-title">
          <h2>Resume</h2>
          <p>Sedang memuat data resume...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="resume" data-aos="fade-up" className="resume section">
      <div className="container section-title">
        <h2>Resume</h2>
        <p>
          Pengalaman profesional dan pendidikan akademik saya mencerminkan
          dedikasi terhadap inovasi dan keunggulan.
        </p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {/* EXPERIENCE */}
          <div className="col-lg-6">
            <div className="experience-section">
              <div className="section-header">
                <span className="section-badge">Experience</span>
                <h2>Professional Journey</h2>
              </div>

              <div className="experience-cards">
                {experiences.length === 0 && (
                <p>Belum ada data pengalaman.</p>
                )}

                {experiences.map((exp, i) => (
                  <div key={exp.pengalaman_id} data-aos="fade-up" data-aos-delay={`${i * 80}`} className="exp-card">
                    <div className="card-header">
                      <div className="company-logo">
                        <i className="bi bi-buildings"></i>
                      </div>
                      {exp.tahun_selesai === null && (
                        <div className="period-badge">Current</div>
                      )}
                    </div>
                    <div className="card-body">
                      <h3>{exp.jabatan}</h3>
                      <p className="company-name">{exp.nama_perusahaan}</p>
                      <span className="duration">
                        {exp.tahun_mulai} - {exp.tahun_selesai ?? "Present"}
                      </span>
                      <p className="description">{exp.deskripsi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EDUCATION & CERTIFICATE */}
          <div className="col-lg-6">
            <div className="education-section">
              <div className="section-header">
                <span className="section-badge">Education</span>
                <h2>Academic Background</h2>
              </div>

              <div className="education-timeline">
                <div className="timeline-track">
                  {educations.length === 0 && certificates.length === 0 && (
                    <p>Belum ada data pendidikan & sertifikat.</p>
                  )}

                  {educations.map((edu, idx) => (
                    <div key={edu.pendidikan_id} data-aos="fade-up" data-aos-delay={`${idx * 80}`} className="timeline-item">
                      <div className="timeline-marker">
                        <i className="bi bi-mortarboard-fill"></i>
                      </div>
                      <div className="timeline-content">
                        <div className="education-meta">
                          <span>
                            {edu.tahun_mulai} - {edu.tahun_selesai ?? "Present"}
                          </span>
                          <span className="degree-level">
                            {edu.tingkat_gelar}
                          </span>
                        </div>
                        <h4>{edu.nama_gelar}</h4>
                        <p className="institution">{edu.nama_institusi}</p>
                        <p className="description">{edu.deskripsi}</p>
                      </div>
                    </div>
                  ))}

                  {/* CERTIFIKAT */}
                  {certificates.length > 0 && (
                    <div className="timeline-item">
                      <div className="timeline-marker">
                        <i className="bi bi-patch-check-fill"></i>
                      </div>
                      <div className="timeline-content">
                        <h4>Professional Certifications</h4>
                        <div className="certifications-list">
                          {certificates.map((c) => (
                            <div key={c.sertifikat_id} className="cert-item">
                              <span>{c.nama_sertifikasi}</span>
                              <span>{c.tahun}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
