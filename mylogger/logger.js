
const fs = require('fs')
const chalk = require('chalk')
// change the log name 

class log {
    constructor() {
        this.levels = {
            None: 1,
            Error: 2,
            Warn: 3,
            Info: 4,
            Debug: 5,
            Trace: 6,
            All: 7,
        };
        let data = fs.readFileSync('./config.json').toString()
        console.log("17")
        let configdata = JSON.parse(data)
// console.log("19");
        this.level = configdata.loglevel
        this.filepath = configdata.filepath

    }
    checkLevel(msg, called, mycolor) {
        if (this.levels[this.level] >= this.levels[called]) {
            let datetime = this.Datetime()
            let printformat = datetime + "\t" + called + "\t" + msg + "\n"
            console.log(mycolor(called), printformat);
            fs.appendFileSync(this.filepath, printformat)

        }
    }

    error(msg) {
        let called = 'Error'
        let mycolor = chalk.red
        this.checkLevel(msg, called, mycolor)
    }
    warn(msg) {

        let called = 'Warn'
        let mycolor = chalk.yellow
        this.checkLevel(msg, called, mycolor)

    }
    info(msg) {
        let called = 'Info'
        let mycolor = chalk.blue
        this.checkLevel(msg, called, mycolor)

    }
    debug(msg) {
        let called = 'Debug'
        let mycolor = chalk.green
        this.checkLevel(msg, called, mycolor)

    }
    trace(msg) {
        let called = 'Trace'
        let mycolor = chalk.gray
        this.checkLevel(msg, called, mycolor)

    }
    Datetime() {
        const today = new Date()
        const YY = today.getFullYear()
        const MM = today.getMonth() + 1
        const DD = today.getDate()
        const HH = today.getHours()
        const Min = today.getMinutes()
        const sec = today.getSeconds()
        // console.log("datetime",YY,MM,DD,HH,Min,sec);
        return YY + ':' + MM + ':' + DD + ' ' + HH + ':' + Min + ':' + sec + " "

    }

}
// const log = new LOG()
// let error = chalk.bold.red;
module.exports = log

// log.trace("this is trace gggg")
// log.debug("this is debug")
// log.info("there isn ainfo")
// log.warn("there isn warn")
// log.error("there is an error")