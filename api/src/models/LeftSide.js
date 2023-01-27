const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('leftSide', {

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    
    condition:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull:false
  }

  });
};
