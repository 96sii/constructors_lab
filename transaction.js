const Transaction = function(amount, date, merchant){
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
}

Transaction.prototype.convert = function(amount){
    new Intl.NumberFormat(en-gb, {style: 'currency', currency: 'gbp'}).format(amount);
}

module.exports = Transaction;
