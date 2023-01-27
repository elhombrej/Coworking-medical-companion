const { Router } = require('express');
const router = Router();
const {getClinicHistory} = require('../controllers/getClinicHistory')

router.get('/:dni', async(req,res)=>{
    const {dni} = req.params;
            try{
            const allClinicHistories = await getClinicHistory();
            let clinicHistoryByDni = allClinicHistories.filter(element => element.dni == dni);
            if(clinicHistoryByDni.length){
                return res.status(200).send(clinicHistoryByDni[0])
                
            }
        }catch(error){
            res.status(400).send(alert('ERROR al mostrar informacion de la historia clinica, asegurese de haber registrado correctamente el DNI'))
        };
    }
);

module.exports=router;