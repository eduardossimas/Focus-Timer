import * as actions from './actionsSounds.js';
import { controls } from './elementSounds.js';

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] != 'function') {
            return;
        }

        actions[action]();
    })
}