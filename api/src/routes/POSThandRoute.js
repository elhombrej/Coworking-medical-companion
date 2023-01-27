const { Router } = require("express");
const { getHandDb } = require("../controllers/getHand");
const router = Router();
const { getPatientDb } = require("../controllers/getPatientDb");
const { Hand } = require("../db");

router.post("/", async (req, res) => {
  const {
    side,
    metacarpofalangica,
    interfalangicaProximal,
    interfalangicaDistal,
    distanciaPlieguePalmarDistal,
    oposicion,
  } = req.body;

  try {
    if (
      side,
      metacarpofalangica,
      interfalangicaProximal,
      interfalangicaDistal,
      distanciaPlieguePalmarDistal,
      oposicion
    ) {
      const allHands = await getHandDb();
      const patientExists = allPatients.find((element) => element.dni === dni);

      if (!patientExists) {
        console.log(name, dni);

        const patientCreated = await Patient.create({
          name,
          dni,
        });

        return res.status(201).send(patientCreated);
      }
      return res
        .status(404)
        .send(console.log("ERROR: El paciente ya se encuentra registrado"));
    }
  } catch (error) {
    !dni
      ? res.status(404).send(console.log("DNI no fue ingresado"))
      : res.status(404).send(console.log("Error de conexion"));
    console.log(error);
  }
});

module.exports = router;
