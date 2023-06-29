import fetch from "node-fetch";


// ПОВТОРЕНИЕ ПРЕДЫДУЩЕГО УРОКА С ДОБАВЛЕНИЕМ ЗАПРОСА К GOOGLE
// const server = {
//     getData() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('Promise resolved') // приходит в PromiseResult
//                 // rej('oops, something wen wrong')
//             }, 1000)
//         })
//     }
// }
//
// const pr = server.getData()
// console.log(pr)
//
// pr.then((data) => { // каждый promise.then при отработке resolve возвращает новый promise (можем создавать цепочки промисов)
//     console.log('data', data)
//     return fetch('https://google.com/?query=js')
// })
//     .then((dataFromGoogle) => {
//         console.log('dataFromGoogle', dataFromGoogle)
//     })
// pr.catch((err) => {
//     console.log('ERROR', err)
// }) // catch срабатывает только при срабатывании rejected (при ошибке)


// ПРИМЕР ЦЕПОЧКИ ПРОМИСОВ СО СРАБАТЫВАЮЩИМИ ПОСЛЕДОВАТЕЛЬНО Ф-ЦИЯМИ В THEN
// ДОБИВАЕМСЯ ЭТОГО ПРИ ПОМОЩИ RETURN ПРОМИСА (FETCH) В КАЖДОМ THEN
fetch('https://google.com/?query=js')
    .then(() => {
        console.log('Response from google')
    })
    .then(() => {
        return fetch('https://yahoo.com/?query=js')
    })
    .then(() => {
        console.log('Response from yahoo')
        return fetch('https://duckduckgo.com/?query=js')
    })
    .then(() => {
        console.log('Response from duckduckgo')
    })


// СТАТИЧЕСКИЕ МЕТОДЫ КЛАССА PROMISE
// all || race || allSettled || any

// метод all нужен тогда, когда нам нужно, чтобы все (три) промисы зарезолвились, и только после этого использовать данные из них

const promise1 = fetch('https://google.com/?query=js')
const promise2 = fetch('https://yahoo.com/?query=js')
const promise3 = fetch('https://duckduckgo.com/?query=js')

// Promise.all(...) возвращает промис у которого в data будет массив данных от промисов в том порядке, в котором они были переданы в атрибуты Promise.all
const bigPromise = Promise.all([promise1, promise2, promise3])

bigPromise.then((data) => {
    console.log(data[0]) // data от promise1
    console.log(data[1]) // data от promise2
    console.log(data[2]) // data от promise3
}).catch((err) => {
    console.log('ERROR', err) // если ошибка хотя бы в одном промисе, Promise.all выдает ошибку (мы попадаем в catch)
})

// Promise.race так же принимает массив промисов и возвращает тот, который первый отработает (в том числе и ошибку)

Promise.race([promise1, promise2, promise3])
    .then((data) => {
        console.log('data', data)
    }).catch((err) => {
    console.log('ERROR', err) // ошибку от неправильного url в запросе мы получим быстрее, чем ответ от любого другого запроса, в таком случае перейдем в catch
    // в случае, если какой-то запрос сработает быстрее ошибки, мы перейдем в then
})


// Promise.allSettled возвращает массив обектов, в каждом объекте есть свойство статус
// если статус fulfilled, то в объекте будет свойство value с данными от запроса
// если статус rejected - свойство reason с причиной ошибки

Promise.allSettled([promise1, promise2, promise3])
    .then((data) => {
        console.log(data)
        // }).catch((err) => { catch в Promise.allSettled не отрабатывает НИКОГДА => это метод всегда резолвится
        // console.log('ERROR', err)
    })


// Promise.any вернет первый зарезолвившийся промис, если хотя бы один промис зарезолвился
// если все промисы зареджектились, то в catch он вернет объект c массивом ошибок

Promise.any([promise1, promise2, promise3])
    .then((data) => {
        console.log('data', data)
    }).catch((err) => {
    console.log('ERROR', err) // здесь выведется объект с массивом ошибок, если во всех промисах будут ошибки
})


// ASYNC, AWAIT
// async указывает на то, что функция будет выполняться асинхронно
// await указывает на то, что js сначала дождется ответа от запроса, и только за тем запишет этот ответ в переменную
// без await в переменную dataFromGoogle мы бы записали промис

const func = async () => {
    // setIsLoading(true)
    try {
        console.log('start google request')
        const dataFromGoogle = await fetch('https://google.com/?query=js')
        console.log(dataFromGoogle)

        console.log('start yahoo request')
        const dataFromYahoo = await fetch('https://yahoo.com/?query=js') // последующие fetch будут запускаться только после того, как отработал предыдущий и записался в переменную
        console.log(dataFromYahoo)

        console.log('start duckduckgo request')
        const dataFromDuckduckgo = await fetch('https://duckduckgo.com/?query=js')
        console.log(dataFromDuckduckgo)
    }
    catch (err) {
        console.log('ERROR', err) // минусы такого подхода, что мы не можем отработать с отдельной ошибкой
    }
    finally
    {
        // setIsLoading(false)
    }
}

// вне функции async наш код будет продолжать работать дальше

console.log('func', func()) // функция func написанная при помощи async возвращает промис