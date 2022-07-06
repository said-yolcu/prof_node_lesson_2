//const { clearInterval } = require('timers')

var spawn = require('child_process').spawn
var child= spawn('node', ['plus_one.js'])
var print_out= setInterval(() => {
    var number= Math.floor(Math.random() * 10000)

    child.stdin.write(number + '\n')

    child.stdout.once('data', data => {
        process.stdout.write(`child replied to  ${number} with:  ${data}\n`)
    })
    //process.stdout.write('child stdout\n')

    child.stderr.on('data', data => {
        process.stdout.write(data)
    })
}, 1000)

setTimeout(() => {
    clearInterval(print_out)
    child.kill()
    // Alt 1 => 
}, 3500)

child.on('exit', (code, signal) => {
    if (code){
        console.log(`Process to exit with code ${code}`)
    }else if (signal){
        console.log(`child process terminated because of signal ${signal}`)
    }
})