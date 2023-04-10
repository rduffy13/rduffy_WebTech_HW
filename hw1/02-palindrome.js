
const elem = document.getElementById('inputNum');

elem.addEventListener('input' , handleInput);


function handleInput(elem){
    const val = document.querySelector('input').value;
    console.log(val);
    var reversedString = val.toString().split("").reverse().join("");
    if (val == reversedString) {
        document.getElementById("answer").innerHTML = "Yes.  This is a palindrome!";
    } else {
        document.getElementById("answer").innerHTML = "No.  Try again.";
    }
}