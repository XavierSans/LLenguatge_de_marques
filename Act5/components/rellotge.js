let temps = 0;

function iniciarRellotge() {
    setInterval(() => {
        temps++;

        let hores = Math.floor(temps / 3600);
        let minuts = Math.floor((temps % 3600) / 60);
        let segons = temps % 60;

        hores = hores.toString().padStart(2, '0');
        minuts = minuts.toString().padStart(2, '0');
        segons = segons.toString().padStart(2, '0');

        document.getElementById("rellotge").innerText =
            `Temps: ${hores}:${minuts}:${segons}`;

    }, 1000);
}