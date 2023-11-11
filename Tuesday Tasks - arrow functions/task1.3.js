
print2 = () => { 
    let x = Number(window.prompt("Enter number"));
    let text ="";
    while(x>0){
        if(x%13==0){
            text += String(x) + " ";
        }
        x--;
    }
    if(text===""){
        window.alert(`None of the numbers between 0 and ${x} are divisible by 13`)
    }
    else{
        window.alert(text);
    }
}
document.getElementById("13-button").addEventListener("click",print2);
