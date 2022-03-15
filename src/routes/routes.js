const express = require("express");
const count = require("../middlewares/count");
const router = express.Router();
const model = require("../model/MysqlCryptoModel");

const Schema = new model();

// Redirect To User Homepage
router.get('/', (req, res) => {
    res.redirect("/marketplace");
});

// Get User Homepage
router.get('/marketplace', (req, res)=>{
    Schema.getAllCryptoCoins.then((data)=>{
        const param = {
            count: count.length(),
            coins: data
        }
        res.json(param);
    }).catch(err => console.error(err));
});


// Add Coins
router.post('/:user/add', (req, res) => {
    const [coinName, clientId, quantity] = [req.body.coinName, req.body.clientId, req.body.quantity]
    Schema.checkCoinUser(clientId, coinName)
    .then(data => {
        let newQuantity = Number(quantity) + Number(data[0].Quantity);
        Schema.updateCoin(clientId, coinName, newQuantity)
        .then(data => {
            if (data) res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.send("You are not authorized to do so.");
        });
    })
    .catch(err => {
        Schema.addCoin(clientId, coinName, quantity)
        .then(data => {
            if (data) res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.end("You are not authorized to do so.");
        });
    });
});


module.exports = router;