//importar depencia do express
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

//iniciando o express
const server = express()

server
  // utilizar o body da requisição
  .use(express.urlencoded({ extended: true }))

  //utilizando arquivos estáticos
  .use(express.static('public'))

  // configurando template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //criar rotas das aplicação
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)






//Ligar o servidor
server.listen(5500)
