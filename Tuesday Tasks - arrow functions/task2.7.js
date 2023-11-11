precube=()=>{
    let x = window.prompt("Please enter the number you want to cube");
    cube(x);
}

cube=(x)=>{
    window.alert(x*x*x);
}

document.getElementById("2_7").addEventListener("click",precube);
