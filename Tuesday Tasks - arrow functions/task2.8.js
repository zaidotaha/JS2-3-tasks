premult=()=>{
    let x = window.prompt("Please enter the first number");
    let y = window.prompt("Please enter the second number");
    mult(x,y);
}
mult=(x,y)=>{
    window.alert(x*y);
}
document.getElementById("2_8").addEventListener("click",premult);
