class KeepCount{
    constructor(user_coins){
        this.user_coins = {};
    }
    increase(coin){
        if (coin in this.user_coins) {
            this.user_coins[coin] += 1;
        }
        else {
            this.user_coins[coin] = 1;
        }
        this.message = "Coin added Succesfully";
    }
    length() {
        if (JSON.stringify(this.user_coins) === '{}'){
            return 0;
        } else {
            return Object.keys(this.user_coins).length;
        }
    }
}

module.exports = new KeepCount();