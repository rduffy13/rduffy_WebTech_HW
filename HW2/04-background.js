let intID = null;
let IntTime = 3;


function start_stop(){
    let button = document.getElementById("button1 ");
    IntTime = document.getElementById("interval").value;
    if(intID === null){
        intID = setInterval(change_color, IntTime * 1000);
        button.innerHTML="Stop";
    } else{
        clearInterval(intID);
        intID = null;
        button.innerHTML="Start"
    }
}

function change_color() {
    let cont = document.getElementById("back_ground");
    cont.classList.remove("bg-primary");
    cont.style.backgroundColor = gen_color();
  }
function gen_color(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";

}
function change_int() {
    intervalTime = document.getElementById("interval").value;
    //console.log(intervalTime);
    if (intID !== null) {
      clearInterval(intID);
      intID = setInterval(change_color, intervalTime * 1000);
      console.log(intervalTime);
    }
  }
