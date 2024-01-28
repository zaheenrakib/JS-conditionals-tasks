var burgerCost = 50;

var freeDrinks;

if(burgerCost > 500){
    freeDrinks = "free Coke";
}
else{
    freeDrinks = "Coke: 30tk";
}

console.log(`You ordered a burger worth ${burgerCost}tk. ${freeDrinks}`);