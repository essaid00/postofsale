const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './client')))

const server = app.listen(25565, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('Démarrage du service', host, port)
})
