const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentDayOfWeek = weekDays[today.getDay()];
// Get the element by its data-testid attribute
var element = document.querySelector('[data-testid="currentDayOfTheWeek"]');

// Check if the element was found
if (element) {
  // Do something with the element
  element.textContent = currentDayOfWeek;
} else {
  console.log("Day of the week not found.");
}

// this function gets the UTC and displays it at the appropriate place in the HTML
function currentTime() {
    timestamp = Date.now();
    const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentTimeElement.textContent = timestamp;     
}

// Update the current time every second
setInterval(currentTime, 1000);

// Initial call to set the time immediately
currentTime();