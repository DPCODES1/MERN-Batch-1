let currentResult = 0;

function userInputValue() {
    return parseInt(userInput.value)
}

function calcFn(identifier,eve) {
    const initialRes = currentResult
    let calcDescription;
    const input = userInputValue()
    if(identifier == "+") {
        calcDescription = `${currentResult} + ${userInputValue()}` 
        currentResult+=input //current
    } else if(identifier == "-") {
        calcDescription = `${currentResult} - ${userInputValue()}` 
        currentResult-=input
    } else if(identifier == "*") {
        calcDescription = `${currentResult} x ${userInputValue()}` 
        currentResult*=input
    } else if(identifier == "/") {
        calcDescription = `${currentResult} / ${userInputValue()}` 
        currentResult/=input
    } 

    const log = {
        operation:identifier,
        prevResult:initialRes,
        curResult:currentResult,
        number:userInputValue()
    }

    console.log(log)
    outputResult(currentResult,calcDescription)
}

// function add() {
//     const calcDescription = `${currentResult} + ${userInputValue()}` 
//     const input = userInputValue()
//     currentResult+=input //currentResult = currentResult + input
//     outputResult(currentResult,calcDescription)
// }

addBtn.addEventListener("click",calcFn.bind(null,"+"))
subtractBtn.addEventListener("click",calcFn.bind(null,"-"))
multiplyBtn.addEventListener("click",calcFn.bind(null,"*"))
divideBtn.addEventListener("click",calcFn.bind(null,"/"))