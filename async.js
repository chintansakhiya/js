// import fetch from "node-fetch"
//get uuid 
async function getUUID(){
    let res=await fetch("https://httpbin.org/uuid")
    let data=await res.json()
    return data
  }
  
  //delay
  async function delayed(delay){
    let res=await fetch(`https://httpbin.org/delay/${delay}`)
  }
  
  //post data
  async function postBody(body){
    let res=await fetch(`https://httpbin.org/anything/}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body)
    })
    let data=await res.json()
    return data
  }
  
  let startTime=new Date().getTime()
  
  let result=getUUID()
  result.then((response)=>{
    delayed(2).then(()=>{
      postBody(response).then((res)=>{
        let endTime=new Date().getTime()
        console.log(res.data, (endTime-startTime)/1000+"s")
      })
    })
  })