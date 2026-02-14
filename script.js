// Animar corazones flotando en el fondo
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (6 + Math.random() * 4) + 's';
    heart.style.opacity = 0.6 + Math.random() * 0.4;
    heart.style.transform = `scale(${0.7 + Math.random() * 0.6})`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 700);

// ...existing code...
const btnRandom = document.querySelector("#random-btn")

function moverAleatoriamente(btn){
    btn.style.fontWeight = "bolder";
    btn.style.position = "absolute";
    btn.style.top = Math.floor(Math.random() * 90 + 5)+ "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5)+ "%";
}

if(btnRandom) {
    btnRandom.addEventListener("mouseenter", function (e){
        moverAleatoriamente(e.target)
    })
}