import Sounds from "../constants/sounds";

const wrongSound_audio = new Audio(Sounds.WRONG_SOUND);
const correctSound_audio = new Audio(Sounds.CORRECT_SOUND);

export const playWrongSound_audio = () => {
   wrongSound_audio.play();
};

export const pauseWrongSound_audio = () => {
   wrongSound_audio.pause();
};

export const playCorrectSound_audio = () => {
   correctSound_audio.play();
};

export const pauseCorrectSound_audio = () => {
   correctSound_audio.pause();
};