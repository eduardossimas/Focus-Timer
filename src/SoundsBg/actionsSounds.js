import * as sounds from './sounds.js';
import * as elSounds from './elementSounds.js';
import state from './stateSounds.js';

function pauseAllSounds(exceptSound) {
    if (exceptSound !== 'musicForest') {
        sounds.musicForest.pause();
        state.musicForest = false;
        elSounds.musicForest.classList.remove('secondary');
    }
    if (exceptSound !== 'musicRain') {
        sounds.musicRain.pause();
        state.musicRain = false;
        elSounds.musicRain.classList.remove('secondary');
    }
    if (exceptSound !== 'musicCoffee') {
        sounds.musicCoffee.pause();
        state.musicCoffee = false;
        elSounds.musicCoffee.classList.remove('secondary');
    }
    if (exceptSound !== 'musicFire') {
        sounds.musicFire.pause();
        state.musicFire = false;
        elSounds.musicFire.classList.remove('secondary');
    }
}

export function toggleMusicForest() {
    pauseAllSounds('musicForest');

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
    pauseAllSounds('musicRain');

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
    pauseAllSounds('musicCoffee');

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
    pauseAllSounds('musicFire');

    let aux = elSounds.musicFire.classList.toggle('secondary');

    if(aux) {
        sounds.musicFire.play();
        state.musicFire = true;
    } else {
        sounds.musicFire.pause();
        state.musicFire = false;
    }
}
