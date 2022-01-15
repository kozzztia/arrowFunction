const push = document.querySelector('.push');
const menu = document.querySelector('.menu');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
// const select = document.querySelector('.select');
const title = document.querySelector('.title');
const text = document.querySelectorAll('.text');
[text[0], text[1], text[2], text[3]]

// -------------------------tasks
const ar = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]
const txt = 'string war array'
// --------------------------------test
function f1(array, myFunk, out) {
    out.innerHTML = myFunk(array)
}
function joinArray(array) {
    return array.join('_')
}
function joinArrayStar(array) {
    return array.join('*')
}
function splitArray(array) {
    return array.split('')
}
function splitArraySpace(array) {
    return array.split(' ')
}
push.onclick = () => {
    f1(ar, joinArray, text[0])
    f1(ar, joinArrayStar, text[2])
    f1(txt, splitArray, text[1])
    f1(txt, splitArraySpace, text[3])
}



