const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const patientRoute = require('./routes/patientRoutes')

mongoose.connect('mongodb://127.0.0.1/hospital')
  .then(() => { console.log('Conectado a la base de datos') })
  .catch((error) => { console.log(`Error al conectar DB: ${error}`) })

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/v1/citas', patientRoute)

app.listen(PORT, () => { console.log(`🚀 Server Run on port ${PORT}`) })
