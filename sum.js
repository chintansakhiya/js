// const inputArray = [
//   [1, 2, 3, 4],
//   [1, 2],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 4, 4]
// ]


// function sum(n1, n2, cb) {

//   setTimeout(function () {

//     return cb(n1 + n2);
//   }, 0050)
// }


// function mul(n1, n2, cb) {

//   setTimeout(function () {
//     return cb(n1 * n2);
//   }, 00050)
// }



// let result = []
// function output() {

//   for (let i = 0; i < inputArray.length; i++) {
//     let result2=[]

//     for (let j = 0; j < inputArray[i].length; j += 2) {

//       mul(inputArray[i][j], inputArray[i][j + 1], function (ans) {
//         sum(ans, temp, function (ans2) {
//            temp=ans2
//           result2.push(ans2)
//         })

//          console.log(temp)
//       })
//     }
//     result.push(result2)
//   }
//   x()

//   // console.log(result)
// }
// output()

// function x() {
//   setTimeout(function () {
//     console.log(result)
//     console.log(temp)
//   }, 3000)

// }


// function sum(n1, n2) {
//   let p = new Promise(function (resolve, reject) {

//     setTimeout(function () {
       
//       if (typeof n1 === "number" && typeof n2 === "number") {
//         resolve(n1 + n2);
//       } else {
//         reject("enter proper input");
//       }
//     }, 5000)

//   })
//   return p
// }

// let x=sum(10,)
// x.then(val=>console.log(val)).catch(err=>console.log(err))

// async function* myGenerator(step) {
//   await new Promise((resolve) => setTimeout(resolve, 10));
//   yield 0;
//   yield step;
//   yield step * 2;
// }

// const gen = myGenerator(2);
// gen
//   .next()
//   .then((res) => {
//     console.log(res); // { value: 0, done: false }
//     return gen.next();
//   })
//   .then((res) => {
//     console.log(res); // { value: 2, done: false }
//     return gen.next();
//   })
//   .then((res) => {
//     console.log(res); // { value: 4, done: false }
//     return gen.next();
//   })
//   .then((res) => {
//     console.log(res.done); // { value: undefined, done: true }
//     return gen.next();
//   });