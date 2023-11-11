

prefullName=()=>{
    let x = window.prompt("Please enter first name");
    let y = window.prompt("Please enter last name");
    fullName(x,y);
}

function fullName(firstName, lastName){
    window.alert(firstName + " " + lastName);
}
document.getElementById("1_8").addEventListener("click",prefullName);