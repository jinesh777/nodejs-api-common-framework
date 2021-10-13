const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV;
const db = {};
const host_a = process.env.MYSQL_HOST;
const port_a = process.env.MYSQL_PORT;

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, {
        host: host_a,
        dialect: 'mysql',
        port: port_a,
        freezeTableName: true
    }
);

// loops through each file in models folder and associates them if association exists
fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;

    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);

    }
});
//establishes the connection with db
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database.', `${err}`);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;