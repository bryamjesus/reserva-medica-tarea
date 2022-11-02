const patientModel = require('../models/patientModel')

const controller = {
  async listAllPatient(req, res) {
    try {
      const result = await patientModel.find()
      res.json({ result })
    } catch (e) {
      console.error(e);
      res.sendStatus(500)
    }
  },
  async listOnePatient(req, res) {
    try {
      const { id } = req.params
      const result = await patientModel.findById(id)
      res.json(result)
    } catch (e) {
      console.error(e);
      res.sendStatus(500)
    }
  },
  async createPatient(req, res) {
    // console.log(req)
    const { name, dni, phone, email, dayAppointment } = req.body
    const patient = new patientModel()
    patient.name = name
    patient.dni = dni
    patient.phone = phone
    patient.email = email
    patient.dayAppointment = dayAppointment
    try {
      const result = await patient.save()
      res.json(result)
    } catch (e) {
      console.error(e);
      res.sendStatus(500)
    }
  },
  async updatePatient(req, res) {
    const { id } = req.params
    const patientUpdate = req.body
    try {
      const result = await patientModel.findByIdAndUpdate(id, patientUpdate, { new: true })
      res.json(result)
    } catch (e) {
      console.error(e);
      res.sendStatus(500)
    }
  },
  async deletePatient(req, res) {
    try {
      const { id } = req.params
      const result = await patientModel.findByIdAndDelete(id)
      if (result) {
        res.sendStatus(200)
      }
      else {
        res.sendStatus(400)
      }
    } catch (e) {
      console.error(e);
      res.sendStatus(500)
    }
  }
}

module.exports = controller