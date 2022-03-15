const express = require("express");
// const count = require("../middlewares/count");
const router = express.Router();
const model = require("../model/MysqlCryptoModel");

const Schema = new model();

// Redirect To User Homepage
// router.get('/', (req, res) => {
//     res.redirect("/marketplace");
// });


// Get Users Homepage (Version: 1.0)
router.get('/user/:id/cryptocoins', (req, res) => {
    Schema.getUserCoins(req.url.split("/")[2])
    .then(data => {
        res.json(data);
    }).catch(err => console.error(err));
});


// Get Marketplace (Version: 1.0)
router.get('/marketplace', (req, res)=>{
    Schema.getAllCryptoCoins.then((data)=>{
        res.json(data);
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
            res.send("You are not authorized to do so.");
        });
    })
    .catch(err => {
        Schema.addCoin(clientId, coinName, quantity)
        .then(data => {
            if (data) res.send(data);
        })
        .catch(err => {
            res.end("You are not authorized to do so.");
        });
    });
});


module.exports = router;