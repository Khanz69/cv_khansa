'use client';

export default function Footer() {
  return (
    <footer id="footer" className="footer" suppressHydrationWarning>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Khansa Nisrina</span>
            </a>
            <p>Seorang mahasiswa Teknik Informatika yang passionate tentang teknologi, desain, dan inovasi digital. Siap untuk berkontribusi dan menciptakan solusi terbaik.</p>
            <div className="social-links d-flex mt-4">
              <a href="https://x.com/KhansaNisrina3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.facebook.com/khnzzzz/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/khns6113/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/khansa-nisrina-5aaa55281" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Menu</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Layanan</h4>
            <ul>
              <li><a href="#services">Web Design</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Graphic Design</a></li>
              <li><a href="#services">Video Editing</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Hubungi Saya</h4>
            <p>Sukabumi</p>
            <p>Jawa Barat, Indonesia</p>
            <p className="mt-4">
              <strong>Telepon:</strong> <span>+62 819-4682-4832</span>
            </p>
            <p>
              <strong>Email:</strong> <span>khairanisrina@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Khansa Nisrina</strong>
        </p>
        <div className="credits">
          Dibuat & Dikembangkan dengan cinta oleh <a href="https://www.instagram.com/khns6113/">Khansa Nisrina</a>
        </div>
      </div>
    </footer>
  );
}
