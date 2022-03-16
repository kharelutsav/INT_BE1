const express = require("express");
const router = express.Router();
const model = require("../model/MysqlCryptoModel");

const Schema = new model();

// Redirect To User Homepage
router.get('/', (req, res) => {
    res.redirect("/marketplace");
});


// Get Marketplace (Version: 1.0)
router.get('/marketplace', (req, res)=>{
    Schema.getAllCryptoCoins.then((data)=>{
        res.json(data);
    })
    .catch(err => {
        res.send("You are not authorized to do so.");
    });
});

const countCoins = (coins) => {
    const count = coins.filter(data => {
      return data.Quantity !== null && data.Quantity !== '0';
    });
    return count.length;
}

// Get Users Homepage (Version: 1.0)
router.get('/user/:id/cryptocoins', (req, res) => {
    const uid = req.url.split("/")[2]
    Schema.getUserCoins(uid)
    .then(data => {
        res.json({count: countCoins(data), coins: data});
    })
    .catch(err => {
        res.send("You are not authorized to do so.");
    });
});


// Add Coins
router.post('/user/add', (req, res) => {
    const [coinName, clientId, quantity] = [req.body.coinName, req.body.clientId, req.body.quantity]
    console.log(req.body);
    Schema.checkCoinUser(clientId, coinName)
    .then(data => {
        let newQuantity = Number(quantity) + Number(data[0].Quantity);
        Schema.updateCoin(clientId, coinName, newQuantity)
        .then(data => {
            if (data) {
                res.send(data);
            }
        })
        .catch(err => {
            res.send("Unable to update.");
        });
    })
    .catch(err => {
        Schema.addCoin(clientId, coinName, quantity)
        .then(data => {
            if (data) {
                res.send(data);
            };
        })
        .catch(err => {
            res.end("Unable to add.");
        });
    });
});


module.exports = router;