precalculateDogAge=()=>{
    let x = window.prompt("Please enter your puppy's age");
    calculateDogAge(x);
}
calculateDogAge= (x)=>{
    window.alert(`Your puppy is ${x*7} years old in dog years!`);
}

document.getElementById("2_2").addEventListener("click",precalculateDogAge);
