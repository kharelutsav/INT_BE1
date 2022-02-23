const express = require("express");
const count = require("../middlewares/count");
const router = express.Router();
const model = require("../model/MysqlCryptoModel");

const Schema = new model();

router.get('/', (req, res) => {
    res.redirect("/marketplace");
});

router.get('/marketplace', (req, res)=>{
    Schema.getAllCryptoCoins.then((data)=>{
        const param = {
            count: count.length(),
            coins: data
        }
        res.json(param);
    }).catch(err => console.error(err));
});

router.post('/:user/add', (req, res) => {
    const [coinName, clientId, quantity] = [req.body.coinName, req.body.clientId, req.body.quantity]
    Schema.updateCoin(coinName, clientId, quantity)
    .then(data => {
        console.log(data);
        if (data) {
            res.redirect('/mycoins');
        } else {
            res.send("You are not authorized to do so.")
        }
    }).catch(err => console.log(err));
});

router.get('/:id/buy', (req, res) => {

});

router.get('/:id/sell', (req, res) => {

});

router.get('/mycoins', (req, res) => {
    const param = {
        count: count.length(),
        coins: JSON.stringify(count.user_coins),
    };
    res.render("my_coins", param)
});

module.exports = router;