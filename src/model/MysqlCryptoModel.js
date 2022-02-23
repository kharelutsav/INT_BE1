const con = require("../extra/mysql_connection");

class Coins {

    createCryptoUser(username, email, password){
        const sql = "INSERT INTO TABLE CryptoUser(username, email, password) VALUES (?, ?, ?));"
        const contents = [username, email, password];
        this.con.query(sql, contents, (err, results) => {
            if (err) throw err;
            log("User created Succesfully.")
        })
    }

    createCryptoCoin(name, image, value){
        const sql = "INSERT INTO TABLE CryptoCoins(name, image, value) VALUES(?, ?, ?));"
        const contents = [username, email, password];
        this.con.query(sql, contents, (err, results) => {
            if (err) throw err;
            log("Coin created Succesfully.")
        })
    }

    getAllCryptoCoins = new Promise ((resolve, reject) => {
        const sql = "SELECT coinName, image, value FROM CryptoCoins;"
        con.query(sql, (err, result)=> {
            if (err) throw err;
            resolve(result);
        });
    });

    validateCoinUser(id, name){
        const sql = "SELECT * FROM CryptoCoins WHERE coinName = ?;"
        this.con.query(sql, [name], (err, result)=> {
            if (err) throw err;
            if (result) {
                sql = "SELECT * FROM CryptoUsers WHERE clientId = ?;"
                this.con.query(sql, [id], (err, result)=> {
                    if (err) throw err;
                    if (result) {
                        return true;
                    }
                    });
                }
        });
    }

    addCoin(name, id, quantity) {
        const sql = "INSERT INTO CryptoDistributions(clientId, coinName, Quantity) VALUES (?, ?, ?);"
        this.con.query(sql, [id, name, quantity], (err, result)=> {
            if (err) throw err;
            if (result) {
                console.log("Coin data inserted succesfully.");
                return true;
            } else {
                return false;
            }
        })
    }

    updateCoin(name, id, quantity){
        const sql = "SELECT Quantity FROM CryptoDistributions WHERE clientId = ? and coinName = ?;";
        this.con.query(sql, [id, name], (err, result)=> {
            if (err) throw err;
            if (result) {
                result += quantity;
                sql = "UPDATE CryptoDistributions SET Quantity = ? WHERE clientId = ? and coinName = ?;"
                this.con.query(sql, [result, id, name], (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    return true;
                })
            }
        })
    }
}

module.exports = Coins;