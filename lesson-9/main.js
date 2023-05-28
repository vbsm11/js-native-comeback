// лексическое окружение, замыкание, рекурсия
// лексическое окружение (lexical environment) - это объект, в который записываются все переменные, созданные на этом уровне

const a = 5
// { a: 5 } Global lexical environment
// (в globalLE ссылка outer на внешние LE равна null)


let car = 'bmw' // {car: 'bmw'}

const startEngine = () => {
    console.log(`start ${car}`)
}
car = 'audi' // {car: 'audi'}

startEngine()
// в консоли будет start audi


// {foo1: Function, a1: undefined}
foo1()
foo2()
foo3()

var a1 = '1' // {foo1: Function, a1: '1'}
const a2 = '2' // {foo1: Function, a1: '1', a2: '2'}
let a3 = '3' // {foo1: Function, a1: '1', a2: '2', a3: '3'}

function foo1() {
    console.log('foo1')
}

const foo2 = () => { // {foo1: Function, a1: '1', a2: '2', a3: '3', foo2: Function}
    console.log('foo2')
}

const foo3 = function () { // {foo1: Function, a1: '1', a2: '2', a3: '3', foo2: Function, foo3: Function}
    console.log('foo3')
}
// при объявлении ф-ции через function declaration(foo1) мы можем ее вызвать в коде до ее объявления, она сразу записывается в Global lexical environment
// при обявлении ф-ции через function expression (стрелочная foo2 и foo3) такой возможности не существует, она записывается в Global lexical environment только после объявления
// при обявлении переменной через var в Global lexical environment сразу записывается свойство со значением undefined