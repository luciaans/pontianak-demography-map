const dataPontianak = [
  {
    name: "Pontianak Barat",
    rt: 561,
    rw: 105,
    penduduk: 156782,
    center: [-0.0167, 109.2998],
    points: [
      { name: "Kelurahan Pal Lima", lat: -0.0288, lng: 109.2930, rt: 118, rw: 22, penduduk: 34130 },
      { name: "Kelurahan Sungai Beliung", lat: -0.0091, lng: 109.2883, rt: 102, rw: 19, penduduk: 28620 },
      { name: "Kelurahan Sungai Jawi Dalam", lat: -0.0191, lng: 109.3046, rt: 125, rw: 24, penduduk: 35240 },
      { name: "Kelurahan Sungai Jawi Luar", lat: -0.0099, lng: 109.3112, rt: 118, rw: 22, penduduk: 31450 },
    ]
  },
  {
    name: "Pontianak Kota",
    rt: 520,
    rw: 121,
    penduduk: 145200,
    center: [-0.0296, 109.3164],
    points: [
      { name: "Kelurahan Darat Sekip", lat: -0.0332, lng: 109.3314, rt: 135, rw: 31, penduduk: 37800 },
      { name: "Kelurahan Mariana", lat: -0.0203, lng: 109.3314, rt: 115, rw: 29, penduduk: 32200 },
      { name: "Kelurahan Sungai Bangkong", lat: -0.0330, lng: 109.3200, rt: 128, rw: 29, penduduk: 35840 },
      { name: "Kelurahan Sungai Jawi", lat: -0.0381, lng: 109.3012, rt: 100, rw: 24, penduduk: 28000 },
      { name: "Kelurahan Tengah", lat: -0.0241, lng: 109.3142, rt: 42, rw: 8, penduduk: 11360 }
    ]
  },
  {
    name: "Pontianak Selatan",
    rt: 413,
    rw: 92,
    penduduk: 115400,
    center: [-0.0500, 109.3350],
    points: [
      { name: "Kelurahan Akcaya", lat: -0.0468, lng: 109.3287, rt: 108, rw: 24, penduduk: 30200 },
      { name: "Kelurahan Benua Melayu Laut", lat: -0.0387, lng: 109.3457, rt: 85, rw: 19, penduduk: 23800 },
      { name: "Kelurahan Benua Melayu Darat", lat: -0.0347, lng: 109.3390, rt: 90, rw: 20, penduduk: 25200 },
      { name: "Kelurahan Kota Baru", lat: -0.0618, lng: 109.3113, rt: 78, rw: 17, penduduk: 21800 },
      { name: "Kelurahan Parit Tokaya", lat: -0.0656, lng: 109.3224, rt: 52, rw: 12, penduduk: 14400 }
    ]
  },
  {
    name: "Pontianak Tenggara",
    rt: 190,
    rw: 47,
    penduduk: 53100,
    center: [-0.0670, 109.3483],
    points: [
      { name: "Kelurahan Bangka Belitung Darat", lat: -0.0805, lng: 109.3509, rt: 48, rw: 12, penduduk: 13400 },
      { name: "Kelurahan Bangka Belitung Laut", lat: -0.0591, lng: 109.3566, rt: 52, rw: 13, penduduk: 14500 },
      { name: "Kelurahan Bansir Darat", lat: -0.0758, lng: 109.3357, rt: 45, rw: 11, penduduk: 12600 },
      { name: "Kelurahan Bansir Laut", lat: -0.0526, lng: 109.3501, rt: 45, rw: 11, penduduk: 12600 }
    ]
  },
  {
    name: "Pontianak Timur",
    rt: 421,
    rw: 86,
    penduduk: 117600,
    center: [-0.0420, 109.3650],
    points: [
      { name: "Kelurahan Banjar Serasan", lat: -0.0444, lng: 109.3616, rt: 60, rw: 12, penduduk: 16800 },
      { name: "Kelurahan Dalam Bugis", lat: -0.0273, lng: 109.3503, rt: 58, rw: 12, penduduk: 16200 },
      { name: "Kelurahan Parit Mayor", lat: -0.0578, lng: 109.3762, rt: 62, rw: 13, penduduk: 17400 },
      { name: "Kelurahan Saigon", lat: -0.0408, lng: 109.3722, rt: 64, rw: 13, penduduk: 17900 },
      { name: "Kelurahan Tambelan Sampit", lat: -0.0336, lng: 109.3531, rt: 55, rw: 11, penduduk: 15400 },
      { name: "Kelurahan Tanjung Hulu", lat: -0.0285, lng: 109.3701, rt: 61, rw: 12, penduduk: 17100 },
      { name: "Kelurahan Tanjung Hilir", lat: -0.0242, lng: 109.3571, rt: 61, rw: 13, penduduk: 16800 }
    ]
  },
  {
    name: "Pontianak Utara",
    rt: 573,
    rw: 135,
    penduduk: 147064,
    center: [0.0050, 109.3350],
    points: [
      { name: "Kelurahan Batulayang", lat: 0.0173, lng: 109.3102, rt: 143, rw: 34, penduduk: 36765 },
      { name: "Kelurahan Siantan Hilir", lat: 0.0075, lng: 109.3373, rt: 144, rw: 34, penduduk: 37015 },
      { name: "Kelurahan Siantan Hulu", lat: 0.0008, lng: 109.3639, rt: 142, rw: 33, penduduk: 36515 },
      { name: "Kelurahan Siantan Tengah", lat: -0.0059, lng: 109.3485, rt: 144, rw: 34, penduduk: 36769 }
    ]
  }
];

const totals = dataPontianak.reduce((acc, d) => ({
  penduduk: acc.penduduk + d.penduduk,
  rw: acc.rw + d.rw,
  rt: acc.rt + d.rt,
  points: acc.points + d.points.length
}), { penduduk: 0, rw: 0, rt: 0, points: 0 });

document.getElementById('total-penduduk').textContent = totals.penduduk.toLocaleString('id-ID');
document.getElementById('total-rw').textContent = totals.rw.toLocaleString('id-ID');
document.getElementById('total-rt').textContent = totals.rt.toLocaleString('id-ID');
document.getElementById('total-markers').textContent = totals.points;

const rankList = document.getElementById("rank-list");
dataPontianak.forEach((d, i) => {
  rankList.innerHTML += `
    <div class="flex justify-between items-center border-b border-slate-700 pb-2 hover:bg-slate-800/50 px-2 py-2 rounded cursor-pointer transition-all" onclick="focusOnDistrict('${d.name}')">
      <span class="flex-1 px-2 text-sm">${d.name}</span>
      <span class="font-bold text-emerald-400 text-xs">${d.rt} RT</span>
    </div>`;
});

function createCustomMarker(point, districtName, districtData) {
  const isLarge = point.rt > 100;
  const icon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="custom-marker ${isLarge ? 'custom-marker-large' : ''} pulse-animation">
         <svg class="w-4 h-4" fill="white" viewBox="0 0 20 20">
           <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
         </svg>
       </div>`,
    iconSize: [isLarge ? 44 : 36, isLarge ? 44 : 36],
    iconAnchor: [isLarge ? 22 : 18, isLarge ? 44 : 36]
  });

  const marker = L.marker([point.lat, point.lng], { icon });

  marker.bindPopup(`
    <div class="info-card" style="min-width: 220px;">
      <h4>${point.name}</h4>
      <p>Kecamatan: <b>${districtName}</b></p>
      <p>Total RT: <b>${point.rt}</b></p>
      <p>Total RW: <b>${point.rw}</b></p>
      <p>Penduduk: <b>${point.penduduk.toLocaleString('id-ID')}</b></p>
    </div>
  `, { maxWidth: 300 });

  return marker;
}

const map = L.map("map").setView([-0.02, 109.34], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
  maxZoom: 19
}).addTo(map);

function getColor(rt) {
  return rt > 570 ? "#064e3b" :
    rt > 550 ? "#065f46" :
      rt >= 500 ? "#059669" :
        rt >= 400 ? "#10b981" :
          "#34d399";
}

let markerClusters = {};
let currentGeoJsonLayer = null;

fetch("https://raw.githubusercontent.com/anshori/geojson-indonesia/master/kecamatan/6171.json")
  .then(r => r.json())
  .then(geo => {
    currentGeoJsonLayer = L.geoJson(geo, {
      style: f => {
        const d = dataPontianak.find(
          x => x.name.toUpperCase() === f.properties.name.toUpperCase()
        );
        return {
          fillColor: d ? getColor(d.rt) : "#e5e7eb",
          weight: 2,
          color: "#1e293b",
          fillOpacity: 0.7
        };
      },
      onEachFeature: (f, l) => {
        const d = dataPontianak.find(
          x => x.name.toUpperCase() === f.properties.name.toUpperCase()
        );

        if (!d) return;

        l.bindPopup(`
          <div class="info-card">
            <h4>${f.properties.name}</h4>
            <p>Penduduk: <b>${d.penduduk.toLocaleString("id-ID")}</b></p>
            <p>Jumlah RW: <b>${d.rw}</b></p>
            <p>Jumlah RT: <b>${d.rt}</b></p>
            <p style="margin-top: 12px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,.3); font-size: 12px; color: rgba(255,255,255,.8);">
              Klik wilayah untuk melihat titik lokasi
            </p>
          </div>
        `);

        l.on({
          mouseover: e => {
            e.target.setStyle({
              weight: 4,
              color: "#ffffff",
              fillOpacity: 0.9
            });
          },
          mouseout: e => {
            currentGeoJsonLayer.resetStyle(e.target);
          },
          click: e => {
            showDistrictMarkers(d, f.properties.name);
            map.fitBounds(e.target.getBounds(), { padding: [50, 50] });
          }
        });
      }
    }).addTo(map);

    map.fitBounds(currentGeoJsonLayer.getBounds(), { padding: [20, 20] });
  });

function showDistrictMarkers(districtData, districtName) {
  Object.values(markerClusters).forEach(cluster => map.removeLayer(cluster));
  markerClusters = {};

  const cluster = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    maxClusterRadius: 60
  });

  districtData.points.forEach(point => {
    const marker = createCustomMarker(point, districtName, districtData);
    cluster.addLayer(marker);
  });

  markerClusters[districtName] = cluster;
  map.addLayer(cluster);

  const notification = L.control({ position: 'topright' });
  notification.onAdd = function () {
    const div = L.DomUtil.create('div', 'glass');
    div.style.padding = '12px 20px';
    div.style.borderRadius = '8px';
    div.innerHTML = `
      <div style="color: #10b981; font-weight: 700; font-size: 14px;">
         ${districtData.points.length} titik lokasi ditampilkan
      </div>
      <div style="color: #94a3b8; font-size: 12px; margin-top: 4px;">
        ${districtName}
      </div>
    `;
    setTimeout(() => map.removeControl(notification), 3000);
    return div;
  };
  notification.addTo(map);
}

function focusOnDistrict(districtName) {
  const district = dataPontianak.find(d => d.name === districtName);
  if (!district) return;

  map.setView(district.center, 14);
  showDistrictMarkers(district, districtName);
}

if (window.innerWidth < 768) {
  map.zoomControl.setPosition('bottomleft');
}

window.focusOnDistrict = function (districtName) {
  const district = dataPontianak.find(d => d.name === districtName);
  if (!district) return;

  map.setView(district.center, 14);
  showDistrictMarkers(district, districtName);

  document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

if (window.innerWidth < 768) {
  map.zoomControl.setPosition('bottomleft');
}

async function loadNews() {
  const newsContainer = document.getElementById('news-container');

  try {
    const rssResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.antaranews.com/rss/terkini');
    const rssData = await rssResponse.json();

    if (rssData.items && rssData.items.length > 0) {
      newsContainer.innerHTML = rssData.items.slice(0, 2).map(item => {
        const imgMatch = item.description?.match(/<img[^>]+src="([^">]+)"/);
        const imgSrc = imgMatch ? imgMatch[1] : null;

        return `
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" 
             class="block hover:bg-slate-800/50 p-3 rounded-lg transition-all group">
            <div class="flex gap-3">
              ${imgSrc ? `
                <img src="${imgSrc}" 
                     alt="${item.title}"
                     class="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                     onerror="this.style.display='none'">
              ` : ''}
              <div class="flex-1 min-w-0">
                <h5 class="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-1">
                  ${item.title}
                </h5>
                <p class="text-xs text-slate-400">
                  ${new Date(item.pubDate).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
                </p>
              </div>
            </div>
          </a>
        `;
      }).join('');
    } else {
      throw new Error('RSS gagal');
    }
  } catch (rssError) {
    newsContainer.innerHTML = `
      <div class="text-center text-slate-400 text-xs py-4">
        <p>Tidak dapat memuat berita</p>
        <p class="text-xs mt-2">Coba muat ulang halaman</p>
      </div>
    `;
  }
}

loadNews();

setInterval(() => {
  loadNews();
  console.log('Berita di-refresh:', new Date().toLocaleTimeString('id-ID'));
}, 10000); 

 // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });