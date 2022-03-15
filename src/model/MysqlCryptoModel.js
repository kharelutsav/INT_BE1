const con = require("../extra/mysql_connection");

class Coins {

    getAllCryptoCoins = new Promise ((resolve, reject) => {
        const sql = "SELECT coinName, image, value FROM CryptoCoins;"
        con.query(sql, (err, result)=> {
            if (err) throw err;
            resolve(result);
        });
    });

    checkCoinUser = (id, name) => {
        return new Promise ((resolve, reject) => {
            const sql = "SELECT * FROM CryptoDistributions WHERE clientId = ? AND coinName  = ?;"
            con.query(sql, [id, name], (err, result)=> {
                if (err) throw err;
                if (result) {
                    resolve(result);
                };
            });
        });
    }

    addCoin = (id, name, quantity) => {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO CryptoDistributions(clientId, coinName, Quantity) VALUES (?, ?, ?);"
            con.query(sql, [id, name, quantity], (err, result)=> {
                if (err) throw err;
                resolve(result);
            });
        });
    }

    updateCoin = (id, name, quantity) => {
        return new Promise ((resolve, reject) => {
            const sql = "UPDATE CryptoDistributions SET Quantity = ? WHERE clientId = ? and coinName = ?;"
            con.query(sql, [quantity, id, name], (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        });
    }
}


module.exports = Coins;