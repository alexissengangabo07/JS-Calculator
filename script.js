// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

//var dot = document.querySelector('#dot');
//var addition = document.querySelector('#addition');
//var multiplication = document.querySelector('#multiplication');
//var soustraction = document.querySelector('#soustraction');
//var division = document.querySelector('#division');
//var equal = document.querySelector('#equal');
//var display = document.calculator.answer;

one.addEventListener('click', ()=>{
 display.value += '1';
});
two.addEventListener('click', ()=>{
 display.value += '2';
});
three.addEventListener('click', ()=>{
 display.value += '3';
});
four.addEventListener('click', ()=>{
 display.value += '4';
});
five.addEventListener('click', ()=>{
 display.value += '5';
});
six.addEventListener('click', ()=>{
 display.value += '6';
});
seven.addEventListener('click', ()=>{
 display.value += '7';
});
eight.addEventListener('click', ()=>{
 display.value += '8';
});
nine.addEventListener('click', ()=>{
 display.value += '9';
});
zero.addEventListener('click', ()=>{
 display.value += '0';
});
dot.addEventListener('click', ()=>{
 display.value += '.';
});
addition.addEventListener('click', ()=>{
 display.value += '+';
});
multiplication.addEventListener('click', ()=>{
 display.value += '*';
});
soustraction.addEventListener('click', ()=>{
 display.value += '-';
});
division.addEventListener('click', ()=>{
 display.value += '/';
});
equal.addEventListener('click', ()=>{
 display.value = eval(display.value);
});







