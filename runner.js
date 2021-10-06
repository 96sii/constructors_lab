const Tag = require ('./tag.js');
const Merchant = require ('./merchant.js');
const Transaction = require ('./transaction.js');
const Account = require ('./account.js');

const groceries = new Tag('Groceries', 400);
// console.log(groceries);

const Tesco = new Merchant('Tesco', groceries);
const Asda = new Merchant('Asda', groceries);
// console.log(Tesco);

const transaction1 = new Transaction(20, '06-10-21', Tesco)
const transaction2 = new Transaction(30, '05-10-21', Asda)
const transaction3 = new Transaction(40, '05-10-21', Tesco)
// console.log(transaction1);

const currentAccount = new Account('Current Account');
currentAccount.addTransaction(transaction1);
currentAccount.addTransaction(transaction2);
currentAccount.addTransaction(transaction3);
// console.log(currentAccount.transactions);
console.log(currentAccount.listMerchantTransactions('Tesco'));

