
const elem = document.getElementById('inputNum');

elem.addEventListener('input' , handleInput);


function handleInput(elem){
    const val = document.querySelector('input').value;
   
    var reversedString = val.toString().split("").reverse().join("");
    
    if (val == reversedString) {
        document.getElementById("answer").innerHTML = "Yes.  This is a palindrome!";
    } else if (val !== reversedString && val >= 0) {
        document.getElementById("answer").innerHTML = "No.  Try again.";
    }
    else if(val<0){
        document.getElementById("answer").innerHTML = "Number must be greater then 0.";
    }

}