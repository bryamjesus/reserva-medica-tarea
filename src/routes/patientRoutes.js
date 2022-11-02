const express = require('express')
const router = express.Router()
const controller = require('../controllers/patientController')

router.get('/listar', (req, res) => {
  controller.listAllPatient(req, res)
})

router.get('/mostrar/:id', (req, res) => {
  controller.listOnePatient(req, res)
})

router.post('/crear', (req, res) => {
  controller.createPatient(req, res)
})

router.put('/actualizar/:id', (req, res) => {
  controller.updatePatient(req, res)
})

router.delete('/eliminar/:id', (req, res) => {
  controller.deletePatient(req, res)
})

module.exports = router