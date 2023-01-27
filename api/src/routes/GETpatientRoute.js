const { Router } = require("express");
const router = Router();
const { getPatientDb } = require("../controllers/getPatientDb");
const { Patient } = require("../db");

router.get("/", async (req, res) => {
  try {
    if (Patient) {
      const allPatients = await getPatientDb();

      return res.status(200).send(allPatients);
    }
    return;
    res
      .status(404)
      .send(console.log("No se encuentra paciente ningun registrado"));
  } catch (error) {
    res.status(404).send(console.log("Error de conexion"));
    console.log(error);
  }
});

module.exports = router;
