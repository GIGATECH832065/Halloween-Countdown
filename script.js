const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const halloweenTime = new Date(`${currentYear}-10-31T00:00:00`);

// Set background year
year.innerText = currentYear;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = halloweenTime - currentTime;

  if (diff < 0) {
    days.innerHTML = 0;
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    return;
  }

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h.toString().padStart(2, '0');
  minutes.innerHTML = m.toString().padStart(2, '0');
  seconds.innerHTML = s.toString().padStart(2, '0');
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();
