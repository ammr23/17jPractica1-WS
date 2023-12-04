//console.log('Hola mundo !!!')

//Crear Servidor web (Express)
const express = require('express') //Importa el módulo Express
const cors = require('cors')//Importa el paquete cors

const server = express()//inicializa la instancia de express
server.use(cors());//habilitar cors para todas las solicitudes

server.get('/', function (req, res) 
{
  res.send('Hello World')
})

server.get('/ping', (req, res) => {
  res.status(200).json(
    {
      message: 'pong'
    }
  )
})
server.listen(3000) 
