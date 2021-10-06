const Account = function(name){
    this.name;
    this.transactions = [];
}

Account.prototype.addTransaction = function(transaction){
    this.transactions.push(transaction)
}

Account.prototype.listMerchantTransactions = function(merchantName){
    merchantTransactions = [];
    for(transaction of this.transactions){
        if (transaction.merchant.name === merchantName){
            merchantTransactions.push(transaction)
        }
    } return merchantTransactions;
}

module.exports = Account;