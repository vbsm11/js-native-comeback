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
