'use client';

import { useEffect, useState } from 'react';

interface Profile {
  lokasi?: string;
  telepon?: string;
  email?: string;
}

export default function Contact() {
  const [profile, setProfile] = useState<Profile>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/profil');
      const data = await res.json();
      setProfile(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-aos="fade-up" className="contact section" suppressHydrationWarning>
      <div className="container section-title" data-aos="fade-up" data-aos-delay="100">
        <span className="subtitle">Contact</span>
        <h2>Hubungi Saya</h2>
        <p>Mari terhubung dan diskusikan tentang proyek atau peluang kolaborasi berikutnya</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            {profile.lokasi && (
              <div className="info-item">
                <div className="icon-wrapper">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h3>Alamat</h3>
                  <p>{profile.lokasi}</p>
                </div>
              </div>
            )}

            {profile.telepon && (
              <div className="info-item">
                <div className="icon-wrapper">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h3>Telepon</h3>
                  <p>{profile.telepon}</p>
                </div>
              </div>
            )}

            {profile.email && (
              <div className="info-item">
                <div className="icon-wrapper">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>{profile.email}</p>
                </div>
              </div>
            )}
          </div>

          <div className="col-lg-8">
            <form action="/api/contact" method="POST" className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Nama Anda" required />
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Email Anda" required />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subjek" required />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows={6} placeholder="Pesan" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Pesan Anda telah terkirim. Terima kasih!</div>

                  <button type="submit">Kirim Pesan</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
