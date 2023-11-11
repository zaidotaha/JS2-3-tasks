document.getElementById("1_7").addEventListener("click",price_checker);

function price_checker(){
    let x = window.prompt("Please enter drink name").toLowerCase();
    let price = -1;
    switch(x){
        case "banana":{
            price = 20;
            break;
        }
        case "apple":{
            price = 15;
            break;
        }
        case "mango":{
            price = 25;
            break;
        }
        case "strawberry":{
            price = 10;
            break;
        }
        case "watermenlon":{
            price = 18;
            break;
        }
        case "lemon":{
            price = 24;
            break;
        }
        case "cocktail":{
            price = 18;
            break;
        }
        case "carrot":{
            price = 28;
            break;
        }
        case "orange":{
            price = 5;
            break;
        }
        case "kiwi":{
            price = 12;
            break;
        }
        default:
            window.alert("We don't make that drink");
    }
    if(price!=-1){
        window.alert(`The price of a ${x} drink is ${price} dollars`)
    }
}
