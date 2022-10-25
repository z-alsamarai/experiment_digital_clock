function tdnn() {
    document.getElementsByClassName("moon")[0].classList.toggle("sun");
    document.getElementsByClassName("tdnn")[0].classList.toggle("day");
    document.getElementsByClassName("clock")[0].classList.toggle("darkClock");
    document.getElementsByTagName("BODY")[0].classList.toggle("light");
}
function showTime() {

    // Get the current time
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = "AM";

    // Set AM or PM
    if(hours == 0) {
        hours = 12;
    }

    // Convert to 12 hour format
    if(hours > 12) {
        hours = hours - 12;
        am_pm = "PM";
    }

    // Add 0 if seconds/minutes/hours are less than 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Display time
    let timeNow = hours + ":" + minutes + ":" + seconds + " " + am_pm;

    // Set the time in the HTML
    document.getElementById("clockDisplay").innerText = timeNow;
    document.getElementById("clockDisplay").textContent = timeNow;

    // Call the function every second
    setTimeout(showTime, 1000);
}

// Call the function
showTime();