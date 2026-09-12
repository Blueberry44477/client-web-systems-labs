const word: string = "Hello, TS";
const number: number = 1;
const isActive: boolean = false;

// Arrays
export const words: string[] = [word, "Hello, World"];
export const numbers: number[] = [2, 4, 6];

console.log(
`Word: ${word}; Number: ${number}; Boolean: ${isActive}
Words: ${words.join(" | ")}; Numbers: ${numbers}`
);