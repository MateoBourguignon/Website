const texts = [
    "developer.",
    "designer.",
    "problem solver.",
    "innovator."
];
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        document.getElementById("dynamic-text").innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    } else {
        setTimeout(() => {
            eraseText();
        }, 2000); // Adjust display time here
    }
}

function eraseText() {
    if (charIndex > 0) {
        document.getElementById("dynamic-text").innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Adjust erasing speed here
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500); // Adjust delay before typing next text
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dynamic-text").classList.add('typing');
    typeWriter();
});

