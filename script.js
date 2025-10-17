function updateTime() {
  const timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initialize and update every 1 second
updateTime();
setInterval(updateTime, 1000);
