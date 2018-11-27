const environment = process.env.NODE_ENV || "develeopment";
const config = require("./knexfile");
const confEnv = config[environment];
const knex = require("knex");
const connection = knex(configEnv);

module.exports = connection;
