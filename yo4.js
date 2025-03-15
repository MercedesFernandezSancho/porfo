document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenido al estilo retro ochentoso!");

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert("Has hecho clic en una sección de tu portafolio.");
        });
    });

    const glowingText = document.querySelectorAll(".glow-text");
    let glowState = true;

    setInterval(() => {
        glowingText.forEach(text => {
            text.style.textShadow = glowState
                ? "0px 0px 20px #00FF99, 0px 0px 40px #00FF99"
                : "0px 0px 5px #00FF99, 0px 0px 10px #00FF99";
        });
        glowState = !glowState;
    }, 1000);
});