const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.get('/', itemController.getDaftar);

// Rute /item/tambah harus sebelum /item/:id
router.get('/item/tambah', itemController.getFormTambah);
router.post('/item/tambah', itemController.postTambah);

router.get('/item/edit/:id', itemController.getFormEdit);
router.post('/item/edit/:id', itemController.postEdit);

router.post('/item/hapus/:id', itemController.postHapus);

router.get('/item/:id', itemController.getDetail);

module.exports = router;