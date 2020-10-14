const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}
//criando mapa
const map = L.map('mapid', options).setView([-13.0016982, -38.4904562], 16)

// criando e add o titulo da layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criando icone
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})



// criando e add marcação
L.marker([-13.0016982, -38.4904562], { icon })
  .addTo(map)

/*GALERIA DE IMAGENS*/
function selectImage(event) {
  const button = event.currentTarget
  // remover as classes .active 
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)
  function removeActiveClass(button) {
    button.classList.remove("active")
  }
  // selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  // atualizar o container de image
  imageContainer.src = image.src
  // adicionar a classe .active para este botão
  button.classList.add('active')
}