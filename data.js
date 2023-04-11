const users = ["chintansakhiya", "ami-kalola", "bhoomiz01", "VatsaL", "sgdghdtrh", "htsehtshts", "chintansakhiya"]
const loading = require('loading-cli');
const load = loading("loading details!!")
let result = []
let vUser = 0
let inUser = 0

async function getData() {
    const start = Date.now();
    for ((user) in users) {

        let temp = await fetch(`https://api.github.com/users/${users[user]}`)
        let res = await temp.json()
        result.push(res)
    }
    result.forEach(res => {

        if (res.id == undefined) {

            inUser++
        } else {
            vUser++
        }
    })
    const end = Date.now();
    load.stop()

    const millis = end - start
    console.log("time= " + millis + " ms")
    console.log("valid:" + vUser + " invalid:" + inUser)

}


function startProgram() {
    load.start()
    getData()

}
startProgram()