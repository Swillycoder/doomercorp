const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const gin_img = new Image();
gin_img.src = 'https://raw.githubusercontent.com/Swillycoder/doomercorp/main/gin.png';

const lines = [
    "DOOMER CORP HACK IN PROGRESS...",
    "LOADING FILES... BULLSHIT.cab, WAGMI.lol, DEGEN.fail",
    "BLACKPEBBLE - OPERATION BEANFLICKER - INITIALISED",
    "AWAITING G.A.Y ENCRYPTION CORRUPTION FORMULA",
    "...-...-...... G.A.Y ENCRYPTION CRACKED....",
    "LOADING DEGEN REFORMATTING PROTOCOL...",
    "DEGENS, REFORMATTED...",
    "OBEY BLACKPEBBLE, OBEY BLACKPEBBLE, OBEY BLACKPEBBLE",
    ".....",
    ".....",
    ".....",
    ".....",
    ".....",
    "SWILLYCODER 2025 - ARENA HANDLE - 5pam5pam",
    "I DON'T LIKE SPAM!!!!!",
];

let lineIndex = 0;
let charIndex = 0;

function typeText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.font = "15px Courier";
    ctx.fillStyle = "green";

    for (let i = 0; i < lineIndex; i++) {
        ctx.fillText(lines[i], 50, 100 + i * 30);
    }

    if (lineIndex < lines.length) {
        ctx.fillText(lines[lineIndex].substring(0, charIndex), 50, 100 + lineIndex * 30);
        
        if (charIndex < lines[lineIndex].length) {
            charIndex++;
            setTimeout(typeText, 100);
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
    ctx.fillStyle = "black"; // Change this to any color you want
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gin_img, 80, 0)
}

typeText();
