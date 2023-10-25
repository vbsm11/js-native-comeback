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
