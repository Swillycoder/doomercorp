const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const matrix_bg = new Image();
const gin_degen = new Image();
gin_degen.src = 'https://raw.githubusercontent.com/Swillycoder/doomercorp/main/gin_degen.png';

const lines = [
    "DOOMER CORP HACK SUCCESSFUL...",
    "LOADING FILES... PROILE - GIN (G.A.Y OVERLORD)",
    "LOADING FILES... PROILE - KING DEGEN (G.A.Y DEGEN)",
    "BLACKPEBBLE - OPERATION SANDPAPER WANK - INITIALISED",
    "OBTAINING G.A.Y MAINFRAME CODES",
    "6969-0X0-696969 -  G.A.Y MAINFRAME CODES OBTAINED....",
    "LOADING DEGENERATE GAME THEORY...",
    "FINDING SOLUTIONS TO DEGEN WORLD DOMINATION...",
    ".....DESTROY DOOMER CORP AND G.A.Y MAINFRAME.....",
    "OBEY BLACKPEBBLE, OBEY BLACKPEBBLE, OBEY BLACKPEBBLE",
    ".....",
    ".....",
    ".....",
    ".....",
    "DATA AQUISITION SERVICES",
    "SWILLYCODER 2025 - ARENA HANDLE - 5pam5pam",
    "I DON'T LIKE SPAM!!!!!",
];

let lineIndex = 0;
let charIndex = 0;

function typeText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(matrix_bg,0,0);
    ctx.font = "30px pixelPurl";
    ctx.fillStyle = 'green';
    ctx.fillText("BLACKPEBBLE MAIN FRAME", 50, 60);
    ctx.font = "16px Courier";
    ctx.fillStyle = "green";

    for (let i = 0; i < lineIndex; i++) {
        ctx.fillText(lines[i], 50, 100 + i * 25);
    }

    if (lineIndex < lines.length) {
        ctx.fillText(lines[lineIndex].substring(0, charIndex), 50, 100 + lineIndex * 25);
        
        if (charIndex < lines[lineIndex].length) {
            charIndex++;
            setTimeout(typeText, 50);
        } else {
            charIndex = 0;
            lineIndex++;
            setTimeout(typeText, 150);
        }
    } else {
        setTimeout(fillScreen, 1000);
    }
}

function fillScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gin_degen, 0, 75)
}

typeText();
