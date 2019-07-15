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
    console.log(Math.floor(Math.random() * 21))
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
    //console.log(foods[Math.floor(Math.random() * foods.length)]);
    const len = foods.length - 1;
    const num = Math.floor(Math.random()*len);
    return foods[num];
}
console.log(randomFood());

function randomStudent() {
   // console.log(students[Math.floor(Math.random() * students.length)]);
   const len = students.length - 1
   const num = Math.floor(Math.random()*len);
   return students[num];
}
console.log(randomStudent());

// function randomGroup() {
//     for(let i = 0; i < 3; i++) {
//         randomStudent();
//     }
// }
function randomGroup(){
        return randomStudent();
    }
for (let i=0; i<3; i++){
    console.log(randomGroup());
}

// just a random number generator V
// const multiplier = 1000000;

// function rand(){
//     const decimal = Math.random();
//     const timesx = decimal*multiplier;
//     const final = Math.floor(timesx);

//     return final
// }

//     console.log(rand());