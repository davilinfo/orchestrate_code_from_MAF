// Hello World App logic

const greetingEl = document.getElementById('greeting');
const helloBtn = document.getElementById('helloBtn');
const counterEl = document.getElementById('counter');

const MESSAGE = 'Hello, World!';
let clickCount = 0;
let typingTimeoutId = null;

/**
 * Types out the given text into the target element, one character at a time.
 * @param {HTMLElement} el - The element to type into.
 * @param {string} text - The text to type.
 * @param {number} speed - Delay between characters in ms.
 */
function typeText(el, text, speed = 100) {
    if (typingTimeoutId) {
        clearTimeout(typingTimeoutId);
    }
    el.textContent = '';
    let index = 0;

    function typeNextChar() {
        if (index < text.length) {
            el.textContent += text.charAt(index);
            index += 1;
            typingTimeoutId = setTimeout(typeNextChar, speed);
        }
    }

    typeNextChar();
}

function handleHelloClick() {
    clickCount += 1;
    counterEl.textContent = `Clicked ${clickCount} time${clickCount === 1 ? '' : 's'}`;
    typeText(greetingEl, MESSAGE);
}

window.addEventListener('DOMContentLoaded', () => {
    typeText(greetingEl, MESSAGE);
});

helloBtn.addEventListener('click', handleHelloClick);
