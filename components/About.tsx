"use client";

import { useEffect, useState } from "react";

interface Profile {
  user_id: number;
  nama: string;
  quote?: string;
  judul_about?: string;
  deskripsi?: string;
  deskripsi_2?: string;
  deskripsi_3?: string;
  pekerjaan?: string;
  pendidikan?: string;
  lokasi?: string;
  email?: string;
  telepon?: string;
  ketersediaan?: string;
  foto_profil_url?: string;
  sosial_twitter?: string;
  sosial_facebook?: string;
  sosial_instagram?: string;
  sosial_linkedin?: string;
}

interface Skill {
  skill_id: number;
  user_id: number;
  nama_keahlian: string;
  persen_keahlian: number;
}

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profilRes, skillsRes] = await Promise.all([
          fetch("/api/profil"),
          fetch("/api/skills"),
        ]);

        const profilJson = await profilRes.json();
        const skillsJson = await skillsRes.json();

        let profilData: Profile | null = null;
        if (Array.isArray(profilJson)) {
          profilData = profilJson.length > 0 ? profilJson[0] : null;
        } else {
          profilData = profilJson;
        }

        setProfile(profilData || null);
        setSkills(Array.isArray(skillsJson) ? skillsJson : []);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching about data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="about" data-aos="fade-right" className="about section">
        <div className="container section-title">
          <span className="subtitle">Tentang Saya</span>
          <h2>Tentang Saya</h2>
          <p>Sedang memuat data profil...</p>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section id="about" data-aos="fade-up" className="about section">
        <div className="container section-title">
          <span className="subtitle">Tentang Saya</span>
          <h2>Tentang Saya</h2>
          <p>
            Data profil belum tersedia. Tambahkan minimal satu baris di tabel{" "}
            <code>profil</code> untuk menampilkan bagian ini.
          </p>
        </div>
      </section>
    );
  }

  const pekerjaan = profile.pekerjaan || "-";
  const pendidikan = profile.pendidikan || "-";
  const lokasi = profile.lokasi || "-";
  const email = profile.email || "-";
  const telepon = profile.telepon || "-";
  const ketersediaan = profile.ketersediaan || "-";

  // Semua paragraf bio dari DB
  const paragraphs = [
    profile.deskripsi,
    profile.deskripsi_2,
    profile.deskripsi_3,
  ].filter(Boolean) as string[];

  return (
    <section id="about" data-aos="fade-up" className="about section">
      {/* Judul section */}
      <div className="container section-title" data-aos="fade-up" data-aos-delay="100">
        <span className="subtitle">Tentang Saya</span>
        <h2>Tentang Saya</h2>
        {profile.quote && <p>{profile.quote}</p>}
      </div>

      <div className="container">
        <div className="row gy-5">
          {/* Kartu profil kiri */}
          <div className="col-lg-4">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <img
                    src={
                      profile.foto_profil_url || "/assets/img/profile/bubub.jpg"
                    }
                    className="img-fluid"
                    alt={profile.nama}
                  />
                  <div className="status-indicator"></div>
                </div>
                <h3>{profile.nama}</h3>
                <span className="role">{pekerjaan}</span>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <h4>20+</h4>
                  <p>Karya</p>
                </div>
                <div className="stat-item">
                  <h4>22</h4>
                  <p>Tahun</p>
                </div>
                <div className="stat-item">
                  <h4>5+</h4>
                  <p>Kompetisi bersertifikat</p>
                </div>
              </div>

              <div className="profile-actions">
                <a href="#" className="btn-primary">
                  <i className="bi bi-download"></i> Download CV
                </a>
                <a href="#contact" className="btn-secondary">
                  <i className="bi bi-envelope"></i> Contact
                </a>
              </div>

              <div className="social-connect">
                {profile.sosial_twitter && (
                  <a
                    href={profile.sosial_twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                )}
                {profile.sosial_facebook && (
                  <a
                    href={profile.sosial_facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                )}
                {profile.sosial_instagram && (
                  <a
                    href={profile.sosial_instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                )}
                {profile.sosial_linkedin && (
                  <a
                    href={profile.sosial_linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Konten kanan */}
          <div className="col-lg-8">
            <div className="content-wrapper">
              <div className="bio-section">
                <div className="section-tag">About Me</div>
                <h2>{profile.judul_about || "Tentang Saya"}</h2>

                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Detail grid */}
              <div className="details-grid">
                <div className="detail-item">
                  <i className="bi bi-briefcase"></i>
                  <div className="detail-content">
                    <span>Pekerjaan</span>
                    <strong>{pekerjaan}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-mortarboard"></i>
                  <div className="detail-content">
                    <span>Pendidikan</span>
                    <strong>{pendidikan}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-geo-alt"></i>
                  <div className="detail-content">
                    <span>Domisili</span>
                    <strong>{lokasi}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-envelope"></i>
                  <div className="detail-content">
                    <span>Email</span>
                    <strong>{email}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-phone"></i>
                  <div className="detail-content">
                    <span>Phone</span>
                    <strong>{telepon}</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-calendar-check"></i>
                  <div className="detail-content">
                    <span>Availability</span>
                    <strong>{ketersediaan}</strong>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="skills-showcase">
                <div className="section-tag">Statistik Kemampuan</div>
                <h3>Kemampuan Teknis</h3>

                <div className="skills-list skills-animation">
                  {skills.length === 0 && (
                    <p className="text-muted">
                      Belum ada data skills. Tambahkan data pada tabel{" "}
                      <code>skills</code>.
                    </p>
                  )}

                  {skills.map((skill) => (
                    <div key={skill.skill_id} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">
                          {skill.nama_keahlian}
                        </span>
                        <span className="skill-percent">
                          {skill.persen_keahlian}%
                        </span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${skill.persen_keahlian}%` }}
                          aria-valuenow={skill.persen_keahlian}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
