// Stopwatch
var milliseconds = 00; // adding milliseconds as 0
var seconds = 00; // adding seconds as 0
var minutes = 00; // adding minutes as 0
var watchDisplay = document.querySelector('.stopwatch-display'); // capturing the stopwatch display
var interval; // setting interval variable as empty/null


function displayTimer(){
    milliseconds+=1; // adding milliseconds with 100 increments
    if(milliseconds == 10){ // if milliseconds reach 1000, make them 0 and increment a number in seconds
        milliseconds = 00;
        seconds++;
    }
    if(seconds == 60){ // if seconds reach 60, make them 0 and increment a number in minutes
            seconds = 00;
            minutes++;
    }
    var minutesDbl = String(minutes).padStart(2, '0'); // these two new built-in function used to show the values with double numbers
    var secondsDbl = String(seconds).padStart(2, '0'); // these two new built-in function used to show the values with double numbers
    var millisecondsDbl = String(milliseconds).padStart(2, '0'); // these two new built-in function used to show the values with double numbers


    watchDisplay.innerHTML = ` ${minutesDbl}m : ${secondsDbl}s : ${millisecondsDbl}ms`; // using literal to add the values
}


function start() { // this function will start and see if the interval is not null then clear it and start a new interval
    if(interval !==null){
        clearInterval(interval);
    }
    interval = setInterval(function() {
        displayTimer() // here we run the function every 100th milliseconds
    },100);
}
function pause() { // on this function we pause the interval
    clearInterval(interval);
}

function reset() {// on this function we pause the interval but also make the values 0
    pause();
    milliseconds = 00;
    seconds = 00;
    minutes = 00;
    watchDisplay.innerHTML = '00m : 00s : 00ms ';
}



// countdown timer

    var countdownDisplay = document.getElementById("timer");

    var countdownInSeconds = document.getElementById("selectDuration").value;
    var countdown;
    
        function initCountdown() {
            countdownInSeconds = document.getElementById("selectDuration").value; // Set the initial time in seconds
            updateTimer(); // Initial call
            countdown = setInterval(updateTimer, 1000); // Update the timer function every second
        }

    function startButton() {
        clearInterval(countdown); // Clear any existing timers
        initCountdown();
    }

    function stopButton() {
        clearInterval(countdown);
        countdownDisplay.textContent = `00:00`;
    }
    
    function updateTimer() {
        var minutesInit = Math.floor(countdownInSeconds / 60); // here we divide the seconds to get the value in minutes
        var secondsInit = countdownInSeconds % 60; // here we check the remainder and consider it as second on every interval run

        var minutesDbl = String(minutesInit).padStart(2, '0'); // these two new built-in function used to show the values with double numbers
        var secondsDbl = String(secondsInit).padStart(2, '0'); // these two new built-in function used to show the values with double numbers

        countdownDisplay.textContent = `${minutesDbl}:${secondsDbl}`; // template literal to display the variables in the frontend

        if (countdownInSeconds === 0) { // var's end the function when the value reaches 0
            clearInterval(countdown);
            countdownDisplay.textContent = "Countdown is Compvared!!";
        } else { // otherwise decrement the timer as it should be
            countdownInSeconds--;
        }
    }

        
