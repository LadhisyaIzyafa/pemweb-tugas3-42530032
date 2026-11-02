const FilmModel = require('../models/film.model');

// Halaman daftar + filter lewat query parameter (?genre=horor)
exports.getDaftar = async (req, res) => {
  try {
    const genreDipilih = typeof req.query.genre === 'string' ? req.query.genre : ''; // req.query
    const films = await FilmModel.getAll(genreDipilih);
    const daftarGenre = await FilmModel.getGenreUnik();

    res.render('pages/katalog', {
      pageTitle: "Disha's Cozy Corner",
      films: films,
      daftarGenre: daftarGenre,
      genreDipilih: genreDipilih
    });
  } catch (error) {
    console.error('[ERROR getDaftar]:', error);
    res.status(500).send('Terjadi galat saat mengambil data film.');
  }
};

// Halaman detail lewat route parameter (/item/:id)
exports.getDetail = async (req, res) => {
  try {
    const id = Number(req.params.id); // req.params
    const film = Number.isInteger(id) ? await FilmModel.getById(id) : undefined;

    if (!film) {
      return res.status(404).render('pages/notfound', {
        pageTitle: 'Data Tidak Ditemukan',
        pesan: 'Film dengan ID tersebut tidak ditemukan.'
      });
    }

    res.render('pages/detail', { pageTitle: film.judul, film: film });
  } catch (error) {
    console.error('[ERROR getDetail]:', error);
    res.status(500).send('Terjadi galat saat mengambil detail film.');
  }
};

// CREATE
exports.getFormTambah = (req, res) => {
  res.render('pages/form', {
    pageTitle: 'Tambah Film',
    judulForm: 'Tambah Film',
    action: '/item/tambah',
    tombol: 'Simpan',
    film: { judul: '', sutradara: '', tahun: '', genre: '', poster: '', sinopsis: '' }
  });
};

exports.postTambah = async (req, res) => {
  try {
    const { judul, sutradara, tahun, genre, poster, sinopsis } = req.body;

    if (!judul || !sutradara || !tahun || !genre || !sinopsis) {
      return res.status(400).send('Judul, sutradara, tahun, genre, dan sinopsis wajib diisi.');
    }

    await FilmModel.create({ judul, sutradara, tahun, genre, poster, sinopsis });
    console.log(`[DATABASE] Film "${judul}" berhasil ditambahkan.`);
    res.redirect('/'); // Post-Redirect-Get
  } catch (error) {
    console.error('[ERROR postTambah]:', error);
    res.status(500).send('Gagal menyimpan film.');
  }
};

// UPDATE
exports.getFormEdit = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const film = Number.isInteger(id) ? await FilmModel.getById(id) : undefined;

    if (!film) {
      return res.status(404).render('pages/notfound', {
        pageTitle: 'Data Tidak Ditemukan',
        pesan: 'Film dengan ID tersebut tidak ditemukan.'
      });
    }

    res.render('pages/form', {
      pageTitle: 'Edit Film',
      judulForm: 'Edit Film',
      action: `/item/edit/${film.id}`,
      tombol: 'Simpan Perubahan',
      film: film // data lama mengisi formulir
    });
  } catch (error) {
    console.error('[ERROR getFormEdit]:', error);
    res.status(500).send('Terjadi galat saat memuat formulir edit.');
  }
};

exports.postEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { judul, sutradara, tahun, genre, poster, sinopsis } = req.body;

    if (!judul || !sutradara || !tahun || !genre || !sinopsis) {
      return res.status(400).send('Judul, sutradara, tahun, genre, dan sinopsis wajib diisi.');
    }

    await FilmModel.update(id, { judul, sutradara, tahun, genre, poster, sinopsis });
    console.log(`[DATABASE] Film ID ${id} berhasil diperbarui.`);
    res.redirect('/');
  } catch (error) {
    console.error('[ERROR postEdit]:', error);
    res.status(500).send('Gagal memperbarui film.');
  }
};

// DELETE
exports.postHapus = async (req, res) => {
  try {
    const { id } = req.params;
    await FilmModel.delete(id);
    console.log(`[DATABASE] Film ID ${id} berhasil dihapus.`);
    res.redirect('/');
  } catch (error) {
    console.error('[ERROR postHapus]:', error);
    res.status(500).send('Gagal menghapus film.');
  }
};