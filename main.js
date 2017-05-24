//Enter the user's the Date and Set the date we are counting down to
function myFunc(){
    input = document.getElementById("input").value;
    userData = new Date (input).getTime();

    //Update the count down every 1 second
    var x = setInterval(function (){

    //Get Browser Date and convert to milliseconds
    var browserData = new Date().getTime();

    //Find the difference input date and browser date
    var difference = userData - browserData;

    //Time Calculation for Days,Hours,Minutes,Seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //Output the result 
    document.getElementById("show").innerHTML =days + " " + "Days " + 
    hours + " " + "Hours " + minutes + " " + "Minuts " + seconds + " " + "Seconds";

    //If difference < 0 ===> stop Countdown and show END TIMER
    if (difference < 0) {
        clearInterval(x);
        document.getElementById("show").innerHTML = "END TIMER";
  };
},1000);
};