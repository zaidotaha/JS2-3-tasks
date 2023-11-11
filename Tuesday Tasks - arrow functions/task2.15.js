preven=()=>{
    let x = window.prompt("Please enter the number");
    isEven(x);
}

isEven=(x)=>{
    window.alert(!(x%2));   
}

document.getElementById("2_15").addEventListener("click",preven);
