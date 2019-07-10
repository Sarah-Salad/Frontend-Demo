$submit = document.getElementById("submit");
$answer = document.getElementById("answer");

//gets the answer for the calculation and puts it on the page.
$submit.onclick = function() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var operation = document.getElementById("operation");
    var operations = [operation.children["+"],operation.children["-"],operation.children["*"],operation.children["/"]]
    var opValue;
    var answer; 
    for (var i = 0; i < operations.length; i++) {
        if (operations[i].checked) {
            opValue = operations[i].value;
        }
    }
    firstNumber = Number.parseInt(firstNumber, 10);
    secondNumber = Number.parseInt(secondNumber, 10);

    if( opValue != null){
        if (opValue === "+"){
            answer = firstNumber + secondNumber; 
        } else if(opValue === "-"){
            answer = firstNumber - secondNumber; 
        }else if(opValue === "*"){
            answer = firstNumber * secondNumber; 
        }else{
            answer = firstNumber / secondNumber;
        }
    }
    
    console.log("clicked");
    $answer.innerHTML= `${firstNumber} ${opValue} ${secondNumber} = ${answer}`;
   
}

