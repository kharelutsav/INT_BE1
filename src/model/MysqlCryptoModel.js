const con = require("../extra/mysql_connection");

class Coins {

    createCryptoUser(username, email, password){
        const sql = "INSERT INTO TABLE CryptoUser(username, email, password) VALUES (?, ?, ?));"
        const contents = [username, email, password];
        con.query(sql, contents, (err, results) => {
            if (err) throw err;
            log("User created Succesfully.")
        });
    }

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

    getAllCryptoCoins = new Promise ((resolve, reject) => {
        const sql = "SELECT coinName, image, value FROM CryptoCoins;"
        con.query(sql, (err, result)=> {
            if (err) throw err;
            resolve(result);
        });
    });

    validateCoinUser = (id, name) => {
        return new Promise ((resolve, reject) => {
            const sql = "SELECT * FROM CryptoCoins WHERE coinName = ?;"
            con.query(sql, [name], (err, result)=> {
                if (err) throw err;
                if (result) {
                    sql = "SELECT * FROM CryptoUsers WHERE clientId = ?;"
                    this.con.query(sql, [id], (err, result)=> {
                        if (err) throw err;
                        resolve(result);
                        });
                    }
            });
        });
    }

    addCoin = (name, id, quantity) => {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO CryptoDistributions(clientId, coinName, Quantity) VALUES (?, ?, ?);"
            con.query(sql, [id, name, quantity], (err, result)=> {
                if (err) throw err;
                resolve(result);
            });
        });
    }

    updateCoin = (name, id, quantity) => {
        return new Promise ((resolve, reject) => {
            const sql = "SELECT Quantity FROM CryptoDistributions WHERE clientId = ? and coinName = ?;";
            con.query(sql, [id, name], (err, result)=> {
                if (err) throw err;
                if (result) {
                    let newQuantity = Number(result[0].Quantity) + Number(quantity);
                    const sql = "UPDATE CryptoDistributions SET Quantity = ? WHERE clientId = ? and coinName = ?;"
                    con.query(sql, [newQuantity, id, name], (err, result) => {
                        if (err) throw err;
                        resolve(result);
                    });
                }
            });
        });
    }
}

module.exports = Coins;