document.getElementById("2_17").addEventListener("click",prepos);
function prepos(){
    let x = window.prompt("Please enter the number");
    positive(x);
}

function positive(x){
    window.alert(Boolean(x>=0));   
}

