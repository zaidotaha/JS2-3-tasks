document.getElementById("2_4").addEventListener("click",pregreet);
function pregreet(){
    let x = window.prompt("Please enter your Name");
    greet(x);
}

function greet(x){
    window.alert(`Hello ${x}`);
}