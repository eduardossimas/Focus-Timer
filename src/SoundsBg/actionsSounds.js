import * as sounds from './sounds.js';
import * as elSounds from './elementSounds.js';
import state from './stateSounds.js';

export function toggleMusicForest() {
    let aux = elSounds.musicForest.classList.toggle('secondary');

    if(aux) {
        sounds.musicForest.play();
        state.musicForest = true;
    } else {
        sounds.musicForest.pause();
        state.musicForest = false;
    }
}

export function toggleMusicRain() {
    let aux = elSounds.musicRain.classList.toggle('secondary');

    if(aux) {
        sounds.musicRain.play();
        state.musicRain = true;
    } else {
        sounds.musicRain.pause();
        state.musicRain = false;
    }
}

export function toggleMusicCoffee() {
    let aux = elSounds.musicCoffee.classList.toggle('secondary');

    if(aux) {
        sounds.musicCoffee.play();
        state.musicCoffee = true;
    } else {
        sounds.musicCoffee.pause();
        state.musicCoffee = false;
    }
}

export function toggleMusicFire() {
    let aux = elSounds.musicFire.classList.toggle('secondary');

    if(aux) {
        sounds.musicFire.play();
        state.musicFire = true;
    } else {
        sounds.musicFire.pause();
        state.musicFire = false;
    }
}
