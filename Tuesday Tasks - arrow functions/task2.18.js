prefullname=()=>{
    let x = window.prompt("Please enter the first string");
    let y = window.prompt("Please enter the second string");
    fullname(x,y);
}

fullname=(x,y)=>{
    window.alert(x+" "+y);
}

document.getElementById("2_18").addEventListener("click",prefullname);
