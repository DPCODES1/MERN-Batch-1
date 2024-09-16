//Factory Factions - function which returns another functions

// function calc(a) {
//     return function (b) {
//         return a+b
//     }
// }

// const fnAdd = calc(10)

// console.log(fnAdd(2))

//Callback

// function caller(fn) {
//     fn()
// }

// caller(function () {
//     console.log("Vanakam")
// })

//Recursive
// function fact(a) {
//     if(a==0 || a==1) {
//         return 1
//     } else {
//         return a*fact(a-1)
//         //5*4*3*2*1 = 120
//     }
// }

// console.log(fact(5))

//IIFE
// (function(a,b) {
//     console.log(a+b)
// })(1,4)

//Arrow Functions
// const arrowfn = (a,b) => a+b

//swap

// console.log(arrowfn(2,3))

function dummy(a,b) {
    console.log(a,b)
}

// const dummy2 = dummy.bind({name:"Deepak"},1)

dummy.call(null,[1,2,3])

// dummy2()