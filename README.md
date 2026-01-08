# PONIVA - Pontianak Interactive Visualization

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=white)](https://leafletjs.com/)

Platform visualisasi data kependudukan interaktif untuk Kota Pontianak, Kalimantan Barat.

## Deskripsi

PONIVA (Pontianak Interactive Visualization) adalah sistem informasi berbasis web yang menyajikan data kependudukan Kota Pontianak dalam bentuk peta interaktif dan dashboard statistik. Platform ini dikembangkan oleh Dinas Komunikasi dan Informatika Kota Pontianak untuk mendukung transparansi dan keterbukaan informasi publik sesuai prinsip Satu Data Indonesia.

### Fitur Utama

- **Peta Interaktif** - Visualisasi wilayah dengan Leaflet.js yang mendukung zoom, pan, dan klik untuk detail informasi
- **Dashboard Statistik** - Grafik batang dan pie chart untuk analisis distribusi penduduk dan RT/RW
- **Responsive Design** - Tampilan optimal di desktop, tablet, dan smartphone
- **Data Real-time** - Informasi kependudukan yang akurat dan terstruktur per kecamatan dan kelurahan
- **Marker Clustering** - Pengelompokan otomatis marker untuk performa optimal
- **Integrasi Berita** - RSS feed berita terkini dari sumber terpercaya

## Teknologi

### Frontend
- HTML5 - Struktur halaman
- CSS3 dengan Tailwind CSS - Styling dan responsivitas
- JavaScript ES6+ - Logika aplikasi

### Library
- **Leaflet.js v1.9.4** - Peta interaktif
- **Leaflet.markercluster v1.4.1** - Clustering marker
- **Chart.js** - Visualisasi grafik
- **Google Fonts (Inter)** - Typography

### Sumber Data
- GeoJSON Indonesia - Batas wilayah kecamatan
- RSS2JSON API - Agregasi berita

## Struktur Proyek

```
poniva/
├── img/
│   ├── logo-diskominfo.png
│   ├── logo-poniva.png
│   └── kota-pontianak3.jpg
├── dashboard.html          # Halaman dashboard statistik
├── home.html              # Halaman beranda
├── index.html             # Halaman peta interaktif
├── script.js              # JavaScript utama
├── style.css              # Custom styling
└── README.md
```

## Instalasi

### Prasyarat
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Web server atau local development server
- Koneksi internet untuk CDN

### Langkah Instalasi

1. Clone repository
```bash
git clone https://github.com/username/poniva.git
cd poniva
```

2. Pastikan folder `img/` berisi asset yang diperlukan

3. Jalankan dengan web server lokal

**Opsi 1: Python HTTP Server**
```bash
python -m http.server 8000
```

**Opsi 2: Node.js http-server**
```bash
npm install -g http-server
http-server -p 8000
```

**Opsi 3: PHP Built-in Server**
```bash
php -S localhost:8000
```

4. Akses aplikasi di browser
```
http://localhost:8000/home.html
```

## Data Kependudukan

Platform menampilkan data dari 6 kecamatan di Kota Pontianak:

| Kecamatan | Penduduk | RW | RT | Kelurahan |
|-----------|----------|----|----|-----------|
| Pontianak Barat | 156,782 | 105 | 561 | 4 |
| Pontianak Kota | 145,200 | 121 | 520 | 5 |
| Pontianak Utara | 147,064 | 135 | 573 | 4 |
| Pontianak Timur | 117,600 | 86 | 421 | 7 |
| Pontianak Selatan | 115,400 | 92 | 413 | 5 |
| Pontianak Tenggara | 53,100 | 47 | 190 | 4 |
| **Total** | **735,146** | **586** | **2,678** | **29** |

## Penggunaan

### Navigasi Halaman

**Beranda (home.html)**
- Informasi umum dan fitur platform
- Statistik ringkas kota
- Navigasi ke dashboard dan peta

**Dashboard (dashboard.html)**
- Grafik batang distribusi RT per kecamatan
- Pie chart distribusi penduduk
- Tabel detail data kecamatan

**Peta Interaktif (index.html)**
- Klik wilayah kecamatan untuk melihat marker kelurahan
- Hover pada wilayah untuk highlight
- Klik marker untuk detail lokasi
- Sidebar dengan daftar kecamatan dan panduan

### Interaksi Peta

**Kontrol Dasar:**
- Scroll mouse untuk zoom in/out
- Klik dan drag untuk pan
- Tombol +/- untuk kontrol zoom

**Fitur Interaktif:**
- Klik polygon kecamatan untuk tampilkan marker kelurahan
- Hover untuk highlight wilayah
- Popup menampilkan statistik detail
- Marker otomatis cluster pada zoom tertentu

## Konfigurasi

### Struktur Data

Data kependudukan dikelola dalam `script.js`:

```javascript
const dataPontianak = [
  {
    name: "Nama Kecamatan",
    rt: 561,
    rw: 105,
    penduduk: 156782,
    center: [-0.0167, 109.2998],
    points: [
      {
        name: "Nama Kelurahan",
        lat: -0.0288,
        lng: 109.2930,
        rt: 118,
        rw: 22,
        penduduk: 34130
      }
    ]
  }
];
```

### Konfigurasi Peta

```javascript
// Inisialisasi peta
const map = L.map("map").setView([-0.02, 109.34], 12);

// Tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
  maxZoom: 19
}).addTo(map);
```

### Marker Clustering

```javascript
const cluster = L.markerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: true,
  zoomToBoundsOnClick: true,
  maxClusterRadius: 60
});
```

### Warna Tema

Edit file `style.css` untuk mengubah tema warna:

```css
/* Primary Colors */
--primary: #10b981;
--primary-dark: #059669;

/* Background */
--bg-dark: #0f172a;
--bg-slate: #1e293b;
```

## API dan Sumber Data

### GeoJSON Kecamatan
```
https://raw.githubusercontent.com/anshori/geojson-indonesia/master/kecamatan/6171.json
```

### RSS Feed Berita
```
https://api.rss2json.com/v1/api.json?rss_url=https://www.antaranews.com/rss/terkini
```

## Deployment

### Production Deployment

**Apache Configuration:**
```apache
<Directory /var/www/html/poniva>
    Options -Indexes +FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name poniva.example.com;
    root /var/www/html/poniva;
    index home.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Kontribusi

Kontribusi sangat diterima. Untuk perubahan besar, silakan buka issue terlebih dahulu untuk diskusi.

### Langkah Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/FiturBaru`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin feature/FiturBaru`)
5. Buat Pull Request

## Lisensi

Copyright (c) 2026 Dinas Komunikasi dan Informatika Kota Pontianak

Dikembangkan oleh: **Kiki Al Qadrie**

## Kontak

**Dinas Komunikasi dan Informatika Kota Pontianak**

- Website: https://diskominfo.pontianak.go.id
- Email: diskominfo@pontianak.go.id
- Telepon: (0561) 8181771
- Alamat: Jl. Rahadi Usman No.3, Pontianak, Kalimantan Barat 78111

## Link Terkait

- [Portal Resmi Pemkot Pontianak](https://pontianak.go.id/)
- [Satu Data Kota Pontianak](https://satudata.pontianak.go.id/)
- [Satu Data Indonesia](https://data.go.id/)

---

Developed by Kiki Al Qadrie | Dinas Komunikasi dan Informatika Kota Pontianak
