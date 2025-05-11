function updateTimer() {
    const startDate = new Date(document.getElementById('startDate').textContent);
    const now = new Date();

    let months = 0;
    let days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    
    while (days >= 30) {
        days -= 30;
        months++;
    }

    const hours = Math.floor((now - startDate) / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor((now - startDate) / (1000 * 60)) % 60;
    const seconds = Math.floor((now - startDate) / 1000) % 60;

    // Mostrar con texto en español
    document.getElementById('months').innerText = months + (months === 1 ? " mes" : " meses");
    document.getElementById('days').innerText = days + (days === 1 ? " día" : " días");
    document.getElementById('hours').innerText = hours + (hours === 1 ? " hora" : " horas");
    document.getElementById('minutes').innerText = minutes + (minutes === 1 ? " minuto" : " minutos");
    document.getElementById('seconds').innerText = seconds + (seconds === 1 ? " segundo" : " segundos");
}

setInterval(updateTimer, 1000);
updateTimer();

function togglePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

// Pequeña sorpresa de confeti al cargar
window.onload = function() {
    setTimeout(function() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }, 1500);
};