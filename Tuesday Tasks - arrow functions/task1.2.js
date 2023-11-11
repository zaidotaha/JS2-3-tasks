print = () => {
    let x = window.prompt("Please enter a number");
    let text='';
    count = 1;
    checker = 1;
    for(let i = 1 ; i <= x ; i++){
        text+=String(i) + " ";
        if(checker==count){
            text+='\n';
            count++;
            checker = 1;
        }
        else{
            checker++;
        }
    }
    console.log(text);
    addElement(text);
}


addElement = (text) => {
    const newdiv = document.createElement("div");
    const newp = document.createElement("p");
    const newContent = document.createTextNode(text);
    newp.appendChild(newContent);
    newdiv.appendChild(newp);
    const currentDiv = document.getElementById("task1_2");
    currentDiv.appendChild(newdiv);
    
    newp.style.textAlign = "left";
    newdiv.style.width = '100%';

}

document.getElementById("triangle-button").addEventListener("click",print);