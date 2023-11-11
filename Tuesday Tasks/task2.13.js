document.getElementById("2_13").addEventListener("click",preshorterString);
function preshorterString(){
    let x = window.prompt("Please enter the first string");
    let y = window.prompt("Please enter the second string");
    let z = window.prompt("Please enter the third string");
    let a = window.prompt("Please enter the fourth string");
    let b = window.prompt("Please enter the fifth string");
    const array = [x,y,z,a,b];
    shorterString(array);
}

function shorterString(array){
    let string ="";
    let x = 1000;
    for(let i = 0 ; i < 5 ; i++){
        if(array[i].length < x){
            x = array[i].length;
            string = array[i];
        }
    }
    window.alert(string);
}