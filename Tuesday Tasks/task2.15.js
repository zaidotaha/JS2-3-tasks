document.getElementById("2_15").addEventListener("click",preven);
function preven(){
    let x = window.prompt("Please enter the number");
    isEven(x);
}

function isEven(x){
    window.alert(!(x%2));   
}

