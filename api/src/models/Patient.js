const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('patient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dni:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
  });
};
