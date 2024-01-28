var ticketPrice = 800;
var age = 4;

if (age <=10){
    console.log("Bus Jaurney Free")
} else if (age >= 10 && age <= 25){
    //For Student 50 % diccount
    discount = ticketPrice * 50 / 100;
    payAmount = ticketPrice - discount;
    console.log(payAmount);
} else if (age >= 60){
    //Senior citizens (age >= 60) gets a 15% Discount
    discount2 = ticketPrice * 15 / 100;
    payAmount2 = ticketPrice - discount2;
    console.log(payAmount2)
}else{
    console.log("Pay Full Paymets",ticketPrice);
}



// var number = 800;
// var percentage = 12;

// // Calculate 12% of 800
// var result = number * 15 / 100;

// payAmount3 = number - result;

// console.log(payAmount3);
