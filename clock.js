function showTime() {
  const now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let session = "";

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
    session = "PM";
  } else {
    session = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  document.getElementById(
    "MyClockDisplay"
  ).innerHTML = `${hour}:${minute}:${second} ${session}`;

  setTimeout(() => {
    showTime();
  }, 1000);
}

showTime();
