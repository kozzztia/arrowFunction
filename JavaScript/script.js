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
    11, 2, 3, 4, 25, 6, 7, 8, 9, 10, 12
]
const txt = 'string war array'
// --------------------------------test
// function f1(array, myFunk, out) {
//     out.innerHTML = myFunk(array)
// }
// function joinArray(array) {
//     return array.join('_')
// }
// function joinArrayStar(array) {
//     return array.join('*')
// }
// function splitArray(array) {
//     return array.split('')
// }
// function splitArraySpace(array) {
//     return array.split(' ')
// }
// push.onclick = () => {
//     f1(ar, joinArray, text[0])
//     f1(ar, joinArrayStar, text[2])
//     f1(txt, splitArray, text[1])
//     f1(txt, splitArraySpace, text[3])
// }
// function squad(item) { return item * 2 };
// const arr2 = ar.map(squad)
// console.log(arr2)

// function fixUzer(text) {
//     return text.trim().toLowerCase()
// }
// function fixUzer2(text) {
//     return text.trim()
// }
// function outText(text, out, callback) {
//     out.innerHTML = callback(text)
// }

// push.onclick = () => {
//     text = input1.value;
//     outText(text, title, fixUzer2)
// }

// function pageLoader() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => {
//             console.log('Послал запрос')
//             console.log('Ответ сервера')
//             console.log(json);
//             fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
//                 .then(response => response.json())
//                 .then(json => {
//                     console.log('Послал запрос')
//                     console.log('Ответ сервера')
//                     console.log(json);

//                 })
//         })
// }

// async function pageLoader(callback) {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     callback(data);
// }
// push.onclick = () => {
//     pageLoader()

// }


let counter = 0;

// function f1() {
//     console.log(count)
//     console.log(this)
//     this.textContent = count;
//     count++;
// }

// // push.addEventListener('click', f1)

// // -------------------------------------arrowFunction
// // const f2 = () => {
// //     console.log(count)
// //     console.log(this)
// //     this.textContent = count;
// //     count++;
// // }

// // push1.addEventListener('click', f2)


// // f1.call(text[1]);
// // f1.call(text[2]);
// // f1.call(text[3]);

// push.addEventListener('click', () => {
//     f1.call(push);
//     f1.call(push1);
//     f1.call(push2);
//     f1.call(push3);
// })

// function f3(count) {
//     console.log(count)
//     console.log(this)
//     this.textContent = count;
// }

// push3.addEventListener('click', () => {
//     count++;
//     f3.call(push2, count)
// })

// function sum1(a, b) {
//     return this.innerHTML = a + b
// }

// push.addEventListener('click', () => {
//     sum1.call(push1, 2, 1)
//     sum1.apply(push2, [3, 2])
// })
// function gogo() {
//     this.innerHTML = counter;
//     counter++;
// }
// function count(array) {
//     this.innerHTML = array.map(item => item * 3)
// }
// const f5 = gogo.bind(text[0])
// const f6 = count.bind(text[1])
// push.onclick = () => {
//     f5()
//     f6(ar)
// }
// gogo.call(title, counter)
// count.call(text[1], ar)


// function f10(...args) {
//     this.innerHTML = args.reduce((sum, item) => sum - item)
//     console.log(this)
// }
// const f101 = f10.bind(title);

// push.onclick = () => f101(...ar)

// ---------------------task 1

function task1() {
    console.log(this)
    this.innerHTML = 'Task1'
}
// const task1b = task1.bind(push)


// ------------------task2

// push.onclick = () => {
//     task1.call(text[1])
// }
// ----------------------task3

function max3(a, b, c) {
    this.innerHTML = a + b + c;
}

// max3.call(title, 2, 3)

// ---------------------task4

// push.onclick = () => max3.call(text[1], 22, 13);

// -----------------------task5

// function task5() {
//     console.log(this.textContent);
//     if (this.textContent.length === 0) {
//         this.textContent = "none";
//         console.log(this.textContent);
//     }
// }
// task5.call(title)
// task5.call(push3)

// ---------------------task6

// task1.apply(text[3])

// -------------------task7

// max3.apply(text[2], [1, 2, 3,])

// ----------------------task8
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// function rundomNumber(numberOfRundom) {
//     return Math.floor(Math.random() * numberOfRundom.length)
// }

// function findNumber(arr, callback) {
//     let num = arr[callback(arr)];
//     this.innerHTML = num;
// }

// push.onclick = () => findNumber.call(title, number, rundomNumber)

//-------------------------------task9

function task9(...args) {
    const reduced = args.reduce((max, item) => max > item ? max : item)
    this.innerHTML = reduced
}

function sort9(array) {
    const sorted = array.sort((a, b) => b - a)
    this.innerHTML = sorted;
}
task9.apply(title, [1, 2, 3, 4, 5, 6, 66])
sort9.call(text[1], ar)
