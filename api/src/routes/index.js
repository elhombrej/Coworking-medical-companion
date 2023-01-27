const { Router } = require('express');
const router = Router();

const routerPostPatient = require('./POSTpatientRoute');
router.use('/postpatient',routerPostPatient)

const routerPostClinicHistory = require('./POSTclinicHistoryRoute');
router.use('/postclinichistory',routerPostClinicHistory)

const routerGetPatient = require('./GETpatientRoute');
router.use('/getpatients',routerGetPatient)

const routerGetPatientByDni = require('./GETpatientByDniRoute');
router.use('/getpatientbydni',routerGetPatientByDni)

const routerGetClinicHistoryByDni = require('./GETclinicHistoryByDniRoute');
router.use('/getclinichistorybydni',routerGetClinicHistoryByDni)

module.exports = router;
