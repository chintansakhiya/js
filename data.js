// function twirlTimer(bool) {
//     let myInterval
//     if (bool === true) {
//         let P = ["\\", "|", "/", "-"];
//         let x = 0;
//         myInterval=setInterval(function() {
//             process.stdout.write("\r" + P[x++] + "loading");
//             x &= 3;
//         }, 250);
//     }else{
//         console.log("fs")
//         clearInterval(myInterval); 
//     }

// };
const users=["chintansakhiya","ami-kalola","bhoomiz01","VatsaL","sgdghdtrh","htsehtshts","chintansakhiya"]
const loading =  require('loading-cli');
const load = loading("loading text!!")

async function getData() {
    const start = Date.now();
    let details=users.map((user)=> fetch(`https://api.github.com/${user}`));
    const end = Date.now();
    
    let detail=details.map(async (user)=>  console.log(user));

    const millis = end - start
console.log(detail)
    

    
    // console.log("\ntotal users " + result[0].iddd)
    console.log("time= " + millis / 1000000 + " s")


    load.stop()
    return Promise.resolve(true)
}


function x() {
    load.start()
    y = getData()

     


}
x()