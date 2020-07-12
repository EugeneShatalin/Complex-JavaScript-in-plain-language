function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}
//так как функция createCalcFunction вызвана с параметром, он замкнулся во внутренней функции и createCalcFunction возвращает функцию уже с замкнутым параметром
const calc = createCalcFunction(42)
calc() //выведет 42000

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10)) //11
console.log(addOne(42)) //43

console.log(addTen(10)) //20
console.log(addTen(42)) //52

//реализовать метод bind

function bind(context, fn) {
    return function(...args) {
        fh.apply(context, args)
    }
}