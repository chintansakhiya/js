// import fetch from "node-fetch"
//get uuid 
async function getUUID() {
    console.time("get uuid")
    let res = await fetch("https://httpbin.org/uuid")
    let data = await res.json()
    console.timeEnd("get uuid")
    return data
}

//delay
async function delayed(delay) {
    console.time("delay")
    let res = await fetch(`https://httpbin.org/delay/${delay}`)    
    console.timeEnd("delay")
    return true
    
}

//post data
async function postBody(body) {
    console.time("anything")
    let res = await fetch(`https://httpbin.org/anything/}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    let data = await res.json()
    console.timeEnd("anything")
    return data
}


//   let result=getUUID()
//   result.then((response)=>{
//     delayed(2)
//     postBody(response).then((res)=>{
//         let endTime=new Date().getTime()
//         console.log(res.data, (endTime-startTime)/1000+"s")
//       })
//   })

async function run() {
    let startTime = new Date().getTime()
    let uuid = getUUID()
    let m = delayed(2)
    let data =await postBody(await uuid)
    await m
    let endTime=new Date().getTime()
    console.log(data.data,(endTime-startTime)/1000+"s");
}
run()