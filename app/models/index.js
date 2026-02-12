const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('13.38.112.104:3173', {
  dialect: 'postgres',
  logging: false,
});

const Employe = sequelize.define('Employe', {
  numemp: { type: DataTypes.STRING, primaryKey: true },
  nom: DataTypes.STRING,
  prenom: DataTypes.STRING
}, { tableName: 'employe', timestamps: false });

const Projet = sequelize.define('Projet', {
  numprojet: { type: DataTypes.STRING, primaryKey: true },
  description: DataTypes.STRING,
  budget: DataTypes.DECIMAL
}, { tableName: 'projet', timestamps: false });

const Affectation = sequelize.define('Affectation', {
  numemp: { type: DataTypes.STRING, primaryKey: true },
  numprojet: { type: DataTypes.STRING, primaryKey: true },
  heures: DataTypes.INTEGER
}, { tableName: 'affectation', timestamps: false });

Employe.hasMany(Affectation, { foreignKey: 'numemp' });
Projet.hasMany(Affectation, { foreignKey: 'numprojet' });
Affectation.belongsTo(Employe, { foreignKey: 'numemp' });
Affectation.belongsTo(Projet, { foreignKey: 'numprojet' });

module.exports = { Employe, Projet, Affectation, sequelize };
