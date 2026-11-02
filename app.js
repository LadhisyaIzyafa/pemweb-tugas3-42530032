const express = require('express');
const path = require('path');
require('dotenv').config();

const db = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

const itemRoutes = require('./routes/item.routes');

// Path view dan folder public dikunci dengan path absolut
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Pembaca data formulir (harus sebelum router)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use('/', itemRoutes);

// Fallback 404
app.use((req, res) => {
  res.status(404).render('pages/notfound', {
    pageTitle: 'Halaman Tidak Ditemukan',
    pesan: 'Halaman yang kamu cari tidak ada.'
  });
});

// Server berjalan setelah koneksi database berhasil
db.query('SELECT 1')
  .then(() => {
    console.log('[DATABASE] Terhubung ke MySQL Pool secara aman.');
    app.listen(PORT, () => console.log(`[SERVER] Aktif di http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('[DATABASE ERROR] Gagal terhubung ke MySQL:', err.message);
  });