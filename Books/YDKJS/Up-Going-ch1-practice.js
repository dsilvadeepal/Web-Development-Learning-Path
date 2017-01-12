const TAX_RATE = 0.07;
const PHONE_PRICE = 300;
const SPENDING_THRESHOLD = 450;
const ACCESSORY_PRICE = 15;

var bank_bal = 500;
var amount = 0;

function calcTax(amount){
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}


//keep buying phones while you have money in bank account
while(amount < bank_bal) {
    amount += PHONE_PRICE;
    
    //can we afford an accessory
    if(amount < SPENDING_THRESHOLD){
        amount += ACCESSORY_PRICE;
    }
}

//calculate tax
amount = amount + calcTax(amount);
console.log("Your purchase : " + formatAmount(amount));


//can you afford this purchase
if(amount > bank_bal) {
    console.log("You cannot afford this purchase!");
}
