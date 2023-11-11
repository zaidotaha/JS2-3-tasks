precomp3=()=>{
    let x = window.prompt("Please enter the first number");
    let y = window.prompt("Please enter the second number");
    let z = window.prompt("Please enter the second number");
    comp3(x,y,z);
}

comp3=(x,y,z)=>{
    window.alert(Math.min(x,y,z));
}

document.getElementById("2_12").addEventListener("click",precomp3);
