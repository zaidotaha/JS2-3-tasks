preavg=()=>{
    let x = Number(window.prompt("Please enter the first number"));
    let y = Number(window.prompt("Please enter the second number"));
    let z = Number(window.prompt("Please enter the third number"));
    let a = Number(window.prompt("Please enter the fourth number"));
    let b = Number(window.prompt("Please enter the fifth number"));
    let array= [];
    array.push(x);
    array.push(y);
    array.push(z);
    array.push(a);
    array.push(b);
    avg(array);
}

avg=(array)=>{
    let sum=0;
    for(let i = 0 ; i < 5 ; i++){
        sum+=array[i];
    }
    window.alert(sum/5);
}

document.getElementById("2_19").addEventListener("click",preavg);
