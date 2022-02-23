const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "kharelu",
    password: "My sql server.",
    port: 3306,
    database: "student"
});

connection.connect(err => {
    if (err) throw err;
});

const sql4_user = "CREATE TABLE IF NOT EXISTS CryptoUsers (\
    clientId INT PRIMARY KEY NOT NULL AUTO_INCREMENT,\
    username CHAR(25) NOT NULL,\
    email VARCHAR(100) UNIQUE NOT NULL,\
    password CHAR(32) NOT NULL);"
connection.query(sql4_user, (err, result) => {
    if (err) throw err;
})

const sql4_coin = "CREATE TABLE IF NOT EXISTS CryptoCoins (\
    coinName CHAR(25) PRIMARY KEY NOT NULL,\
    image LONGBLOB,\
    value TINYINT(255) UNSIGNED NOT NULL);"
connection.query(sql4_coin, (err, result) => {
    if (err) throw err;
})

const sql4_quantity = "CREATE TABLE IF NOT EXISTS CryptoDistributions (\
    clientId INT,\
    coinName CHAR(25),\
    Quantity CHAR(25),\
    INDEX(clientId),\
    INDEX(coinName),\
    FOREIGN KEY (clientId) REFERENCES CryptoUsers(clientId),\
    FOREIGN KEY (coinName) REFERENCES CryptoCoins(coinName));"
connection.query(sql4_quantity, (err, result) => {
    if (err) throw err;
})

module.exports = connection;