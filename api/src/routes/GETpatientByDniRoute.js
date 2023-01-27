const { Router } = require('express');
const router = Router();
const {getPatientDb} = require('../controllers/getPatientDb')

router.get('/:dni', async(req,res)=>{
    const {dni} = req.params;
            try{
            const allPatients = await getPatientDb();
            let patientByDni = allPatients.filter(element => element.dni == dni);
            if(patientByDni.length){
                return res.status(200).send(patientByDni[0])
                
            }
        }catch(error){
            res.status(400).send(alert('ERROR al mostrar informacion del paciente, asegurese de haber registrado correctamente el DNI'))
        };
    }
);

module.exports=router;