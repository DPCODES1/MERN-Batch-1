class Car {
    constructor(name,model,engine,tire) {
        
        this.name = name
        console.log(this)
    }
}

const car1 = new Car("BMW")
car1.engine = "V3"
console.log(car1)

const div = document.querySelector("div")

div.addEventListener("click",function() {
    console.log(this)
})