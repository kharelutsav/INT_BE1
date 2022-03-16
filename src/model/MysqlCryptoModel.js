const con = require("../extra/mysql_connection");

class Coins {

    getAllCryptoCoins = new Promise ((resolve, reject) => {
        const sql = "SELECT coinName, image, value FROM CryptoCoins;"
        con.query(sql, (err, result)=> {
            if (err) reject(new Error("Not Authorized!"));
            resolve(result);
        });
    });

    getUserOwnedCounts = (id) => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT COUNT(coinName) as count FROM CryptoDistributions WHERE clientId = ?";
            con.query(sql, [id,], (err,result) => {
                if (result) resolve(result);
            });
        });
    }

    getUserCoins = (id) => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT CryptoCoins.coinName, CryptoCoins.image, CryptoDistributions.Quantity \
                FROM CryptoCoins LEFT JOIN CryptoDistributions\
                ON CryptoCoins.coinName = CryptoDistributions.coinName \
                AND CryptoDistributions.clientId = ?";
            con.query(sql, [id,], (err, result) => {
                if (err) reject(new Error("Not Authorized!"));
                if (result) resolve(result);
            });
        });
    }

    checkCoinUser = (id, name) => {
        return new Promise ((resolve, reject) => {
            const sql = "SELECT * FROM CryptoDistributions WHERE clientId = ? AND coinName  = ?;"
            con.query(sql, [id, name], (err, result)=> {
                if (err) reject(new Error("Not Authorized!"));
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
                if (err) reject(new Error("Not Authorized!"));
                resolve(result);
            });
        });
    }

    updateCoin = (id, name, quantity) => {
        return new Promise ((resolve, reject) => {
            const sql = "UPDATE CryptoDistributions SET Quantity = ? WHERE clientId = ? and coinName = ?;"
            con.query(sql, [quantity, id, name], (err, result) => {
                if (err) reject(new Error("Not Authorized!"));
                resolve(result);
            });
        });
    }
}


module.exports = Coins;