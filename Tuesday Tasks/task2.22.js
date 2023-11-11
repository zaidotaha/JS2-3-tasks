document.getElementById("2_22").addEventListener("click",prescoreInUniversty);

function prescoreInUniversty(){
    let x = window.prompt("Please enter the grade");
    scoreInUniversty(x);
}

function scoreInUniversty(x){
    let str ="";
    switch(true){
        case (x>=95):
            str = "A";
            break;
        case (x>=85):
            str = "B";
            break;
        case (x>=70):
            str = "C";
            break;
        case (x>=50):
            str = "D";
            break;
        default:
            str = "F";
    }
    window.alert(str);

}