const Sequelize = require('sequelize');
const sequelize = new Sequelize(/* database credentials here */);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Add models to db object
db.EmailTemplate = require('./emailTemplate.model.js')(sequelize, Sequelize);

module.exports = db;
