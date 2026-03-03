// Data exata do início
const dataInicio = new Date("2025-09-02T00:00:00");

function atualizarTempo() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("relogio").innerHTML = 
        `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarTempo, 1000);

// Chuva de girassóis
document.getElementById("btnSurpresa").addEventListener("click", () => {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const flor = document.createElement("div");
            flor.className = "girassol-fall";
            flor.innerHTML = "🌻";
            flor.style.left = Math.random() * 100 + "vw";
            flor.style.fontSize = Math.random() * 20 + 20 + "px";
            document.body.appendChild(flor);
            setTimeout(() => flor.remove(), 4000);
        }, i * 150);
    }
});
