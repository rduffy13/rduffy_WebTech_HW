

function get_data(){

    let name = document.getElementById("nameinput1").value;
    console.log("Fullname: ", name);
    let email = document.getElementById("emailinput1").value;
    console.log("Email: ", email);
    let reg = document.getElementById("registerInput").value;
    console.log("Register Status: ", reg);
    let courses1 = document.getElementById("Check1");
    if(courses1.checked){
        console.log("Class Taken: Programming Languages");
    }
    let courses2 = document.getElementById("Check2");
    
    if(courses2.checked){
        console.log("Class Taken: Operating Systems");
    }
    let courses3 = document.getElementById("Check3");
    if(courses3.checked){
        console.log("Class Taken: Full Stack Web Dev");
    }

    let msg = document.getElementById("comments").value;
    console.log("Comments: ", msg);
}
