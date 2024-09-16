const btn1 = document.getElementById("btn1")
const div = document.querySelector("div")
const form = document.querySelector("form")
// const ul = document.querySelector("ul")
// btn1.onclick = ()=> {
//     console.log("Vanakam")
// }

// btn1.onclick = ()=> {
//     console.log("Hello")
// }

function clickHandler(eve) {
    eve.stopPropagation()
   console.log(eve)
}

form.addEventListener("submit",(eve)=> {
    eve.preventDefault()
    console.log(eve)
},true)

div.addEventListener("click",()=> {
    console.log("Vanakam!!!")
})


// ul.addEventListener("click",(eve)=> {
//     console.log(eve.target)
//     eve.target.closest("li").classList.toggle("color")
// })

btn1.addEventListener("click",clickHandler)