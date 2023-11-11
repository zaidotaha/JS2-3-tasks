document.getElementById("2_7").addEventListener("click",precube);
function precube(){
    let x = window.prompt("Please enter the number you want to cube");
    cube(x);
}

function cube(x){
    window.alert(x*x*x);
}