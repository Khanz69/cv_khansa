# Database Integration Documentation

## Overview
Website Anda telah berhasil dikonversi dari hardcoded data menjadi dynamic content yang fetched dari MySQL database. Semua data sekarang tersimpan di database dan akan ditampilkan real-time sesuai informasi yang Anda input di database.

---

## Database Structure

Database yang Anda sediakan (`cv_khansacantik`) memiliki 7 tabel:

### 1. **profil** (Profile)
- `user_id`: Primary Key (auto increment)
- `nama`: Nama lengkap
- `deskripsi`: Deskripsi bio
- `pekerjaan`: Pekerjaan/jabatan
- `pendidikan`: Institusi pendidikan
- `lokasi`: Lokasi/alamat
- `email`: Email address
- `telepon`: Nomor telepon
- `ketersediaan`: Status ketersediaan
- `foto_profil_url`: URL foto profil
- `sosial_twitter`, `sosial_facebook`, `sosial_instagram`, `sosial_linkedin`: Social media links

### 2. **pengalaman** (Experience)
- `pengalaman_id`: Primary Key
- `user_id`: Foreign Key ke profil
- `jabatan`: Posisi/job title
- `nama_perusahaan`: Nama perusahaan
- `tahun_mulai`: Tahun mulai bekerja
- `tahun_selesai`: Tahun selesai (null untuk current)
- `deskripsi`: Deskripsi pekerjaan

### 3. **pendidikan** (Education)
- `pendidikan_id`: Primary Key
- `user_id`: Foreign Key ke profil
- `tingkat_gelar`: Level (Bachelor, Master, SMA, etc)
- `nama_gelar`: Nama gelar
- `nama_institusi`: Nama institusi
- `tahun_mulai`: Tahun mulai
- `tahun_selesai`: Tahun selesai
- `deskripsi`: Deskripsi pendidikan

### 4. **sertifikat** (Certificates)
- `sertifikat_id`: Primary Key
- `user_id`: Foreign Key ke profil
- `nama_sertifikasi`: Nama sertifikat
- `tahun`: Tahun mendapat sertifikat

### 5. **layanan** (Services)
- `layanan_id`: Primary Key
- `nama_layanan`: Nama layanan
- `deskripsi_layanan`: Deskripsi layanan
- `ikon_layanan`: Bootstrap icon class (contoh: `bi-palette`)
- `link_layanan`: Link ke detail layanan

### 6. **portfolio** (Portfolio Projects)
- `project_id`: Primary Key
- `nama_proyek`: Nama proyek
- `kategori_proyek`: Kategori (creative, digital, strategy, development)
- `tahun_proyek`: Tahun proyek
- `deskripsi_proyek`: Deskripsi proyek
- `gambar_proyek_url`: URL gambar proyek

### 7. **skills** (Skills)
- `skill_id`: Primary Key
- `user_id`: Foreign Key ke profil
- `nama_keahlian`: Nama skill
- `persen_keahlian`: Persentase keahlian (0-100)

---

## API Routes

Semua data diambil melalui API endpoints yang sudah dibuat:

### Endpoints:
```
GET /api/profil          → Fetch profile data
GET /api/pengalaman      → Fetch experience list
GET /api/pendidikan      → Fetch education list
GET /api/sertifikat      → Fetch certificates
GET /api/layanan         → Fetch services
GET /api/portfolio       → Fetch portfolio projects
GET /api/skills          → Fetch skills
POST /api/contact        → Submit contact form
```

**Lokasi file:** `app/api/{nama-endpoint}/route.ts`

---

## Updated Components

Komponen-komponen berikut telah diupdate untuk fetch data dari database:

### 1. **Hero Component** (`components/Hero.tsx`)
- Fetch nama dari profil
- Tampilkan social media links dari profil
- Masih ada animasi typing dengan hardcoded "Mahasiswa UMMI"

### 2. **Resume Component** (`components/Resume.tsx`)
- Fetch data pengalaman dari tabel `pengalaman`
- Fetch data pendidikan dari tabel `pendidikan`
- Fetch data sertifikat dari tabel `sertifikat`
- Render dinamis berdasarkan data di database

### 3. **Services Component** (`components/Services.tsx`)
- Fetch semua layanan dari tabel `layanan`
- Render dinamis sesuai data di database
- Support icon dan link dari database

### 4. **Portfolio Component** (`components/Portfolio.tsx`)
- Fetch semua proyek dari tabel `portfolio`
- Render dengan kategori filtering
- Tampilkan gambar dari URL yang tersimpan di database

### 5. **About Component** (`components/About.tsx`)
- Fetch profile data
- Tampilkan nama, foto, deskripsi dari database
- Tampilkan social media links

### 6. **Contact Component** (`components/Contact.tsx`)
- Fetch email, telepon, lokasi dari profil
- Tampilkan data kontak dari database

---

## Environment Variables

File `.env.local` sudah dibuat dengan konfigurasi database:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=cv_khansacantik
NODE_ENV=development
```

**Catatan:** Update values sesuai dengan konfigurasi MySQL Anda

---

## Dependencies Installed

```json
"mysql2": "^3.x"
"dotenv": "^16.x"
```

---

## How to Use

### 1. **Setup Database**
Pastikan database `cv_khansacantik` sudah di-import dengan tabel-tabel yang ada.

### 2. **Update Environment Variables**
Edit `.env.local` dengan credentials MySQL Anda:
```env
DB_HOST=localhost         // Host MySQL
DB_PORT=3306             // Port MySQL
DB_USER=root             // Username MySQL
DB_PASSWORD=             // Password MySQL
DB_NAME=cv_khansacantik  // Nama database
```

### 3. **Insert Data into Database**
Masukkan data Anda ke setiap tabel:
- `INSERT INTO profil (nama, email, ...) VALUES (...)`
- `INSERT INTO pengalaman (user_id, jabatan, ...) VALUES (...)`
- dst.

### 4. **Test API Endpoints**
```bash
# Fetch profil
curl http://localhost:3000/api/profil

# Fetch pengalaman
curl http://localhost:3000/api/pengalaman

# dst untuk endpoint lainnya
```

### 5. **Run Development Server**
```bash
npm run dev
```
Akses di `http://localhost:3000`

---

## Key Features

✅ **Real-time Data**: Semua data diambil langsung dari database
✅ **Scalable**: Mudah untuk menambah data tanpa mengubah kode
✅ **Type-safe**: Menggunakan TypeScript interfaces
✅ **Error Handling**: Semua API routes punya error handling
✅ **Dynamic Rendering**: Components render sesuai data yang ada di database

---

## File Structure

```
app/
├── api/
│   ├── contact/
│   │   └── route.ts           (Contact form)
│   ├── layanan/
│   │   └── route.ts           (Services)
│   ├── pendidikan/
│   │   └── route.ts           (Education)
│   ├── pengalaman/
│   │   └── route.ts           (Experience)
│   ├── portfolio/
│   │   └── route.ts           (Portfolio)
│   ├── profil/
│   │   └── route.ts           (Profile)
│   ├── sertifikat/
│   │   └── route.ts           (Certificates)
│   └── skills/
│       └── route.ts           (Skills)
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── About.tsx                  (Updated)
├── Contact.tsx                (Updated)
├── Hero.tsx                   (Updated)
├── Portfolio.tsx              (Updated)
├── Resume.tsx                 (Updated)
├── Services.tsx               (Updated)
├── Header.tsx
├── Footer.tsx
├── ScrollTop.tsx
└── Preloader.tsx

lib/
└── db.ts                      (Database connection)

.env.local                      (Environment variables)
```

---

## Notes

- Database connection menggunakan connection pooling untuk performance
- Semua queries menggunakan parameterized statements untuk security
- Error handling sudah diterapkan di semua API routes
- Komponen menggunakan `useState` dan `useEffect` untuk data fetching
- Loading state ditangani dengan proper loading indicators

---

## Future Improvements

Anda bisa menambahkan:
- Authentication/Login untuk edit data
- Admin panel untuk manage database
- Caching untuk performa lebih baik
- Pagination untuk portfolio/projects list
- Search functionality
- Filter berdasarkan date range, kategori, dll

---

**Status**: ✅ Siap digunakan!

Semua komponen sudah terintegrasi dengan database. Tinggal update credentials MySQL Anda dan masukkan data ke database, website akan langsung menampilkan semua konten secara dynamic.
