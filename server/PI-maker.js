const { PIGenerator } = require('./pi-generator')

// initialize PI to 3.1
let PI = PIGenerator.next().value + '.' + PIGenerator.next().value

calculatePI()

function calculatePI() {
    const value = PIGenerator.next().value
    PI += value

    process.send(PI)

    // use timeout instead of interval
    // we want to wait until last PI generation is complete before starting a new one
    setTimeout(calculatePI, 100)
}

exports.PI = PI
