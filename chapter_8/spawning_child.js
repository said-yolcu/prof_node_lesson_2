var spawn = require('child_process').spawn
var child= spawn('tail', ['-f', './file.txt'])

child.stdout.on('data', data => {
    console.log('tail output: ' + data.toString())
})

child.stderr.on('data', data => {
    console.log('tail error output:', data.toString())
})