const objection = require('objection');
const Model = objection.Model;
const Confs = require("../knexfile");
const env_conf = Confs[process.env.NODE_ENV || 'development'];

const knex = require('knex')(env_conf);

module.exports = knex;