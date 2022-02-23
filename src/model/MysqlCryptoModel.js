const { Sequelize } = require("sequelize");

const seql = new Sequelize('mysql://kharelu:My sql password.@localhost:3306/student');

try {
    seql.authenticate();
} catch (err) {
    console.log(error);
}