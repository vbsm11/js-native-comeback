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
// foo2() -> error
// foo3() -> error

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


let phone = 'iphone' // {phone: 'iphone'}

const logPhone = () => { // globalLE {phone: 'iphone', logPhone: Function}
    // Environment --> globalLE
    // logPhoneLE {}
    const phone = 'samsung' // logPhoneLE {phone: 'samsung'}
    const foo = () => { // logPhoneLE {phone: 'samsung', foo: Function}
        // fooLE {}
        console.log(`phone ${phone}`)
    }
    foo()
}

logPhone()
// также существуют функциональные (функции) и блочные (if else, for, switch case и тд) лексические окружения
// функциональное лексическое окружение создается только в момент вызова функции
// внутри ф-ции переменная сначала ищется внутри своего LE, затем у родителя и так до globalLE!!!


const obj = {} // globalLE {...obj: {}}
// objLE - не существует, объект лексического окружения не создает!!!


const counter = () => { // globalLE {counter: Function}
    // environment --> globalLE
    // counterLE {}
    let count = 0 // counterLE {count: 0}
    return () => {
        // environment --> counterLE1
        // environment --> counterLE2
        console.log(++count)
    }
}

const count1 = counter() // globalLE {counter: Function, count1: Function} - создается counterLE1 {count: 0}
const count2 = counter() // globalLE {counter: Function, count1: Function, count2: Function} - создается еще раз counterLE2 {count: 0}
// counterLE1 !== counterLE2

count1() // 1
count1() // 2
count1() // 3

count2() // 1
count2() // 2
count2() // 3
// замыкание - это способность функции запомнить лексическое окружение, в котором она была создана
// окружение counterLE после выполнения ф-ции count1 не удаляется из памяти, так как на значение из этого окружения есть "ссылка" в дочерней функции
// окружение count1LE удаляется из памяти, так как нигде не используется

// ++count сначала увеличивает значение, потом возвращает его; count++ - наоборот
