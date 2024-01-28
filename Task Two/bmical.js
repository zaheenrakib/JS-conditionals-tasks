var height = 6.5;

var weight = 62;

var BMI = weight / (height * height);
console.log( 'your BMI', BMI.toFixed(2))

if(BMI < 18.5){
    console.log("you are underweight");
}
else if( BMI >= 18.5 && BMI <=24.9) {
    console.log("you are normal");
}
else if( BMI >=25 && BMI <= 29.9) {
    console.log("you are overweight");
}
else{
    console.log("you are obese");
}