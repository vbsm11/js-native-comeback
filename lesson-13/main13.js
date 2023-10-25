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

const car1 = {
    speed: 200
}

const car2 = {
    speed: 220
}

function showSpeed() {
    console.log(this.speed)
}

car1.f = showSpeed
car2.f = showSpeed

car1.f()
car2.f()

//////////////////////////////////////////////////////////////////////////////
// 3. call, apply, bind

const moto1 = {
    speed: 200,
    showSpeed() {
        console.log(this.speed)
    },
    superShowSpeed(a, b) {
        console.log(this.speed + a + b)
    }
}

const moto2 = {
    speed: 220
}

moto1.showSpeed() // 200
moto1.showSpeed.call(moto2) // 220 - метод call затирает this тем объектом, который был передан в параметры и сразу же вызывается


moto1.showSpeed.apply(moto2) // 220 - работает в таком случае как call

moto1.superShowSpeed.call(moto2, 10, 20)
moto1.superShowSpeed.apply(moto2, [10, 20]) // в случае, если методу нужны какие-то параметры, то в apply мы должны их передать массивом


const f1 = moto1.superShowSpeed.bind(moto2, 1, 2) // отличие bind состоит в том, что он сразу не вызывает функцию с измененным контекстом, а подменяет контекст для использования вызова такой ф-ции в дальнейшем коде
f1()

////////////////////////////////////////////////////////////////////////////////////
// контекст можно подменить только один раз, то есть если к нам приходит
// функция, у которой мы хотим подменить контекст при помощи call или apply,
// но у нас не получается - значит раньше контекст уже был подменен с помощью bind
///////////////////////////////////////////////////////////////////////////////////



// 4 functions constructors

function Car(color) {
    // {}
    this.color = color
    // return this
}

const newCar = new Car('red') // this всегда будет ссылаться на новый объект, который будет создаваться при помощи ключевого слова new
console.log(newCar)






