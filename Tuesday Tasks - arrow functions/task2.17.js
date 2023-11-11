prepos=()=>{
    let x = window.prompt("Please enter the number");
    positive(x);
}

positive=(x)=>{
    window.alert(Boolean(x>=0));   
}

document.getElementById("2_17").addEventListener("click",prepos);
