const con = require("../extra/mysql_connection");

class Admin {
  createCryptoCoin = (name, image, value) => {
        new Promise((resolve, reject) => {
            const sql = "INSERT INTO TABLE CryptoCoins(coinName, image, value) VALUES(?, ?, ?));"
            const contents = [name, image, value];
            con.query(sql, contents, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        });
    }

    createCryptoUser(username, email, password){
        const sql = "INSERT INTO TABLE CryptoUser(username, email, password) VALUES (?, ?, ?));"
        const contents = [username, email, password];
        con.query(sql, contents, (err, results) => {
            if (err) throw err;
            log("User created Succesfully.")
        });
    }
}


module.exports = Admin;