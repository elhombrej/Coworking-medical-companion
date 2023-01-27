require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("\n" + '%s listening at ' + process.env.PORT + "\n" + Date() + "\n");
  });
});
