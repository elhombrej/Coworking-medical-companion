const initialState = {
  patients: [],
  patientsAux: [],
  patientInformation: [],
  clinicHistoryInformation: [],
  loadingStatus: true,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PATIENTS":
      if (action.payload !== "error") {
        return {
          ...state,
          patients: action.payload,
          patientsAux: action.payload,
          loadingStatus: true,
        };
      }

    // case "POST_PATIENT":
    //   return {
    //     ...state,
    //   };

    // case "POST_CLINIC_HISTORY":
    //   return {
    //     ...state,
    //   };

    case "GET_PATIENT_BY_DNI":
      return {
        ...state,
        patientInformation: action.payload,
      };

    case "GET_CLINIC_HISTORY_BY_DNI":
      return {
        ...state,
        clinicHistoryInformation: action.payload,
      };

    case "LOADING":
      const load = state.loadingStatus;
      return { ...state, loadingStatus: !load };

    default:
      return { ...state };
  }
};

export default rootReducer;
