const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('edema', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    circunferencia: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },

    organizado: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },

    escalaAnalogaDelDolor: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },

    valoracionMuscular: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },

    evaluacionFuerzaMuscular: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },

    dinamometria: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },

  });
};
