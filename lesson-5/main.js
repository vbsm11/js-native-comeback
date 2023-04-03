// 1. Сортирует строки "из коробки", то есть без дополнительных параметров

const names = ['Donald', 'Alex', 'Bob']
console.log(names.sort())

// 2. Сортирует строки типа по "алфавиту" (согласно unicode)

const names2 = ['Donald', 'alex', 'aLEX', 'игорь', 'Юрий']
console.log(names2.sort())

// 3. Работает мутабельно (сортирует массив на месте)

console.log(names)

// 4. Возвращает ссылку на исходный массив

console.log(names.sort() === names) // true