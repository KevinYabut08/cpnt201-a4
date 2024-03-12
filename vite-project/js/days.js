import dayjs from "dayjs";

function getCurrentDate() {
  return `Today's date: ${dayjs().format("Oct. 30, 2023")}`;
}

function daysSinceStart() {
  const startDate = dayjs("2023-09-05");
  const currentDate = dayjs("Oct. 30, 2023");
  return currentDate.diff(startDate, "day");
}

document.getElementById("currentDate").innerText = getCurrentDate();
document.getElementById(
  "daysSinceStart"
).innerText = `Days since start: ${daysSinceStart()}`;
