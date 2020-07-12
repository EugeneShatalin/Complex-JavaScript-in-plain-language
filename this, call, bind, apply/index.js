function hello() {
    console.log('Hello: ', this)
}

/*this всегда указывает на объект в контексте которого он вызван, то что стоит слева от точки*/
const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello, //в данном месте вызова контекстом функции hello будет объект person
    sayHelloWindow: hello.bind(window), //глобальный метод bind служит для привязки к контексту объекта указаного в параметрах
                                        //bind создает новую функцию с привязанным конткстом, но не вызывает ее
                                        // тут будет контекстом глобальный объект window
                                        // также вместо window здесь можно указать this, так как тут this === window
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`) //console.group - создает группу выводо в консоль
        console.log(`Name is ${this.name}`) //здесь this === person
        console.log(`Age is ${this.age}`) //здесь this === person
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd() //console.groupEnd закрывает группу
    }
}

const lena = {
    name: 'Elena',
    age: 22
}

person.logInfo.bind(lena)() //вызов функции одного объекта с контекстом другого объекта

//варианты передачи параметров в функцию вызванную с контекстом другого объекта
person.logInfo.bind(lena, 'Elena', '8-777-777-77-77')()
const newFunction = person.logInfo.bind(lena)
newFunction('Elena', '8-777-777-77-77')

person.logInfo.call(lena, 'Elena', '8-777-777-77-80') //call в отличии от bind создает и сразу вызывает функцию

person.logInfo.apply(lena, ['Elena', '8-777-777-77-80']) //apply раблотает так же, как и call, но параметры передаються в виде массива

//пример использования this и prototype для реализации нужного метода у глобального объекта
Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * 2
    })
}
