const express = require("express");
const count = require("../middlewares/count");
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect("/marketplace");
});

router.get('/marketplace', (req, res)=>{
    const param = {
        count: count.length(),
        coins: ['Bitcoin', 'Etherum', 'Pi', 'Harmony', 'Terra', 'Tether', 'Dogecoin', 'BNB', 'Fantom', 'Litecoin']
    }
    res.render("coin_market", param);
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