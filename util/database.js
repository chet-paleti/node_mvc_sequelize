const Sequelize = require('sequelize');

const sequelize = new Sequelize('chet_dev', 'root', 'Shooter75', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
