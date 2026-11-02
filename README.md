# Tugas 3 Pemrograman Web: Katalog Film (Tema B)

Nama: Ladhisya Izyafa Faiqatuzihni
NIM: 42530032

Video penjelasan (YouTube, Public): (https://youtu.be/hom4jHdfKos?si=tGAD-4yp6N6asfZc)

Aplikasi katalog film dengan Express, EJS, dan MySQL. Pengembangan dari Tugas 2: data film yang tadinya array JavaScript sekarang disimpan di MySQL, dengan fitur tambah, edit, dan hapus.

## Fitur
- Daftar film (tabel) dengan filter genre lewat query parameter, contoh `/?genre=horor`
- Halaman detail lewat route parameter, `/item/:id`
- Create, Read, Update, Delete
- Connection pool MySQL (`mysql2`, Promise)
- Seluruh query memakai prepared statements (`?`)
- Pola Post-Redirect-Get di tambah, edit, dan hapus
- Kredensial database di `.env`

## Cara Menjalankan
1. `npm install`
2. Buka MySQL (misalnya Workbench), lalu jalankan `database.sql`
3. Salin `.env.example` menjadi `.env`, lalu isi `DB_PASSWORD`
4. `npm run dev`
5. Buka `http://localhost:3000` (atau sesuai `PORT` di `.env`)

## Rute
| Operasi | Endpoint | Method |
|---|---|---|
| Daftar + filter | `/?genre=...` | GET |
| Detail | `/item/:id` | GET |
| Tambah | `/item/tambah` | GET, POST |
| Edit | `/item/edit/:id` | GET, POST |
| Hapus | `/item/hapus/:id` | POST |