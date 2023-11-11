document.getElementById("2_8").addEventListener("click",premult);
function premult(){
    let x = window.prompt("Please enter the first number");
    let y = window.prompt("Please enter the second number");
    mult(x,y);
}

function mult(x,y){
    window.alert(x*y);
}