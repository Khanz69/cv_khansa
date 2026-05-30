import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const profil = pgTable("profil", {
  user_id: serial("user_id").primaryKey(),
  nama: text("nama").notNull(),
  quote: text("quote"),
  judul_about: text("judul_about"),
  deskripsi: text("deskripsi"),
  deskripsi_2: text("deskripsi_2"),
  deskripsi_3: text("deskripsi_3"),
  pekerjaan: text("pekerjaan"),
  pendidikan: text("pendidikan"),
  lokasi: text("lokasi"),
  email: text("email"),
  telepon: text("telepon"),
  ketersediaan: text("ketersediaan"),
  foto_profil_url: text("foto_profil_url"),
  sosial_twitter: text("sosial_twitter"),
  sosial_facebook: text("sosial_facebook"),
  sosial_instagram: text("sosial_instagram"),
  sosial_linkedin: text("sosial_linkedin"),
});

export const pengalaman = pgTable("pengalaman", {
  pengalaman_id: serial("pengalaman_id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => profil.user_id),
  jabatan: text("jabatan").notNull(),
  nama_perusahaan: text("nama_perusahaan").notNull(),
  tahun_mulai: integer("tahun_mulai"),
  tahun_selesai: integer("tahun_selesai"),
  deskripsi: text("deskripsi"),
});

export const pendidikan = pgTable("pendidikan", {
  pendidikan_id: serial("pendidikan_id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => profil.user_id),
  tingkat_gelar: text("tingkat_gelar"),
  nama_gelar: text("nama_gelar"),
  nama_institusi: text("nama_institusi").notNull(),
  tahun_mulai: integer("tahun_mulai"),
  tahun_selesai: integer("tahun_selesai"),
  deskripsi: text("deskripsi"),
});

export const sertifikat = pgTable("sertifikat", {
  sertifikat_id: serial("sertifikat_id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => profil.user_id),
  nama_sertifikasi: text("nama_sertifikasi").notNull(),
  tahun: integer("tahun"),
});

export const layanan = pgTable("layanan", {
  layanan_id: serial("layanan_id").primaryKey(),
  nama_layanan: text("nama_layanan").notNull(),
  deskripsi_layanan: text("deskripsi_layanan"),
  ikon_layanan: text("ikon_layanan"),
  link_layanan: text("link_layanan"),
});

export const portfolio = pgTable("portfolio", {
  project_id: serial("project_id").primaryKey(),
  nama_proyek: text("nama_proyek").notNull(),
  kategori_proyek: text("kategori_proyek"),
  tahun_proyek: integer("tahun_proyek"),
  deskripsi_proyek: text("deskripsi_proyek"),
  gambar_proyek_url: text("gambar_proyek_url"),
});

export const skills = pgTable("skills", {
  skill_id: serial("skill_id").primaryKey(),
  user_id: integer("user_id").notNull().references(() => profil.user_id),
  nama_keahlian: text("nama_keahlian").notNull(),
  persen_keahlian: integer("persen_keahlian"),
});
