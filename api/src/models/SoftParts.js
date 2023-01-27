const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('softParts', {


    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    colorPiel: {
      type: DataTypes.STRING,
      allowNull:false,
    },

    temperaturaPiel: {
      type: DataTypes.STRING,
      allowNull:false,
    },   

  });
};
