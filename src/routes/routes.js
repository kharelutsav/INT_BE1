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

router.post('/:id/add', (req, res) => {
    count.increase(req.url.split('/')[1]);
    res.redirect('/mycoins');
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