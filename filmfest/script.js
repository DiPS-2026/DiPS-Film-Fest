// ===== COUNTDOWN TIMER =====
// Event date: August 14, 2026
const TARGET_DATE = new Date('2026-08-14T00:00:00+05:30');

function updateCountdown() {
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
        document.getElementById('countdown-days').textContent = '000';
        document.getElementById('countdown-hours').textContent = '00';
        document.getElementById('countdown-minutes').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown-days').textContent = String(days).padStart(3, '0');
    document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
}

// Update every second for smooth ticking
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== SMOOTH SCROLL FOR ARROW BUTTON =====
document.querySelector('.arrow-button')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#navigation')?.scrollIntoView({ behavior: 'smooth' });
});

// ===== ACTIVE NAV HIGHLIGHTING =====
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});




