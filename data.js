const users=["chintansakhiya","ami-kalola","bhoomiz01","VatsaL","sgdghdtrh","htsehtshts","chintansakhiya123"]
const loading =  require('loading-cli');
const load = loading("loading text!!")
let result=[]
let vuser=0
let xuser=0
 
async function getData() {
    const start = Date.now();
  for ((user) in users){
    
    let temp = await fetch(`https://api.github.com/users/${users[user]}`)
    let res=await temp.json()
    result.push(res) 
  }
  result.forEach(res=>{
 
    if(res.id==undefined){
     
      xuser++
    }else{
      vuser++
    }
  })
    const end = Date.now();
    load.stop()

    const millis = end - start
    console.log("time= " + millis + " ms")
  console.log("valid:"+vuser+" invalid:"+xuser)
     
}


function x() {
    load.start()
     getData()
  
}
x()