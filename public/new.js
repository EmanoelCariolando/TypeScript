"use strict";
//-----------------------------CLASS NOTES-----------------------------\\
//------------------- declare variables -------------------\\
var nick = 'manel'; //declare a variable type string
var number = 10; //declare a variable type number
var boolean = true; //declare a variable type boolean
//------------------- declare arrays -------------------\\
var array = [1, 2, 3, 4, 5]; //declare a variable type array of numbers
var names = ['manel', 'jose', 'pedro']; //declare a variable type array of strings
var values = ['manel', 'jose', 'pedro']; //declare a variable type array of strings or arrays type numbers
//------------------- function example -------------------\\
function firstUp(neime) {
    var letter = neime.charAt(0).toUpperCase();
    return letter + neime.substring(1);
}
var Newnames = ['manel', 'jose', 'pedro', 'jesus', 90]; // Even if there is a number in the array, it will work because of if
names.forEach(function (name) {
    if (typeof name === 'string') {
        console.log(name.toUpperCase());
    }
});
function takeInfo(user) {
    if (user.age !== undefined) {
        return "seu nome \u00E9 ".concat(user.name, " e voc\u00EA tem ").concat(user.age, " anos");
    }
    else {
        return "seu nome \u00E9 ".concat(user.name);
    }
}
;
var persona = {
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
var input = document.querySelector('#one'); // to use the input, it is necessary to use the "as HTMLInputElement"
console.log(input.value);
function takeDirection(text, direction) {
    return input.innerHTML = "<div>".concat(text, " ").concat(direction, "</div>");
}
takeDirection('texto', "right");
function makeRequisition(url, method) {
    //...........
}
var url = 'http://localhost:3000/data';
var method = 'GET';
makeRequisition('https://api.example.com/data', 'GET');
var sum = function (n1, n2) {
    return n1 + n2;
};
var subtract = function (n1, n2) {
    return n1 - n2;
};
var multiplication = function (n1, n2) {
    return n1 * n2;
};
var division = function (n1, n2) {
    return n1 / n2;
};
