const { ClinicHistory } = require("../db");

const getClinicHistory = async () => {
  let clinicHistorys = await ClinicHistory.findAll();
  return clinicHistorys;
};

module.exports = {
    getClinicHistory,
};