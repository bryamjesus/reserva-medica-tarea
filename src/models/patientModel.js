const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
  name: { type: String, require: true },
  dni: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  dayAppointment: { type: Date, require: true },
  dateOrder: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('patient', patientSchema)