document.getElementById("2_16").addEventListener("click",preodd);
function preodd(){
    let x = window.prompt("Please enter the number");
    isOdd(x);
}

function isOdd(x){
    window.alert(Boolean(x%2));   
}

