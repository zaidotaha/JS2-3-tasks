document.getElementById("2_3").addEventListener("click",precalculateSupply);
function precalculateSupply(){
    let x = window.prompt("Please enter your age");
    let y = window.prompt("Please enter ow many cups of tea your drink a day");
    calculateSupply(x,y);
}

function calculateSupply(x,y){
    window.alert(`You will need ${y*(100-x)*365} cups of tea to last you until the ripe old age of 100`);
}