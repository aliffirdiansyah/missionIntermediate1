// src/js/hero.js
const words = ["GATEWAY TO SUCCESS", "LEARNING PLATFORM", "KEY TO GROWTH", "FUTURE OF EDUCATION"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const delay = 1000;

export function typeEffect() {
    const element = document.getElementById("typewriter");
    if (!element) return; // biar gak error kalau belum ada
    const currentWord = words[index];
    element.textContent = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, speed);
    }
}
