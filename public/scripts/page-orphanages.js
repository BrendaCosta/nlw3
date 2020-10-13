//criando mapa
const map = L.map('mapid').setView([-13.0016982, -38.4904562], 16)

// criando e add o titulo da layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criando icone
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// criando popup overlay

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')


// criando e add marcação
L.marker([-13.0016982, -38.4904562], { icon })
  .addTo(map)
  .bindPopup(popup)
