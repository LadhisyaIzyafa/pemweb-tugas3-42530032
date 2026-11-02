CREATE DATABASE IF NOT EXISTS db_watchlist_film;
USE db_watchlist_film;

DROP TABLE IF EXISTS film;

CREATE TABLE film (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  judul     VARCHAR(150) NOT NULL,
  sutradara VARCHAR(100) NOT NULL,
  tahun     INT NOT NULL,
       genre     ENUM('drama sejarah','thriller','horor','romansa','aksi','komedi','fiksi ilmiah','animasi') NOT NULL,
  poster    VARCHAR(100) NULL,
  sinopsis  TEXT NOT NULL
);

INSERT INTO film (judul, sutradara, tahun, genre, poster, sinopsis) VALUES
('Oppenheimer', 'Christopher Nolan', 2023, 'drama sejarah', 'oppenheimer.jpg', 'Film ini mengikuti J. Robert Oppenheimer, fisikawan jenius yang dipercaya memimpin Proyek Manhattan, yaitu upaya Amerika Serikat membuat bom atom pada masa Perang Dunia II. Setelah bom itu berhasil dibuat dan digunakan, Oppenheimer dihantui rasa bersalah dan justru diadili secara politik karena sikapnya terhadap senjata nuklir.'),
('Fallen Angels', 'Wong Kar-wai', 1995, 'thriller', 'fallen-angels.jpg', 'Di sebuah Hong Kong yang gemerlap dan sepi pada malam hari, seorang pembunuh bayaran mulai lelah dengan pekerjaannya, sementara partnernya diam-diam menyimpan perasaan kepadanya. Di sisi lain kota, seorang pria bisu yang gemar membuat onar dengan caranya sendiri bertemu orang-orang kesepian yang hidupnya saling bersinggungan tanpa pernah benar-benar terhubung.'),
('Exhuma', 'Jang Jae-hyun', 2024, 'horor', 'exhuma.jpg', 'Seorang dukun muda dan rekannya dipanggil oleh keluarga kaya yang dilanda kemalangan turun-temurun. Bersama seorang ahli feng shui dan seorang petugas pemakaman, mereka diminta memindahkan makam leluhur keluarga itu. Namun pembongkaran makam tersebut justru membangkitkan sesuatu yang telah lama dikubur, dan mereka mulai menyadari bahwa masalahnya jauh lebih gelap dari dugaan awal.'),
('Sore: Istri dari masa depan', 'Yandy Laurens', 2025, 'romansa', 'sore.jpg', 'Jonathan, seorang pria yang hidup berantakan, tiba-tiba didatangi seorang perempuan yang mengaku sebagai istrinya dari masa depan. Perempuan itu, Sore, muncul berulang kali untuk mengubah kebiasaan buruk Jonathan satu per satu, demi mencegah nasib tragis yang menantinya. Seiring waktu, hubungan mereka tumbuh dan terungkap alasan sebenarnya di balik kedatangan Sore.'),
('The Conjuring 2', 'James Wan', 2016, 'horor', 'the-conjuring-2.jpg', 'Pasangan penyelidik paranormal Ed dan Lorraine Warren diminta pergi ke Inggris untuk membantu seorang ibu tunggal dan anak-anaknya yang rumahnya terus diganggu kekuatan jahat. Di tengah keraguan banyak orang apakah kejadian itu nyata, para Warren harus berhadapan dengan roh yang jauh lebih berbahaya dan mengancam keselamatan keluarga itu serta mereka sendiri.'),
('20th Century Girl', 'Bang Woo-ri', 2022, 'romansa', '20th-century-girl.jpg', 'Pada tahun 1999, Bo-ra, siswi SMA yang ceria, diminta sahabatnya yang harus pergi untuk menjalani operasi jantung agar mengawasi cowok yang disukai sahabatnya itu. Dalam menjalankan tugas tersebut, Bo-ra justru dekat dengan sahabat si cowok dan perlahan mengalami cinta pertama yang manis sekaligus membingungkan, penuh kenangan khas masa remaja akhir 90-an.');