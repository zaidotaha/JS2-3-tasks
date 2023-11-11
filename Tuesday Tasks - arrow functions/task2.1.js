
pretellFortune= ()=>{
    NumOfChildren = window.prompt("Please enter the number of children");
    Partner = window.prompt("Please enter the name of your parner"); 
    Loc = window.prompt("Please enter your location");
    Title = window.prompt("Please enter your job title");
    tellFortune(NumOfChildren, Partner, Loc, Title);
}

tellFortune=(x,y,z,w)=>{
    text = `You will be a ${w} in ${z}, and married to ${y} with ${x} kids`;
    window.alert(text);
}
document.getElementById("2_1").addEventListener("click",pretellFortune);
