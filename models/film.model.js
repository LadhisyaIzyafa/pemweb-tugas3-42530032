const db = require('../config/database');

const FilmModel = {
  // Semua film, atau hanya satu genre jika genre diisi
  getAll: async (genre) => {
    if (genre) {
      const [rows] = await db.execute('SELECT * FROM film WHERE genre = ? ORDER BY id ASC', [genre]);
      return rows;
    }
    const [rows] = await db.execute('SELECT * FROM film ORDER BY id ASC');
    return rows;
  },

  // Daftar genre unik untuk tombol filter
  getGenreUnik: async () => {
    const [rows] = await db.execute('SELECT DISTINCT genre FROM film ORDER BY genre');
    return rows.map((r) => r.genre);
  },

  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM film WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (data) => {
    const sql = 'INSERT INTO film (judul, sutradara, tahun, genre, poster, sinopsis) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await db.execute(sql, [
      data.judul, data.sutradara, data.tahun, data.genre, data.poster || null, data.sinopsis
    ]);
    return result;
  },

  update: async (id, data) => {
    const sql = 'UPDATE film SET judul = ?, sutradara = ?, tahun = ?, genre = ?, poster = ?, sinopsis = ? WHERE id = ?';
    const [result] = await db.execute(sql, [
      data.judul, data.sutradara, data.tahun, data.genre, data.poster || null, data.sinopsis, id
    ]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM film WHERE id = ?', [id]);
    return result;
  }
};

module.exports = FilmModel;