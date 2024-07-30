const fs = require('fs')

function logReqRes(filename) {
    return (req, res, next) => {
        console.log("hello from middleware 2", req.myUserName)
        fs.appendFile(
        filename,
        `\n${Date.now()}: ${req.method}: ${req.path}`,
        (err, data) => {
            next()
        }
    )
    next()
    }
}

module.exports = {
    logReqRes,
}