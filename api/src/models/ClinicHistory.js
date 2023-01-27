const { DataTypes } = require("sequelize");
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define("clinicHistory", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    objetivos: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    objetivosGenerales: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    objetivosInmediatos: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    usoDeApoyos: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //evaluacion inicial

    firstTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    secondTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    thirdTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    fourthTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    fifthTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    sixthTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    seventhTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    eighthTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    ninethTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    tenthTreatment: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    altaOcontinuidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    anamnesis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
