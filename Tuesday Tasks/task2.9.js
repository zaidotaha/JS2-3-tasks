document.getElementById("2_9").addEventListener("click",predriv);
function predriv(){
    let x = window.prompt("Please enter your age");
    driv(x);
}

function driv(x){
    if(x>=20){window.alert("Yes you can get driving license");}
    else{
        window.alert(`Please come back after ${20-x} years to get one`);
    }
}

