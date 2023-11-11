
mult = () => {
    let x = Number(window.prompt("Please enter first operand"));
    let y = Number(window.prompt("Please enter second operand"));
    let sum = 0;
    for(let i = 0 ; i < y ; i++){
        sum += x;
    }
    window.alert(`Answer is ${sum}`);
}
document.getElementById("mult-button").addEventListener("click",mult);
