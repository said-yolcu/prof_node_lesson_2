//const { clearInterval } = require('timers')

var spawn = require('child_process').spawn
var path = require('path')

var path_to_js= path.relative('.', '/home/bitay/computer_science/\
github_repositories/prof_node_lesson_2/chapter_8/plus_one.js')

var child= spawn('node', [path_to_js])

var print_out= setInterval(() => {
    var number= Math.floor(Math.random() * 10000)
    
    child.stdin.write(number + '\n')
    
    child.stdout.once('data', data => {
        console.log(`child replied to  ${number} with:  ${data}\n`)
    })
    //process.stdout.write('child stdout\n')
    
    child.stderr.on('data', data => {
        process.stdout.write(data)
    })
    
}, 1000)

setTimeout(() => {
    clearInterval(print_out)
    // Alt 1 => process.exit(0)
    child.kill('SIGUSR2')
    //process.exit()
}, 3500)

// process on signal does not work
child.on('SIGUSR2', () => console.log('Got a sigusr2 signal'))

// Alt 1 => process.on(exit, ...)
child.on('exit', (code, signal) => {
    if (code){
        console.log(`Process to exit with code ${code}`)
    }else if (signal){
        console.log(`child process terminated because of signal ${signal}`)
    }
    
})



// Alt 1 