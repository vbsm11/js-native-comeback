import fetch from "node-fetch";


// ПОВТОРЕНИЕ ПРЕДЫДУЩЕГО УРОКА С ДОБАВЛЕНИЕМ ЗАПРОСА К GOOGLE
const server = {
    getData() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res('Promise resolved') // приходит в PromiseResult
                // rej('oops, something wen wrong')
            }, 1000)
        })
    }
}

const pr = server.getData()
console.log(pr)

pr.then((data) => { // каждый promise.then при отработке resolve возвращает новый promise (можем создавать цепочки промисов)
    console.log('data', data)
    return fetch('https://google.com/?query=js')
})
    .then((dataFromGoogle) => {
        console.log('dataFromGoogle', dataFromGoogle)
    })
pr.catch((err) => {
    console.log('ERROR', err)
}) // catch срабатывает только при срабатывании rejected (при ошибке)



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