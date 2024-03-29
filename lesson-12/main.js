// eventloop

// console.log('a')
//
// setTimeout(() => {
//     console.log('timeout')
// }, 1000)
//
// console.log('b')
//
// console.log('c')
// порядок срабатывания - 'a', 'b', 'c', 'timeout'


// function a() {
//     b()
//     console.log('a')
// }
//
// function b() {
//     c()
//     console.log('b')
// }
//
// function c() {
//     console.log('c')
// }
//
// a()
// порядок вывода - 'c', 'b', 'a'
// стэк вызова работает по принципу 'последний пришел первый ушел' (так же принцип называется stack, lifo) в случае если, например, одна ф-ция вызывает другую, другая третью и тд
// в js только один стэк выполнения

// a, b, c в данном случае срабатывают по очереди и уходят из стэка сразу
// все асинхронное, в том числе setTimeOut, попадает в очередь(queue) и срабатывает только после того, как освободился stack
// даже если бы в setTimeOut timeOut был бы 0, console.log в нем все равно бы сработал последним, так как все асинхронные операции в js (колбэки, запросы на сервер) после выполнения с помощью web apis отправляются в очередь, а уже из этой очереди в stack вызова


// console.log('a')
//
// setTimeout(() => {
//     console.log('timeout1')
// }, 1000)
//
// setTimeout(() => {
//     console.log('timeout2')
// }, 0)
//
// console.log('b')
// порядок срабатывания - 'a', 'b', 'timeout2', 'timeout1'


// setTimeout(() => {
//     console.log('timeout1')
// }, 1000)
//
// setTimeout(() => {
//     console.log('timeout2')
// }, 1000)
//
// setTimeout(() => {
//     console.log('timeout3')
// }, 1000)
// порядок срабатывания - 'timeout1', 'timeout2', 'timeout3'
// порядок сохраняется, т.к они отправляются на web apis по порядку с разницей в долю секунды

// синхронный код попадает сразу в стэк вызова, весь асинхронный попадает в очередь, чтобы не тормозить страницу/приложение
// существует три основные очереди - macrotasks, rendering и microtasks

// между macrotasks и rendering рендерингу отдается приоритет, задачи из этой очереди выполняются в первую очередь
// макротаски - это обработчики событий (click, focus...), setTimeout, setInterval
// рендеринг - отрисовка стилец на странице, перерендеринг, скролл


// микротаски - это промисы, запросы на сервер
// eventloop будет выполнять очередь с микротасками первой, пока они не закончатся (даже если в процессе выполнения она будет пополняться новыми микротасками)
// за тем будет идти очередь rendering (там в отличие от микротасок пополнение очереди во время выполнения других тасок не приводит к продолжению выполнения этой очереди)

// eventloop обращается к этим очередям только когда стек вызова пуст
// в целом, eventloop - это некий цикл, который следит за всеми этими очередями


// function a() {
//     console.log('a')
// }
//
// function b() {
//     console.log('b')
// }
//
// function c() {
//     console.log('c')
// }
//
// a()
//
// new Promise(function (res, rej) {
//     console.log('create promise')
//     setTimeout(function timer() {
//         res(console.log('timeout'))
//     }, 1000)
// })
//
// b()
// c()
// порядок - 'a', 'create promise', 'b', 'c', 'timeout'
// создание промиса - СИНХРОННАЯ ФУНКЦИЯ, поэтому она сразу попадет в стэк выполнения
// функция ASYNC работает аналогично new Promise, AWAIT - аналогично res или then


// setTimeout(function timer() {
//     console.log('timeout1')
// }, 5000)
//
// setTimeout(function timer() {
//     console.log('timeout2')
// }, 3000)
//
// setTimeout(function timer() {
//     console.log('timeout3')
// }, 1000)
//
// setTimeout(function timer() {
//     console.log('timeout4')
// }, 1000)
// порядок 'timeout3', 'timeout4', 'timeout2', 'timeout1'
// так как web api отдает в очередь setTimeout только после отсчета самого таймаута, то они будут срабатывать он меньшего таймаута к большему (при равных таймаутах - по порядку объявления в коде)


// setTimeout(function timer() {
//     console.log(1)
// }, 0)
//
// new Promise(function (res, rej) {
//     console.log(2)
//     res()
// }).then(() => {
//     console.log(3)
// })
//
// console.log(4)
// порядок 2 4 3 1
// создание промиса и логирование - синхронные функции - вызовутся по порядку
// setTimeOut и then сначала отправятся на web apis, откуда в свои очереди
// в очередях первым будет then, т.к это микротаска (срабатывание промиса)



setTimeout(() => {
    console.log('s1')
}, 0)

setTimeout(() => {
    console.log('s2')
}, 1000)

new Promise(function (res, rej) {
    console.log('p1')
    res()
    console.log('p2')
}).then(() => {
    console.log('p3')
})

console.log('w1')

async function test1() {
    console.log('a1')
    await test2() // test2.then(() => { - АНАЛОГИЧНО
    console.log('a2')
}

async function test2() {
    console.log('a3')
}

test1()

console.log('w2')
// p1 -> p2 -> w1 -> a1 -> a3 -> w2 -> p3 -> a2 -> s1 -> s2