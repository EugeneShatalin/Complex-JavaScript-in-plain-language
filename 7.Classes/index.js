class Animal {
    static type = 'ANIMAL' //static служит для создания статических переменных и методов доступных только в самом классе
    construct(options) { //в construct заприсываються начальные значения переменнвых которые будут иницилизированны при создании дочернего объекта класса
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal!')
    }
}

/*
animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

console.log(animal)*/

class Cat extends Animal {
    //static type = 'CAT'

    constructor(options) {
        super(options) //если в дочернем классе нужно добавить свои переменые, до методом super нужно сперва инициализировать конструктор родительского класса
        this.color = options.color
    }

    voice() { //если в дочернем классе реалезован такой же метод, как ив родительском, он перетирает родительский
        super.voice()//если нужно, чтоб еще вызвалься и родительский метод, пример его вызова
        console.log('I am Сat!')
    }
    //у классов тоже есть сеторы и геторы, как у объектов, которые являються полями, а не методами
    get ageInfo() { //служит для вывода обработанных данных
        return this.age * 7
    }

    set ageInfo(newAge) { //служит для приема данных и вывода переработанных данных на основве введенных данных
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Animal',
    age: 5,
    hasTail: true,
    color: 'black'
})

console.log(cat)