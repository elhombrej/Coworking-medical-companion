const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('pinchForce', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
  pinzaBidigital: {
    type: DataTypes.FLOAT,
    allowNull:false,
  },

  pinzaTridigital: {
    type: DataTypes.FLOAT,
    allowNull:false,
  },

  pinzaLateral: {
    type: DataTypes.FLOAT,
    allowNull:false,
  },

  });
};
