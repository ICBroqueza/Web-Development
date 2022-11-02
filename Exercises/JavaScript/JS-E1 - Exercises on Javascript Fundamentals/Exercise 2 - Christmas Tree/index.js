const elementDays = document.getElementById('days');

const currentDate = new Date();
const currentDay = currentDate.getTime();

const christmasDay = new Date(2022, 11, 25);

const timeDifference = christmasDay.getTime() - currentDay;
const daysDifference = timeDifference / (1000 * 3600 * 24);

elementDays.innerHTML = Math.round(daysDifference);
