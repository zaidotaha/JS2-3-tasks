document.getElementById("2_11").addEventListener("click",precomp2);
function precomp2(){
    let x = window.prompt("Please enter the first string");
    let y = window.prompt("Please enter the second string");
    comp2(x,y);
}

function comp2(x,y){
    if(x>y){
        window.alert(x);
    }
    else if (y<x){
        window.alert(y);
    }
    else{
        window.alert("equal");
    }
}