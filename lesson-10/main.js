// promises

// fetch('https://:books.com', (err, data) => {
//     if (err) {
//         console.log('oops, something wen wrong')
//     } else {
//         console.log(data)
//         fetch('https://:books.com/author', (err, data) => {
//             if (err) {
//                 console.log('oops, something wen wrong')
//             } else {
//                 console.log(data)
//                 fetch('https://:books.com/author/book', (err, data) => {
//                     if (err) {
//                         console.log('oops, something wen wrong')
//                     } else {
//                         console.log(data)
//                     }
//                 })
//             }
//         })
//     }
// })

axios.get('https://:books.com')
    .then((data) => {
        return axios.get(`https://:books.com/${data.authors}`)
    })
    .then((data) => {
        return axios.get(`https://:books.com/data.authors/${data.author}`)
    })
    .then((data) => {
        return axios.get(`https://:books.com/authors/author/${data.book}`)
    })
    .then((data) => {
        return axios.get(`https://:books.com/data.authors/author/book/${data.page}`)
    })
    .catch((err) => {
        console.log('ERROR', err)
    })


const server = {
    getData() {
        return new Promise((res, rej) => { // promise принимает ф-цию executor, которая принимает ф-ции resolved(отработка результата) и rejected(отработка ошибки)
            const data = ['book1', 'book2', 'book3'] // данные как будто берем с сервера
            // const data = [] // как будто данные не пришли
            setTimeout(() => { // setTimeOut имитирует запрос на сервер
                if (data.length > 0) {
                    res(data) // приходит в PromiseResult
                } else {
                    rej('oops, something wen wrong') // если не получили данные срабатывает ф-ция reject
                }
            }, 1000)
        })
    }
}

//let pr = server.getData()
// console.log(pr)

// pr.then((data) => { // каждый promise.then при отработке resolve возвращает новый promise (можем создавать цепочки промисов)
//console.log(data)
// })
// pr.catch((err) => {
//console.log('ERROR', err)
// }) // catch срабатывает только при срабатывании rejected (при ошибке)

server.getData() // ПРИМЕР ЦЕПОЧКИ ПРОМИСОВ, В СЛЕДУЮЩИЙ THEN ПРИХОДИТ ТО, ЧТО БЫЛО В РЕТУРНЕ ПРЕДЫДУЩЕГО, ПОЭТОМУ ВО ВТОРОЙ THEN ПРИДЕТ 3
    .then((data) => {
        console.log(data)
        return new Promise((res, rej) => {
            res(3)
        })
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log('ERROR', err) // сработает при любой ошибке независимо от количества then, следующее then после ошибочного не сработают
                                    // catch тоже возвращает промис, если в нем не выкидывать ошибку, то срабатывает resolve. то есть после catch цепочка будет срабатыват дальше
    })
    .finally(() => {
        console.log('finally') // блок finally сработает в любом случае, чаще всего в него передают окончание отображения загрузки (крутилки)
    })


const PromiseExample = (executor) => {
    const resolve = (data) => {
        return {
            state: fulfilled,
            data: data
        }
    }
    const reject = (err) => {
        return {
            state: rejected,
            data: err
        }
    }
    executor(resolve, reject)
} // примерно так выглядит promise под капотом
// у promise может быть 3 состояния (PromiseState) pending || fulfilled || rejected
// fulfilled способствует вызову then, rejected - вызову catch



//const [isLoading, setIsLoading] = useState(false)
//let pr = axios.get('https://....') // отправляем запрос на сервер; статус promise pending
//setIsLoading(true)
//pr.then(response => { // как только на сервере получили результат, статус меняется на fulfilled, результат отправляется в response и срабатывает ф-ция resolve
//    setUsers(response.data)
//})
//    .catch(err => {
//        alert('oops, something wen wrong', err)
//   })
//   .finally(() => {
//       setIsLoading(false)
//   })
//{isLoading && <Loading/>}
// пример из react



const myPromise = new Promise((res, rej) => {
    const string = 'string'
    if (string.length > 5) {
        res('word is long')
    } else {
        rej('word is short')
    }
}) // самая простая реализация промиса
console.log(myPromise)




////////////////////////////////////////////// задача для самостоятельной работы
// написать ф-цию delay, которая вернет промис и через 2 секунды выдаст resolve

const delay = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, time)
    })
}

delay(2000).then(() => console.log('resolve'))


