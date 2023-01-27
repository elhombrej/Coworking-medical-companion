const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('firstFinger', {

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },

    trapecioMetacarpiana: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    metacarpofalangica: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    interfalangica: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    oposicion: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    antepulsion: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    retropulsion: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    
  });
};
