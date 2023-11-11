document.getElementById("2_14").addEventListener("click",prelongerString);
function prelongerString(){
    let x = window.prompt("Please enter the first string");
    let y = window.prompt("Please enter the second string");
    let z = window.prompt("Please enter the third string");
    let a = window.prompt("Please enter the fourth string");
    const array = [x,y,z,a];
    longerString(array);
}

function longerString(array){
    let string ="";
    for(let i = 0 ; i < 4 ; i++){
        if(array[i].length > string.length){
            string = array[i];
        }
    }
    window.alert(string);
}