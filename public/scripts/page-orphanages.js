//criando mapa
const map = L.map('mapid').setView([-13.0016982, -38.4904562], 16)

// criando e add o titulo da layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criando icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


function addMarker({ id, name, lat, lng }) {

  // criando popup overlay
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
  }).setContent(` ${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)


  // criando e add marcação
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}



const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {

  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  }

  addMarker(orphanage)
})