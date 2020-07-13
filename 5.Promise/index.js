console.log('Request data...')
    //промисы служат для создания цепочек зачать зависящих от асинхронных операций, результаты которых нужно дождаться для выполнения последующих действий
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => { //data === backendData, можно использовать любое имя для входящего объекта данных
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data) //этими данными можно воспользоваться в следующем then под любым именем, если в then есть новый промис, то данные для следующего then в цепочке передаються через resolve
        }, 2000)
    })
})
    .then(clientData => { //clientData === data
        console.log('Data received', clientData)
        clientData.fromPromise = true
        return clientData //этими данными можно воспользоваться в следующем then под любым именем, если в then нет нового промиса, то данные для следующего then в цепочке передаються через return
    })
    .then(data => {//data === clientData
        console.log('Modified', data)
    })
    .catch(err => console.log('Error: ', err)) //метод catch только если будет ошибка reject, вставлять можно в любом месте, но предпочтительно в конце
    .finally(() => console.log('finally')) //метод который выполниться всегда, даже при наличии ошибок

//реализация функции для выполнения любых операций через определенный промежуток времени, аналог setTimeout
//данная функция возвращает пустой resolve, но блогадаря then её можно использовать как setTimeout
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
//пример использования
sleep(7000).then(() => console.log('After 7 sec'))
sleep(9000).then(() => console.log('After 9 sec'))

Promise.all([sleep(2000), sleep(12000)]).then(() => { //метод all служит для объединения промисов и будет выполнен, только когда выполняться все собранные в нем промисы
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(12000)]).then(() => { //метод race служит для объединения промисов и будет выполнен, сразу же, как только выполниться один из промисов
    console.log('All promises')
})