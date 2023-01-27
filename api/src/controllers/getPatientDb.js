const { Patient } = require("../db");

const getPatientDb = async () => {
  let patients = await Patient.findAll();
  return patients;
};

module.exports = {
  getPatientDb,
};