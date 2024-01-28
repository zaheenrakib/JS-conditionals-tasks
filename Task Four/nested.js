var yourScore = 85;
var friendScore = 75;

if (yourScore > 80) {
    console.log("Inside your friend's score.");
    
    if (friendScore > 80) {
        console.log("Go for lunch.");
    } else if (friendScore >= 60) {
        console.log("Good luck next time.");
    } else if (friendScore >= 40) {
        console.log("Keep your friend's message unseen.");
    } else {
        console.log("Block your friend.");
    }
} else {
    console.log("Go to home, sleep, and act sad.");
}



/*

var myScore = 90;
var friendScore = 75;

if (myScore >= 80) {
    console.log("Go For Lunch");

    var message = (friendScore >= 60) ? "Good luck next time." :
                  (friendScore >= 40) ? "Message unseen." :
                  "Block your friend.";

    console.log(message);
} else {
    console.log("Go to home, sleep, and act sad.");
}


*/