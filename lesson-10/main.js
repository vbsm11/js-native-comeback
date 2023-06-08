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



const server = {
    getData() {
        return new Promise((res, rej) => {
            const data = ['book1', 'book2', 'book3']
            setTimeout(() => {
                res('Some books list') // приходит в PromiseResult
            }, 1000)
        })
    }
}

const pr = server.getData()
console.log(pr)

const Promise = (executor) => {

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

// у promise может быть 3 состояния pending || fulfilled || rejected






