require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Patient,
  Hand,
  Edema,
  ClinicHistory,
  Elbow,
  PinchForce,
  Shoulder,
  SoftParts,
  Splinting,
  Wrist,
  LeftSide,
  RightSide,
  FirstFinger
} = sequelize.models;

// Patient.hasMany(Hand);
// Patient.hasOne(Edema);
// Patient.hasOne(ClinicHistory);
// Patient.hasMany(Elbow);
// Patient.hasOne(PinchForce);
// Patient.hasMany(Shoulder);
// Patient.hasMany(SoftParts);
// Patient.hasMany(Splinting);
// Patient.hasMany(Wrist);

// Hand.belongsTo(Patient);
// Edema.belongsTo(Patient);
// ClinicHistory.belongsTo(Patient);
// Elbow.belongsTo(Patient);
// PinchForce.belongsTo(Patient);RightSide
// Shoulder.belongsTo(Patient);
// SoftParts.belongsTo(Patient);
// Splinting.belongsTo(Patient);
// Wrist.belongsTo(Patient);
Patient.hasOne(ClinicHistory)
ClinicHistory.belongsTo(Patient , {
  foreignKey: 'myClinicHistory',
  allowNull: false
});

Patient.hasOne(RightSide);
RightSide.belongsTo(Patient,{
  through: 'PatientId'
})

Patient.hasOne(LeftSide)
LeftSide.belongsTo(Patient,{
  through: 'PatientId'
})

LeftSide.hasOne(Hand);
Hand.belongsTo(LeftSide, {
  through: "leftSideId",
});

LeftSide.hasOne(Edema);
Edema.belongsTo(LeftSide, {
  through: "leftSideId",
});


LeftSide.hasOne(Elbow);
Elbow.belongsTo(LeftSide, {
  through: "leftSideId",
});

LeftSide.hasOne(PinchForce);
PinchForce.belongsTo(LeftSide, {
  through: "leftSideId",
});

LeftSide.hasOne(Shoulder);
Shoulder.belongsTo(LeftSide, {
  through: "leftSideId",
});

LeftSide.hasOne(SoftParts);
SoftParts.belongsTo(LeftSide, {
  through: "leftSideId",
});

LeftSide.hasOne(Splinting);
Splinting.belongsTo(LeftSide, {
  through: "leftSideId",
});

LeftSide.hasOne(Wrist);
Wrist.belongsTo(LeftSide, {
  through: "leftSideId",
});

Patient.hasMany(Hand);
Hand.belongsTo(Patient,{through:'patientId'});

RightSide.hasOne(Edema);
Edema.belongsTo(RightSide, {
  through: "rightSideId",
});

RightSide.hasOne(Elbow);
Elbow.belongsTo(RightSide, {
  through: "rightSideId",
});

RightSide.hasOne(PinchForce);
PinchForce.belongsTo(RightSide, {
  through: "rightSideId",
});

RightSide.hasOne(Shoulder);
Shoulder.belongsTo(RightSide, {
  through: "rightSideId",
});

RightSide.hasOne(SoftParts);
SoftParts.belongsTo(RightSide, {
  through: "rightSideId",
});

RightSide.hasOne(Splinting);
Splinting.belongsTo(RightSide, {
  through: "rightSideId",
});

RightSide.hasOne(Wrist);
Wrist.belongsTo(RightSide, {
  through: "rightSideId",
});

RightSide.hasOne(FirstFinger);
FirstFinger.belongsTo(RightSide, {
  through: "rightSideId",
});


// Hand.belongsTo(Patient);
// Edema.belongsTo(Patient);
// ClinicHistory.belongsTo(Patient);
// Elbow.belongsTo(Patient);
// PinchForce.belongsTo(Patient);
// Shoulder.belongsTo(Patient);
// SoftParts.belongsTo(Patient);
// Splinting.belongsTo(Patient);
// Wrist.belongsTo(Patient);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
