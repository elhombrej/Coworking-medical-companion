const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('wrist', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    flexion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },

    extension: {
      type: DataTypes.FLOAT,
      allowNull: true
    },

    desviacionRadial: {
      type: DataTypes.FLOAT,
      allowNull: true
    },

    desviacionCubital: {
      type: DataTypes.FLOAT,
      allowNull: true
    },

    
  });
};
