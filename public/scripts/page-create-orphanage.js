//criando mapa
const map = L.map('mapid').setView([-13.0016982, -38.4904562], 16)

// criando e add o titulo na marca
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criando icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],

})

let marker;


//criando e adicionando marcação
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;



  //removendo o icone

  marker && map.removeLayer(marker)


  //adicionar o icone a marca
  marker = L.marker([lat, lng], { icon })
    .addTo(map)


})


// adicionar o campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // realizar o clone da ultima imagem 
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  // verificar se o campo está vazio, se sim, não add ao container
  const input = newFieldContainer.children[0]
  if (input.value == "") {
    window.alert("Adicione uma imagem")
    return
  }

  // limpar o campo antes de add a proxima iamgem
  input.value = ""

  // add o clone ao container #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')
  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }
  //deletar o campo
  span.parentNode.remove()
}


// trocar do sim e do não
function toggleSelect(event) {
  // retirar as classes .active
  document.querySelectorAll('.button-select button')
    .forEach(function (button) {
      button.classList.remove('active')
    })

  // colocar a class .active
  const button = event.currentTarget
  button.classList.add('active')

  // pegar o botão clicado

  //verificar o valor

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name = "open_on_weekends"]')
  input.value = button.dataset.value




}