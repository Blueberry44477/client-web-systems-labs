import { words, numbers } from './variables.js';

function displayVariables(word: string = "Default", num: number = 0) {
    console.log(word + ' ' + num);
}

displayVariables(words[0], numbers[0]);