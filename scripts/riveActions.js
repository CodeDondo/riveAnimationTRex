import { Dance } from "./riveController.js";

let danceButton = document.getElementById('danceButton');

const dance = () => {
    Dance.fire();
}

danceButton.addEventListener('click', () => {
    dance();    
});