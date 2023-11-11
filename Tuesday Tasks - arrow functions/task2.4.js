pregreet=()=>{
    let x = window.prompt("Please enter your Name");
    greet(x);
}
greet=(x)=>{
    window.alert(`Hello ${x}`);
}
document.getElementById("2_4").addEventListener("click",pregreet);
