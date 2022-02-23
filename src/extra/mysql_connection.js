const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "kharelu",
    password: "My sql password."
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connection to mysql succesfull.");
})