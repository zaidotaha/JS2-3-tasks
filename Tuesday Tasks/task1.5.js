document.getElementById("triangle-area-button").addEventListener("click",area);

function area(){
    let x = Number(window.prompt("Please enter base value"));
    let y = Number(window.prompt("Please enter height value"));
    let area = x * y * 1/2;
    window.alert(`Area is ${area}`);
}
