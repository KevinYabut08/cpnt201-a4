import dayjs from "dayjs";

function getCurrentDate() {
  return `Today's date: ${dayjs().format("MMM DD, YYYY")}`;
}

function daysSinceStart() {
  const startDate = dayjs("2023-09-05");
  const currentDate = dayjs();
  return currentDate.diff(startDate, "day");
}

document.getElementById("currentDate").innerText = getCurrentDate();
document.getElementById(
  "daysSinceStart"
).innerText = `Days since start: ${daysSinceStart()}`;
