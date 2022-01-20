const push = document.querySelector('.push');
const push1 = document.querySelector('.push1');
const push2 = document.querySelector('.push2');
const push3 = document.querySelector('.push3');
const menu = document.querySelector('.menu');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
// const select = document.querySelector('.select');
const title = document.querySelector('.title');
const text = document.querySelectorAll('.text');
// [text[0], text[1], text[2], text[3]]

// -------------------------tasks
const ar = [
    11, 2, 3, 4, 25, 6, 7, 8, 9, 10, 12,
]
const txt = 'string rar array'

// --------------------task 1

// function task1(a, b, c) {
//     return a + b + c;
// }
// title.innerHTML = task1(1, 5, 8)

// function task2(a, b, c) {
//     return Math.max(a, b, c);
// }

// title.innerHTML = task2(1, 2, 1)

// ---------------------task3

// function task3(a, b, c) {
//     if (b === 0) return c;
//     else return a / b
// }

// title.innerHTML = task3(2, 1, 3)

// --------------------task4

// function task4(block, array) {
//     return block.innerHTML = array.join(' ')
// }

// task4(title, ar)

// --------------------task5

// function task5(array, block) {
//     serchNumber = +input1.value
//     block.innerHTML = array.filter(function (element) {
//         if (element === serchNumber) return element;
//         else return console.log('error')
//     })

// }
// push.onclick = () => {
//     task5(ar, title)
// }

// function task6(array, out) {
//     return out.innerHTML = array.splice('').reverse().join(' ')
// }
// task6(ar, title)

// -----------task7

// function clear(text) {
//     return text.trim().toLowerCase()
// }
// function play(text, callback) {
//     return callback(text)
// }

// push.onclick = () => {
//     title.innerHTML = play(input1.value, clear)
// }

// ------------------task10
