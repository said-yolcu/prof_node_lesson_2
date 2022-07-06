//const { stdout, stderr } = require('process')

var exec = require('child_process').exec

exec('node env_num_child.js', { env: { number: 123 } }
    , (err, stdout, stderr) => {
        if (err) { throw err }
        console.log('stdout:\n', stdout)
        console.log('stderr:\n', stderr)
    }
)
Footer
