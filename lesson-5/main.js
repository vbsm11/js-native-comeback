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

// 5. По умолчанию сортирует числа по первой цифре (тот же unicode)
// для реальной сортировки чисел нужно передать параметром функцию сравнения (callback)

const nums = [1000, 333, 9, 77, -3]
console.log(nums.sort())

// 6. Ф-ция сравнения должна вернуть число > или < 0

const compFunc = (a, b) => { // по возрастанию
  if (a > b) { // надо поменять местами
      return 10
  }
  else {
      return -1
  }
}

console.log(nums.sort(compFunc))

console.log(nums.sort((a, b) => a - b))
console.log(nums.sort((a, b) => b - a))

// С методом sort часто используют метод reverse

console.log(nums.reverse())

// Работа с массивами объектов

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Helge',
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: 'alex',
        age: 22,
        isMarried: true,
        scores: 89
    },
]


// Сортировка массива по строковым значениям

const sortByName = (a,b) => {
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1
  }
  else {
      return -1
  }
}

// console.log(students.sort(sortByName))

console.log(students.sort((a,b) => a.name.localeCompare(b.name)))
// localeCompare производит сравнение строк без учета регистра и возвращает 1 или -1