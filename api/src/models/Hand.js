const { DataTypes } = require('sequelize');
// model define export
// sequelize connection injection.
module.exports = (sequelize) => {
  // define model
  sequelize.define('hand', {

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
      
    //tall fingers

    side:{
        type: DataTypes.ENUM(['right','left']),
        allowNull: false,
    },

    metacarpofalangica: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    interfalangicaProximal: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    interfalangicaDistal: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    
    distanciaPlieguePalmarDistal: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

    oposicion: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    
  });
};
