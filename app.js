window.addEventListener("load", () => {

    // Verificar si el dispositivo tiene pantalla táctil
    if (!("ontouchstart" in window)) {
        alert("⚠️ Esta práctica solo funciona en dispositivos táctiles 📱");
        document.body.innerHTML = "<h2>Solo disponible en pantallas táctiles 📱</h2>";
        return;
    }

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let dibujando = false;
    let color = document.getElementById("color").value;
    let grosor = document.getElementById("grosor").value;

    document.getElementById("color").addEventListener("change", e => {
        color = e.target.value;
    });

    document.getElementById("grosor").addEventListener("input", e => {
        grosor = e.target.value;
    });

    document.getElementById("limpiar").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Evento touchstart
    canvas.addEventListener("touchstart", (e) => {
        let toque = e.touches[0];
        ctx.beginPath();
        ctx.moveTo(toque.clientX, toque.clientY);
        dibujando = true;
    });

    // Evento touchmove
    canvas.addEventListener("touchmove", (e) => {
        if (!dibujando) return;
        let toque = e.touches[0];
        ctx.lineTo(toque.clientX, toque.clientY);
        ctx.strokeStyle = color;
        ctx.lineWidth = grosor;
        ctx.lineCap = "round";
        ctx.stroke();
    });

    // Evento touchend
    canvas.addEventListener("touchend", () => {
        dibujando = false;
    });

});
