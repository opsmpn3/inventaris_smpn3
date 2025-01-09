document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');

    const menuItems = [
        {
            id: 'kir',
            title: 'KIR',
            icon: 'fas fa-clipboard-list',
        },
        {
            id: 'perawatan',
            title: 'Perawatan Aset',
            icon: 'fas fa-tools',
        },
        {
            id: 'informasi',
            title: 'Informasi',
            icon: 'fas fa-info-circle',
        },
        {
            id: 'pinjamkembali', // Gabungan Peminjaman & Pengembalian
            title: 'Peminjaman & Pengembalian',
            icon: 'fas fa-exchange-alt',
        }
    ];

    menuItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-4 mb-3';

        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => showPage(item.id);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center';

        const icon = document.createElement('i');
        icon.className = item.icon;

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = item.title;

        cardBody.appendChild(icon);
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        col.appendChild(card);
        menu.appendChild(col);
    });
});

function showPage(page) {
    const contentModalLabel = document.getElementById('contentModalLabel');
    const content = document.getElementById('content');
    let html = '';

    if (page === 'kir') {
        contentModalLabel.textContent = 'Kartu Inventaris Ruangan';
        html = `
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary" onclick="showInputKIR()">Input KIR</button>
                <button class="btn btn-secondary" onclick="showLihatKIR()">Lihat KIR</button>
            </div>
            <div id="kir-content" class="mt-3"></div>
        `;
    } else if (page === 'perawatan') {
        contentModalLabel.textContent = 'Perawatan Aset';
        html = `
            <h2 class="animate__animated animate__fadeIn">Perawatan Aset</h2>
            <form id="perawatanForm">
                <div class="form-group">
                    <label for="namaBarang">Nama Barang</label>
                    <input type="text" class="form-control" id="namaBarang" placeholder="Masukkan nama barang">
                </div>
                <div class="form-group">
                    <label for="tanggalPerawatan">Hari/Tanggal</label>
                    <input type="date" class="form-control" id="tanggalPerawatan">
                </div>
                <div class="form-group">
                    <label for="jenisPerawatan">Perawatan/Perbaikan</label>
                    <input type="text" class="form-control" id="jenisPerawatan" placeholder="Masukkan jenis perawatan">
                </div>
                <div class="form-group">
                    <label for="kondisiBarang">Kondisi</label>
                    <input type="text" class="form-control" id="kondisiBarang" placeholder="Masukkan kondisi barang">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="validasiSetuju">
                    <label class="form-check-label" for="validasiSetuju">Validasi Setuju</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        `;
    } else if (page === 'informasi') {
        contentModalLabel.textContent = 'Informasi';
        html = `
            <h2 class="animate__animated animate__fadeIn">Informasi</h2>
            <p>Kartu Inventaris Ruangan (KIR) adalah daftar inventaris barang yang ada di setiap ruangan. Perawatan aset mencakup kegiatan untuk menjaga kondisi barang agar tetap baik dan dapat digunakan dengan optimal.</p>
        `;
    } else if (page === 'pinjamkembali') {
        contentModalLabel.textContent = 'Peminjaman & Pengembalian Barang';
        html = `
            <h2 class="animate__animated animate__fadeIn">Peminjaman & Pengembalian Barang</h2>
            <div class="d-flex justify-content-around mt-3">
                <button class="btn btn-primary" onclick="showLoginForm('peminjaman')">Login Peminjaman</button>
                <button class="btn btn-secondary" onclick="showLoginForm('pengembalian')">Login Pengembalian</button>
            </div>
        `;
    }

    content.innerHTML = html;
    $('#contentModal').modal('show');
}
function showInputKIR() {
    const kirContent = document.getElementById('kir-content');
    kirContent.innerHTML = `
        <h2 class="animate__animated animate__fadeIn">Input KIR</h2>
        <form id="kirForm">
            <div class="form-group">
                <label for="kodeBarangKIR">Kode Barang</label>
                <input type="text" class="form-control" id="kodeBarangKIR" placeholder="Masukkan kode barang">
            </div>
            <div class="form-group">
                <label for="namaBarangKIR">Nama Barang</label>
                <input type="text" class="form-control" id="namaBarangKIR" placeholder="Masukkan nama barang">
            </div>
            <div class="form-group">
                <label for="bahanKIR">Bahan</label>
                <input type="text" class="form-control" id="bahanKIR" placeholder="Masukkan bahan barang">
            </div>
            <div class="form-group">
                <label for="merekKIR">Merek</label>
                <input type="text" class="form-control" id="merekKIR" placeholder="Masukkan merek barang">
            </div>
            <div class="form-group">
                <label for="tipeKIR">Tipe</label>
                <input type="text" class="form-control" id="tipeKIR" placeholder="Masukkan tipe barang">
            </div>
            <div class="form-group">
                <label for="noChasisKIR">No. Chasis/Rangka</label>
                <input type="text" class="form-control" id="noChasisKIR" placeholder="Masukkan nomor chasis/rangka">
            </div>
            <div class="form-group">
                <label for="noMesinKIR">No. Mesin/Pabrik</label>
                <input type="text" class="form-control" id="noMesinKIR" placeholder="Masukkan nomor mesin/pabrik">
            </div>
            <div class="form-group">
                <label for="noPolisiKIR">No. Polisi</label>
                <input type="text" class="form-control" id="noPolisiKIR" placeholder="Masukkan nomor polisi">
            </div>
            <div class="form-group">
                <label for="noBPKBKIR">No. BPKB</label>
                <input type="text" class="form-control" id="noBPKBKIR" placeholder="Masukkan nomor BPKB">
            </div>
            <div class="form-group">
                <label for="totalHargaKIR">Total Harga</label>
                <input type="number" class="form-control" id="totalHargaKIR" placeholder="Masukkan total harga">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;

    document.getElementById('kirForm').addEventListener('submit', handleKIRSubmit);
}

function handleKIRSubmit(event) {
    event.preventDefault();

    const kodeBarang = document.getElementById('kodeBarangKIR').value;
    const namaBarang = document.getElementById('namaBarangKIR').value;
    const bahan = document.getElementById('bahanKIR').value;
    const merek = document.getElementById('merekKIR').value;
    const tipe = document.getElementById('tipeKIR').value;
    const noChasis = document.getElementById('noChasisKIR').value;
    const noMesin = document.getElementById('noMesinKIR').value;
    const noPolisi = document.getElementById('noPolisiKIR').value;
    const noBPKB = document.getElementById('noBPKBKIR').value;
    const totalHarga = document.getElementById('totalHargaKIR').value;

    fetch('http://localhost:3000/api/kir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ kodeBarang, namaBarang, bahan, merek, tipe, noChasis, noMesin, noPolisi, noBPKB, totalHarga }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('kirForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handlePerawatanSubmit(event) {
    event.preventDefault();

    const namaBarang = document.getElementById('namaBarang').value;
    const tanggalPerawatan = document.getElementById('tanggalPerawatan').value;
    const jenisPerawatan = document.getElementById('jenisPerawatan').value;
    const kondisi = document.getElementById('kondisiBarang').value;
    const validasiSetuju = document.getElementById('validasiSetuju').checked;

    fetch('http://localhost:3000/api/perawatan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ namaBarang, tanggalPerawatan, jenisPerawatan, kondisi, validasiSetuju }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('perawatanForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function fetchInventory() {
    fetch('http://localhost:3000/api/kir')
        .then(response => response.json())
        .then(data => {
            const kirList = document.getElementById('kir-list');
            kirList.innerHTML = '<ul class="list-group">' + data.map(item => `<li class="list-group-item">${item.namaBarang} - ${item.kondisi}</li>`).join('') + '</ul>';
        })
        .catch(error => {
            console.error('Error fetching inventory:', error);
        });
}
function showLoginForm(type) {
    const content = document.getElementById('content');
    const loginTitle = type === 'peminjaman' ? 'Login Peminjaman Barang' : 'Login Pengembalian Barang';

    content.innerHTML = `
        <h2>${loginTitle}</h2>
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Masukkan Username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Masukkan Password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    `;

    document.getElementById('loginForm').addEventListener('submit', event => handleLoginSubmit(event, type));
}


function handleLoginSubmit(event, type) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cari pengguna berdasarkan username dan password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert(`Login berhasil! Selamat datang, ${user.nama}.`);
        showForm(type); // Tampilkan formulir Peminjaman atau Pengembalian
    } else {
        alert('Username atau Password salah!');
    }
}


function showForm(type) {
    const content = document.getElementById('content');
    const formTitle = type === 'peminjaman' ? 'Formulir Peminjaman Barang' : 'Formulir Pengembalian Barang';

    content.innerHTML = `
        <h2>${formTitle}</h2>
        <form id="${type}Form">
            <div class="form-group">
                <label for="nama">Nama</label>
                <input type="text" class="form-control" id="nama" placeholder="Masukkan Nama" required>
            </div>
            <div class="form-group">
                <label for="barang">Nama Barang</label>
                <input type="text" class="form-control" id="barang" placeholder="Masukkan Nama Barang" required>
            </div>
            <div class="form-group">
                <label for="jumlah">Jumlah Barang</label>
                <input type="number" class="form-control" id="jumlah" placeholder="Masukkan Jumlah Barang" required>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="setuju">
                <label class="form-check-label" for="setuju">Saya setuju dengan ketentuan</label>
            </div>
            <button type="submit" class="btn btn-primary">${type === 'peminjaman' ? 'Pinjam Barang' : 'Kembalikan Barang'}</button>
        </form>
    `;

    document.getElementById(`${type}Form`).addEventListener('submit', event => handleSubmit(event, type));
}

function handleSubmit(event, type) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const barang = document.getElementById('barang').value;
    const jumlah = document.getElementById('jumlah').value;
    const setuju = document.getElementById('setuju').checked;

    if (!setuju) {
        alert('Anda harus menyetujui ketentuan!');
        return;
    }

    const endpoint = type === 'peminjaman' ? '/api/peminjaman' : '/api/pengembalian';

    fetch(`http://localhost:3000${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, barang, jumlah }),
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
            document.getElementById(`${type}Form`).reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan, silakan coba lagi.');
        });
}


//DATABASE LOGIN

const users = [
    { nama: "Irwanto Sumantri", username: "134026", password: "123456" },
    { nama: "Sulaeman", username: "156434", password: "123456" },
    { nama: "Dwi Desi Rima Irani", username: "139150", password: "123456" },
    { nama: "Herru Tri Handaka", username: "139160", password: "123456" },
    { nama: "Atin Supryatin", username: "139152", password: "123456" },
    { nama: "Yenidar", username: "139736", password: "123456" },
    { nama: "Retnowati", username: "173098", password: "123456" },
    { nama: "Yani Samsuwati", username: "170444", password: "123456" },
    { nama: "Tunggul Hutagaol", username: "192231", password: "123456" },
    { nama: "Suhanah", username: "192194", password: "123456" },
    { nama: "Nina Komala Sari", username: "193779", password: "123456" },
    { nama: "Maryatun", username: "167744", password: "123456" },
    { nama: "Magda Ctellah Matindas", username: "191243", password: "123456" },
    { nama: "Sukarno", username: "193267", password: "123456" },
    { nama: "Kusmiyati", username: "193607", password: "123456" },
    { nama: "Muthoharoh", username: "184963", password: "123456" },
    { nama: "Mariam Giselle Andrea Luciano", username: "195879", password: "123456" },
    { nama: "Septia Saraswati", username: "199966", password: "123456" },
    { nama: "Ina Musdalifa", username: "208312", password: "123456" },
    { nama: "Dewi Komalasari", username: "208839", password: "123456" },
    { nama: "Purnakarta", username: "210741", password: "123456" },
    { nama: "Rahmad Hafido Prayoga", username: "154342", password: "123456" },
    { nama: "Khonsa Tsabita Baityhaq", username: "206299", password: "123456" },
    { nama: "Hanny Sugiharyani", username: "207284", password: "123456" },
    { nama: "Raka Prasetyo", username: "213756", password: "123456" },
    { nama: "Gita Marlinda", username: "216932", password: "123456" },
    { nama: "Maizal", username: "213122", password: "123456" },
    { nama: "Achmad Darojih", username: "214922", password: "123456" },
    { nama: "Riris", username: "216785", password: "123456" },
    { nama: "Arni Purwati", username: "216783", password: "123456" },
    { nama: "Citra Febrianti", username: "216969", password: "123456" },
    { nama: "Vivi Rizky Awalia", username: "215074", password: "123456" },
    { nama: "Siti Nurhaeni", username: "217650", password: "123456" },
    { nama: "Henrikus Wawan Kurniawan", username: "214384", password: "123456" },
    { nama: "Nur Aini", username: "219596", password: "123456" },
    { nama: "Aries Andesko Syamsirman", username: "1005790", password: "123456" },
    { nama: "Dian Setiawati", username: "1016569", password: "123456" },
    { nama: "Sulasto", username: "1016578", password: "123456" },
    { nama: "Riyan Heriyanto", username: "1020259", password: "123456" },
    { nama: "Jojor Sinaga", username: "1016550", password: "123456" },
    { nama: "Saprudin", username: "1016568", password: "123456" },
    { nama: "Siswanto", username: "1016571", password: "123456" },
    { nama: "Lulu Firdaus", username: "1026286", password: "123456" },
    { nama: "Sunaryo", username: "1016570", password: "123456" },
    { nama: "Fauziah Utami", username: "1030678", password: "123456" },
    { nama: "Ahmad Fauzi", username: "1016573", password: "123456" },
    { nama: "Iyan Sopian", username: "1016575", password: "123456" },
];
