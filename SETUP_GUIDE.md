# Khansa Nisrina Portfolio Website

Selamat datang! Ini adalah portfolio website profesional yang dibangun menggunakan Next.js framework dan template Craftivo Bootstrap.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Setup dan Instalasi](#setup-dan-instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Customization](#customization)
- [Kontak](#kontak)

## ✨ Fitur Utama

✅ **Hero Section** - Sambutan menarik dengan Spline 3D dan animasi
✅ **About Section** - Profil lengkap dengan statistik dan skill showcase
✅ **Resume Section** - Pengalaman profesional dan pendidikan akademik
✅ **Services Section** - Daftar layanan yang ditawarkan
✅ **Portfolio Section** - Galeri karya dengan filter kategori
✅ **Contact Section** - Form kontak untuk komunikasi
✅ **Responsive Design** - Tampilan sempurna di semua device
✅ **Modern Animations** - AOS (Animate On Scroll) untuk animasi smooth
✅ **Mobile Navigation** - Menu responsif untuk mobile

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **TypeScript**: Untuk type safety
- **CSS Framework**: Bootstrap 5.3.8
- **Animasi**: AOS (Animate On Scroll)
- **Icon**: Bootstrap Icons
- **3D**: Spline Design
- **Gallery**: Isotope & GLightbox
- **Slider**: Swiper

## 📁 Struktur Proyek

```
c:\cv\cv_khansa\
├── app/
│   ├── layout.tsx           # Root layout dengan CSS imports
│   ├── page.tsx             # Halaman utama
│   ├── globals.css          # Global styles (template CSS)
│   ├── page.module.css      # Module styles
│   └── api/
│       └── contact/
│           └── route.ts     # API endpoint untuk form contact
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Resume.tsx           # Resume/Experience section
│   ├── Services.tsx         # Services section
│   ├── Portfolio.tsx        # Portfolio section
│   ├── Contact.tsx          # Contact form section
│   ├── Footer.tsx           # Footer
│   ├── Preloader.tsx        # Loading animation
│   └── ScrollTop.tsx        # Scroll to top button
├── styles/
│   └── template.css         # Template stylesheet imports
├── public/
│   └── assets/
│       ├── css/             # CSS files (main.css)
│       ├── js/              # JavaScript files (main.js)
│       ├── img/             # Gambar dan assets
│       └── vendor/          # Library pihak ketiga
├── Craftivo/                # Template asli (backup)
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Setup dan Instalasi

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Langkah Instalasi

1. **Clone atau pergi ke direktori proyek**
   ```bash
   cd c:\cv\cv_khansa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verifikasi struktur assets**
   Pastikan semua assets dari template ada di `public/assets/`:
   - CSS files di `public/assets/css/`
   - JavaScript files di `public/assets/js/`
   - Images di `public/assets/img/`
   - Vendor libraries di `public/assets/vendor/`

## 🎯 Menjalankan Aplikasi

### Development Mode
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000`

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## ⚙️ Customization

### Mengubah Informasi Personal

**1. Header & Branding**
Edit `components/Header.tsx`:
```tsx
<h1 className="sitename">Khansa Nisrina</h1>
```

**2. Hero Section**
Edit `components/Hero.tsx`:
```tsx
<h2>Halo, Saya Khansa Nisrina</h2>
<p>Saya adalah <span className="typed" data-typed-items="Mahasiswa UMMI"></span></p>
```

**3. About Section**
Edit `components/About.tsx` untuk mengubah:
- Foto profil: `src="/assets/img/profile/bubub.jpg"`
- Nama dan role
- Deskripsi bio
- Skills dan percentages

**4. Resume Section**
Edit `components/Resume.tsx` untuk menambah/mengubah:
- Experience cards
- Education timeline
- Certifications

**5. Services Section**
Edit `components/Services.tsx` untuk mengubah layanan

**6. Portfolio Section**
Edit `components/Portfolio.tsx` untuk update:
- Portfolio items
- Kategori filter
- Images

**7. Contact Information**
Edit `components/Contact.tsx` dan `components/Footer.tsx`:
- Email: khairanisrina@gmail.com
- Phone: +62 819-4682-4832
- Alamat: Sukabumi, Jawa Barat

### Mengubah Warna & Styling

Edit `app/globals.css` untuk mengubah color scheme:
```css
:root {
  --accent-color: #7f9e74;      /* Warna highlight */
  --heading-color: #ededed;     /* Warna heading */
  --surface-color: #1c1c1c;     /* Warna background card */
  --default-color: #ffffff;     /* Warna text default */
}
```

### Menambahkan Gambar

1. Letakkan gambar di `public/assets/img/`
2. Reference di components: `/assets/img/nama-file.jpg`

### Social Media Links

Update di `components/Hero.tsx`, `components/About.tsx`, dan `components/Footer.tsx`:
```tsx
<a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-twitter-x"></i>
</a>
```

## 📞 Kontak

**Email**: khairanisrina@gmail.com
**Telepon**: +62 819-4682-4832
**Alamat**: Sukabumi, Jawa Barat, Indonesia

**Social Media**:
- Twitter: https://x.com/KhansaNisrina3
- Instagram: https://www.instagram.com/khns6113/
- Facebook: https://www.facebook.com/khnzzzz/
- LinkedIn: https://www.linkedin.com/in/khansa-nisrina-5aaa55281

## 📝 Notes

- Semua sectionmenggunakan AOS untuk animasi smooth
- Responsive design menggunakan Bootstrap grid system
- Portfolio menggunakan Isotope untuk filter dan layout
- GLightbox untuk image gallery
- Swiper untuk slider

## 🎨 Kredit

- **Template Original**: Craftivo Bootstrap Template (BootstrapMade)
- **Framework**: Next.js
- **Icons**: Bootstrap Icons
- **Animasi**: AOS - Animate On Scroll

---

**Dibuat dengan ❤️ oleh Khansa Nisrina**
