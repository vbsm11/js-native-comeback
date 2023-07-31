// eventloop

console.log('a')

setTimeout(() => {
    console.log('timeout')
}, 1000)

console.log('b')

console.log('c')
// порядок срабатывания - 'a', 'b', 'c', 'timeout'
// a, b, c работают по принципу 'последний пришел первый ушел', но в данном случае срабатывают и уходят сразу (так же принцип называется stack, lifo)
// все асинхронное, в том числе setTimeOut, попадает в очередь и срабатывает только после того, как освободился stack (очередь - queue)
// даже если бы в setTimeOut timeOut был бы 0, console.log в нем все равно бы сработал последним, так как все асинхронные операции в js (колбэки, запросы на сервер) отправляются в очередь, а уже из этой очереди в stack вызова



console.log('a')

setTimeout(() => {
    console.log('timeout1')
}, 1000)

setTimeout(() => {
    console.log('timeout2')
}, 0)

console.log('b')

// порядок срабатывания - 'a', 'b', 'timeout2', 'timeout1'