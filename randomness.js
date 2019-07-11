//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
function randomNumber() {
    console.log(Math.random() * 21)
}
randomNumber();
function randomLetter() {
    //console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);
    const len = alphabet.length - 1;
    const num = Math.floor(Math.random() * len);
    return alphabet[num];
}
console.log(randomLetter());
function randomFood() {
    console.log(foods[Math.floor(Math.random() * foods.length)]);
}
randomFood();
function randomStudent() {
    console.log(students[Math.floor(Math.random() * students.length)]);
}
randomStudent();
function randomGroup() {
    for(let i = 0; i < 3; i++) {
        randomStudent();
    }
}
randomGroup();