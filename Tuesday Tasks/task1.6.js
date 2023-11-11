document.getElementById("pandigital").addEventListener("click",prepan);

function prepan(){
    let x = window.prompt("Enter number to check if its pandigital");
    ans = isPandigital(x);
    window.alert(ans);
}

function isPandigital(x){
    String(x);
    for(let i = 0 ; i < 10 ; i++){
        if(!x.includes(String(i))){
            return false;
        }
    }
    return true;
}