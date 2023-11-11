document.getElementById("2_10").addEventListener("click",precomp);
function precomp(){
    let x = window.prompt("Please enter the first string");
    let y = window.prompt("Please enter the second string");
    comp(x,y);
}

function comp(x,y){
    if(x.length == y.length){
        window.alert("true");
    }
    else{
        window.alert("false");
    }
}