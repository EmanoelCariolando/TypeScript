"use strict";
//-----------------------------CLASS NOTES-----------------------------\\
//------------------- declare variables -------------------\\
let nick = 'manel'; //declare a variable type string
let number = 10; //declare a variable type number
let boolean = true; //declare a variable type boolean
//------------------- declare arrays -------------------\\
let array = [1, 2, 3, 4, 5]; //declare a variable type array of numbers
let names = ['manel', 'jose', 'pedro']; //declare a variable type array of strings
let values = ['manel', 'jose', 'pedro']; //declare a variable type array of strings or arrays type numbers
//------------------- function example -------------------\\
function firstUp(neime) {
    let letter = neime.charAt(0).toUpperCase();
    return letter + neime.substring(1);
}
let Newnames = ['manel', 'jose', 'pedro', 'jesus', 90]; // Even if there is a number in the array, it will work because of if
names.forEach((name) => {
    if (typeof name === 'string') {
        console.log(name.toUpperCase());
    }
});
function takeInfo(user) {
    if (user.age !== undefined) {
        return `seu nome é ${user.name} e você tem ${user.age} anos`;
    }
    else {
        return `seu nome é ${user.name}`;
    }
}
;
let persona = {
    name: 'manel',
    age: 25
};
console.log(takeInfo(persona));
//------------------ make one type -----------------\\
function showNumber(newAge /* NewInterface can also be used */) {
    if (typeof newAge === 'string') {
        console.log(showNumber(newAge.toUpperCase()));
    }
}
;
showNumber(10);
showNumber('10');
let input = document.querySelector('#one'); // to use the input, it is necessary to use the "as HTMLInputElement"
console.log(input.value);
function takeDirection(text, direction) {
    return input.innerHTML = `<div>${text} ${direction}</div>`;
}
takeDirection('texto', "right");
function makeRequisition(url, method) {
    //...........
}
let url = 'http://localhost:3000/data';
let method = 'GET';
makeRequisition('https://api.example.com/data', 'GET');
const sum = (n1, n2) => {
    return n1 + n2;
};
const subtract = (n1, n2) => {
    return n1 - n2;
};
const multiplication = (n1, n2) => {
    return n1 * n2;
};
const division = (n1, n2) => {
    return n1 / n2;
};
