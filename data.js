var twirlTimer = (function() {
    var P = ["\\", "|", "/", "-"];
    var x = 0;
    return setInterval(function() {
      process.stdout.write("\r" + P[x++]+"loading");
      x &= 3;
    }, 250);
  });


async function getData() {
    const start = Date.now();
    let x = await fetch("https://api.github.com/users",{
        method:"GET",

        Headers:{
            "x-ratelimit-limit": 60
        }
        // x-ratelimit-limit: 60, 
    })
    const end = Date.now();
    const millis = end - start
    let result = await x.json()
    console.log("total users " + result.length)
    console.log("time= " + millis / 1000000 + " s")
     
    
    return Promise.resolve(true)
}


function x(){ 
let y=true
   y=getData()
//   console.log(y)
if (y==false){
}
else{
    twirlTimer()
}


}
x()