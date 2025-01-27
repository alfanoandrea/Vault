document.addEventListener("DOMContentLoaded", function () {
    let text;
    if (window.location.pathname.includes("about.html"))
        text = "Who is\nAlfanowski?";
    else if (window.location.pathname.includes("projects.html"))
            text = "Alfanowski's\nToolkit";
    else 
        text = "Alfanowski's\nVault";

    const typedText = document.getElementById("typed-text");
    const speed = 100; // Velocità di digitazione in ms
    const pauseTime = 5000; // Pausa prima della cancellazione in ms
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && index < text.length) {
            // Scrive il testo
            if (text.charAt(index) === '\n') {
                typedText.innerHTML += '<br>';
            } else {
                typedText.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(typeEffect, speed);
        } else if (isDeleting && index > 0) {
            // Cancella il testo
            if (text.charAt(index - 1) === '\n') {
                typedText.innerHTML = typedText.innerHTML.slice(0, -4); // Rimuove <br>
            } else {
                typedText.innerHTML = typedText.innerHTML.slice(0, -1);
            }
            index--;
            setTimeout(typeEffect, speed / 2); // Velocità di cancellazione più veloce
        } else if (!isDeleting && index === text.length) {
            // Pausa prima di cancellare
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
        } else if (isDeleting && index === 0) {
            // Pausa prima di riscrivere
            isDeleting = false;
            setTimeout(typeEffect, pauseTime / 2);
        }
    }

    typeEffect();
});