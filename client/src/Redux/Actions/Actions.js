import axios from "axios";

export const getPatients = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/getpatients");
      return dispatch({
        type: "GET_PATIENTS",
        payload: json.data,
      });
    } catch (error) {
      alert("Fatal error, reload the page or try again later.");
      return {
        type: "GET_PATIENTS",
        payload: "error",
      };
    }
  };
};

export const postPatient = (payload) => {
  return async () => {
    try {
      const json = await axios.post("/postpatient", payload);
      alert('Registro de ' + payload.name + " realizado exitosamente");
      return json;
    } catch (error) {
      return alert("Error al registrar.");
    }
  };
};

export const postClinicHistory = (payload) => {
  return async () => {
    try {
      const json = await axios.post("/postclinichistory", payload);
      alert("Historia clinica registrada exitosamente");
      return json;
    } catch (error) {
      alert("Error al registrar a: " + payload.dni);
      console.log(error);
    }
  };
};

export const getPatientByDni = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.get("/getpatientbydni/" + payload);
      return dispatch({
        type: "GET_PATIENT_BY_DNI",
        payload: json.data,
      });
    } catch (error) {
      alert("ERROR en extraer informacion del paciente.");
    }
  };
};

export const getClinicHistoryByDni = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.get("/getclinichistorybydni/" + payload);
      return dispatch({
        type: "GET_CLINIC_HISTORY_BY_DNI",
        payload: json.data,
      });
    } catch (error) {
      alert("ERROR en extraer informacion de la historia clinica.");
    }
  };
};
