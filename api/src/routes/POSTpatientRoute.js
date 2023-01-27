const { Router } = require("express");
const router = Router();
const { getPatientDb } = require("../controllers/getPatientDb");
const { Patient } = require("../db");

router.post("/", async (req, res) => {
  const { name, dni } = req.body;

  try {
    if (dni) {
      const allPatients = await getPatientDb();
      const patientExists = allPatients.find((element) => element.dni === dni);

      if (!patientExists) {
        console.log(name, dni);

        const patientCreated = await Patient.create({
          name,
          dni,
        });

        return res.status(201).send(patientCreated);
    }
    return res.status(404).send(console.log('ERROR: El paciente ya se encuentra registrado'))
    }
  } catch (error) {
    !dni ?
    res.status(404).send(console.log('DNI no fue ingresado')) :
    res.status(404).send(console.log("Error de conexion"));
    console.log(error);
  }
});

module.exports = router;
