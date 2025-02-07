document.getElementById("tak").addEventListener("click", function() {
    document.getElementById("pytanie").style.display = "none";  
    document.getElementById("walentynka").style.display = "block"; 

    setInterval(createHeart, 300);
});

function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.position = "absolute";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
