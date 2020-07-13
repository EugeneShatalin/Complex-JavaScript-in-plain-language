console.log('Start')

setTimeout(function() {
    console.log('Inside setTimeout')
}, 0)

console.log('End')

//выведет
//Start
//End
//Inside setTimeout

/*setTimeout - относиться к API браузера и даже при 0 значении тайминга, все равно будет переданна в Event Loop*/