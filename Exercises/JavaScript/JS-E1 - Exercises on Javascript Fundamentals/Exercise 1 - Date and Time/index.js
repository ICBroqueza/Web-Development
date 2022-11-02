const elementMonth = document.getElementById('month');
const elementTime = document.getElementById('time');
const elementDay = document.getElementById('day');

const m = new Date();

displayMonth = m.toLocaleString('en-US', { month: 'long', day: '2-digit' });

displayTime = m.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
});

displayDay = m.toLocaleString('en-US', { weekday: 'long' });

time.innerHTML = displayTime;
month.innerHTML = displayMonth;
day.innerHTML = displayDay;
