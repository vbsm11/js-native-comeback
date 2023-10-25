// this

// 1. Global Scope
// 2. Function (simple func | arrow func =>)
// 3. Call, apply, bind
// 4. Functions Constructors


// 1.
console.log(this) // window


// 2.
// arrow functions

const foo = () => {
    console.log(this)
}

foo() // window, т.к стрелочная функция не создает своего контекста и берет его из лексического окружения в котором она находится, в данном случае - из глобального

const car = {
    foo1: () => {
        console.log(this)
    },
    bar() {
        const foo2 = () => {
            console.log(this)
        }
        foo2()
    }
}

car.foo1() // window, т.к обект не создает лексического окружения
car.bar() // объект car, т.к функция bar создает лексическое окружение


// simple functions

function func1() {
    // this
    const func2 = () => {
        console.log(this)
    }
    func2()
}

window.func1()
// если у стрелочный функций this зависит от того, где функция была определена
// , то в классической функции - от того, где она была вызвана (в данном случае window)
