preodd=()=>{
    let x = window.prompt("Please enter the number");
    isOdd(x);
}

isOdd=(x)=>{
    window.alert(Boolean(x%2));   
}

document.getElementById("2_16").addEventListener("click",preodd);
