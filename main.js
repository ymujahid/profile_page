const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentDayOfWeek = daysOfWeek[today.getDay()];

// Display the current day in the HTML element with id "currentDay"
document.getElementById("currentDay").textContent = currentDayOfWeek;


function updateCurrentTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = currentTimeString;
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Initial call to set the time immediately
updateCurrentTime();