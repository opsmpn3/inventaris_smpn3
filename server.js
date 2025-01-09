const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let kirData = [];
let perawatanData = [];
let pengembalianData = [];

// Endpoint untuk input KIR
app.post('/api/kir', (req, res) => {
    const { namaBarang, kondisi } = req.body;
    kirData.push({ namaBarang, kondisi });
    res.status(200).send('Data KIR berhasil ditambahkan');
});

// Endpoint untuk mendapatkan data KIR
app.get('/api/kir', (req, res) => {
    res.json(kirData);
});

// Endpoint untuk input perawatan aset
app.post('/api/perawatan', (req, res) => {
    const { namaBarang, tanggalPerawatan, jenisPerawatan, kondisi, validasiSetuju } = req.body;
    if (!validasiSetuju) {
        return res.status(400).send('Validasi tidak disetujui');
    }
    perawatanData.push({ namaBarang, tanggalPerawatan, jenisPerawatan, kondisi });
    res.status(200).send('Data perawatan aset berhasil ditambahkan');
});

// Endpoint untuk mendapatkan data perawatan aset
app.get('/api/perawatan', (req, res) => {
    res.json(perawatanData);
});

// Endpoint untuk input pengembalian barang
app.post('/api/pengembalian', (req, res) => {
    const { kodeBarang, namaBarang, tanggalPengembalian, kondisiBarang, validasiPengembalian } = req.body;
    pengembalianData.push({ kodeBarang, namaBarang, tanggalPengembalian, kondisiBarang, validasiPengembalian });
    res.status(200).send('Pengembalian barang berhasil diproses!');
});

// Endpoint untuk mendapatkan data pengembalian barang
app.get('/api/pengembalian', (req, res) => {
    res.json(pengembalianData);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
