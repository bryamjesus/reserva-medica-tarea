const express = require('express')
const router = express.Router()
const controller = require('../controllers/patientController')

router.get('/', (req, res) => {
  controller.listAllPatient(req, res)
})

router.get('/:id', (req, res) => {
  controller.listOnePatient(req, res)
})

router.post('/', (req, res) => {
  controller.createPatient(req, res)
})

router.put('/:id', (req, res) => {
  controller.updatePatient(req, res)
})

router.delete('/:id', (req, res) => {
  controller.deletePatient(req, res)
})

module.exports = router