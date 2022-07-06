var child_process= require('child_process')
//const { stderr } = require('process')

var exec = child_process.exec

var options = {
    timeout: 10000
    ,killSignal: 'SIGKILL'
    ,cwd: '../chapter_3'
}

exec('cat *.js | wc -l', options,  (err, stdout, stderr) => {
    if(err){
        console.log('child process exited with error code')
        return
    }
    console.log(stdout)
})

//aga