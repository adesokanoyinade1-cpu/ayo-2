document.addEventListener("click", function() {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "30px";
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
});
