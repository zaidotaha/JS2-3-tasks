document.getElementById("month-button").addEventListener("click",month_checker);

function month_checker(){
    let month="";
    let month_num;
    month_num = Number(window.prompt("Enter the month number"));
    
    switch(month_num){
        case 1: month="January"; break;
        case 2: month="February"; break;
        case 3: month="March"; break;
        case 4: month="April"; break;
        case 5: month="May"; break;
        case 6: month="June"; break;
        case 7: month="July"; break;
        case 8: month="August"; break;
        case 9: month="September"; break;
        case 10: month="October"; break;
        case 11: month="November"; break;
        case 12: month="Decemer"; break;
        default:
            window.alert("Invalid");
    }
    ans = `The ${month_num}th month of the year is ${month}`;
    window.alert(ans);
}