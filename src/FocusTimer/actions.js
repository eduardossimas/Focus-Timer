import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}

export function moreFive() {
    let min = Number(el.minutes.textContent);
    let seg = Number(el.seconds.textContent);

    min = min + 5;
    if (min > 60) {
        min = 60;
    }
    timer.updateDisplay(min, seg);
}

export function lessFive() {
    let min = Number(el.minutes.textContent);
    let seg = Number(el.seconds.textContent);

    if(min <= 5) {
        return;
    } else {
        min = min - 5;
    }
    timer.updateDisplay(min, seg);
}