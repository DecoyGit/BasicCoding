let firstNum = ""
let secondNum = ""
let result = ""

function add() {
   debugger;
    firstNum = parseInt(document.getElementById("num1").value)
    secondNum = parseInt( document.getElementById("num2").value)

    result = firstNum + secondNum;
   
    console.log(firstNum,secondNum)

    console.log(result)

    document.getElementById("result").value = result;
}

let s1 = "Yogesh "
    
let s2 = "sahu "

console.log(s1+s2)


