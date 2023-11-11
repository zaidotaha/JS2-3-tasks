prerandomNumber=()=>{
    let x = window.prompt("Please enter the first number");
    let y = window.prompt("Please enter the second number");
    randomNumber(x,y);
}

randomNumber = (x,y) =>{
    let n = 0;
    n = Math.abs(x-y) * Math.random() + Math.min(x,y);
    window.alert(n);
}

document.getElementById("2_21").addEventListener("click",prerandomNumber);
