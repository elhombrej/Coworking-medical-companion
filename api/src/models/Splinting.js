const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('splinting', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
  tipoDeFerula: {
    type: DataTypes.STRING,
    allowNull:false,
  },

  fechaDeConfeccion: {
    type: DataTypes.DATE,
    allowNull:false,
  },

  ajusteOreconfeccion: {
    type: DataTypes.STRING,
    allowNull:false,
  },

  indicacionesDeUso: {
    type: DataTypes.STRING,
    allowNull:false,
  },

  observaciones: {
    type: DataTypes.STRING,
    allowNull:false,
  },

  precauciones: {
    type: DataTypes.STRING,
    allowNull:false,
  },

  });
};
