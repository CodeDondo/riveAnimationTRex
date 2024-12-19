import { Dance } from "./riveController.js";
import { rave } from "./riveController.js";

let danceButton = document.getElementById('danceButton');


const dance = () => {
    Dance.fire();
    rave();
}


danceButton.addEventListener('click', () => {
    dance();    
});