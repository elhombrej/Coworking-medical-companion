const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('shoulder', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
  extensionAnterior: {
    type: DataTypes.FLOAT,
    allowNull: true
  },

  extension: {
    type: DataTypes.FLOAT,
    allowNull: true
  },

  abduccion: {
    type: DataTypes.FLOAT,
    allowNull: true
  },

  aduccion: {
    type: DataTypes.FLOAT,
    allowNull: true
  },

  rotacionInterna: {
    type: DataTypes.FLOAT,
    allowNull: true
  },

  

  });
};
