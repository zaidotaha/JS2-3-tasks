// Question 1
{
    console.log("First Question:");
    arr1 = [ 1,7, 9, 45];
    arr2 = ["Str","alex","moh"];
    arr3 = ['the','fox','over','lazy','dog'];
    console.log(`first array: ${arr1} \n second array: ${arr2} \n third array: ${arr3}`);
}
// Question 2
{
    console.log("Second Question:");
    var fruits=["Tomato","Banana","Watermelon"];
    console.log(`Index of Banana is ${fruits.indexOf("Banana")}
Index of Tomato is ${fruits.indexOf("Tomato")}`);

}

// Question 3
{
    console.log("Third Question:");
    let Favorite_Food = ['Mansaf', 'Mandi', 'Yalanji', 'Waraq 3inb', 'Mashawi'];
    let Favorite_Sport= ['Football', 'Basketball', 'Table tennis'];
    let Favorite_Movie = ['Spiderman', 'Superman', 'voy voy', 'Batman'];
    console.log(`first array: ${Favorite_Food} \n second array: ${Favorite_Sport} \n third array: ${Favorite_Movie}`);
}

// Question 4
{
    console.log("Fourth Question:");
    firstOfArray = (array) => {return array[0];}
    let Favorite_Food = ['Mansaf', 'Mandi', 'Yalanji', 'Waraq 3inb', 'Mashawi'];
    let Favorite_Sport= ['Football', 'Basketball', 'Table tennis'];
    console.log(firstOfArray(Favorite_Food));
    console.log(firstOfArray(Favorite_Sport));
}

// Question 5
{
    console.log("Fifth Question:");
    lastOfArray = (array) => {return array[array.length-1];}
    let Favorite_Food = ['Mansaf', 'Mandi', 'Yalanji', 'Waraq 3inb', 'Mashawi'];
    let Favorite_Sport= ['Football', 'Basketball', 'Table tennis'];
    console.log(lastOfArray(Favorite_Food));
    console.log(lastOfArray(Favorite_Sport));
    
}

// Question 6
{
    console.log("Sixth Question:");
    var array = [1,3,4,6,8,9,10];
    array.shift();
    array.shift();
    array.shift();
    array.unshift(4);
    array.unshift(3);
    array.unshift(1);
    console.log(array);
}
// Question 7
{
    console.log("Seventh Question:");
    var array = [5,9,-7,3.5];
    console.log(array.push(4) + " is the length of the array after push(4)");
    console.log(array.unshift(8) + " is the length of the new array after unshift(8)");
    console.log(array.shift() + " is the element removed after shift()");
    console.log(array.pop() + " is te element removed after pop()");
}
// Question 8
{
    console.log("Eigth Question:");

    middleOfArray = (array) => {
        if (array.length % 2 == 0){
            return `${array[array.length/2]} and ${array[array.length/2 - 1]}`;
        }
        else{
            return `${array[Math.floor(array.length/2)]}`;
        }
    }

    console.log(middleOfArray([1,4,5]));
    console.log(middleOfArray(["t","u","g","x"]));

}
// Question 9
{
    console.log("Question 9");
    var nums= [1,2,3,8,9];
    
    nums[0] = 5;
    nums[1] = -22;
    nums[2] = 3.5;
    nums[3] = 44;
    nums[4] = 98;
    nums[5] = 44;

    console.log(nums);
}
// Question 10
{
    console.log("Question 10:");
    indexOfArray = (array, x) => {return array.indexOf(x);}
    var nums= [1,2,3,8,9];
    console.log(indexOfArray(nums,3));
    console.log(indexOfArray(nums,1));
    console.log(indexOfArray(nums,4));
}
// Question 11
{
    console.log("Question 11:");
    var nums= [1,2,3,8,9];
    arrayExceptLast = (array) => {return array.slice(0,-1);}
    console.log(arrayExceptLast(nums));
}

// Question 12
{
    console.log("Question 12:");
    var nums= [1,2,3,8,9];
    addToEnd = (array, x) => {return array.concat(x);}
    console.log(addToEnd(nums,10));
}

// Question 13
{
    console.log("Question 13:");
    var nums= [1,2,3,8,9];

    sumArray = (array) => {
        let sum = 0;
        for(let i = 0 ; i < array.length ; i++){
            sum += array[i];
        }
        return sum;
    }
    console.log(sumArray(nums));
    
    //while loop
    sumArray2 = (array) => {
        let sum = 0;
        let i = 0;
        while(i<array.length){
            sum += array[i];
            i++;
        }
        return sum;
    }
    console.log(sumArray2(nums));
}
// Question 14
{
    console.log("Question 14:");
    var nums= [1,2,3,8,9];
    
    //for loop
    minInArray = (array) => {
        let min = Number.MAX_SAFE_INTEGER;
        for(let i = 0 ; i < array.length ; i++){
            if(array[i]<min){
                min = array[i];
            }
        }
        return min;
    }
    console.log(minInArray(nums));

    //while loop
    minInArray2 = (array) => {
        let min = Number.MAX_SAFE_INTEGER;
        let i = 0;
        while(i<array.length){
            if(array[i]<min){
                min = array[i];
            }
            i++;
        }
        return min;
    }
    console.log(minInArray2(nums));
}
// Question 15
{
    console.log("Question 15:");
    var nums= [1,2,3,8,9];
    removeFromArray = (array, x) =>{
        for(let i = 0 ; i < array.length ; i++){
            if(array[i]==x){
                array.splice(i,1);
                i--;
            }
        }
        return array;
    }
    console.log("Original array: " + nums);
    console.log(removeFromArray(nums,2) + " after removing 2");
    console.log(removeFromArray(nums,8) + " after removing 8");
}

// Question 16
{
    console.log("Question 16:");
    var nums= [1,2,3,8,9];
    oddArray= (array) =>{
        for(let i = 0 ; i < array.length ; i++){
            if(array[i]%2==1){
                array.splice(i,1);
                i--;
            }
        }
        return array;
    }
    console.log(oddArray(nums));

    oddArray2= (array) =>{
        let i = 0;
        while(i<array.length){
            if(array[i]%2==1){
                array.splice(i,1);
                i--;
            }
        }
        return array;
    }
    console.log(oddArray(nums));

}
// Question 17
{
    console.log("Question 17:");
    var nums2= [1,2,3,8,9,77];
    var nums= [1,2,3,8,9];
    aveArray = (array) => {
        let sum = 0;
        for(let i = 0 ; i < array.length ; i++){
            sum+=array[i];
        }
        return sum/array.length;
    }
    console.log(aveArray(nums2));
    console.log(aveArray(nums));
    aveArray2 = (array) => {
        let sum = 0;
        let i = 0;
        while(i < array.length){
            sum+=array[i];
        }
        return sum/array.length;
    }
    console.log(aveArray(nums2));
    console.log(aveArray(nums));
}
// Question 18
{
    console.log("Question 18");
    var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
    shorterInArray= (array) => {
        let shorter = array[0];
        for(let i = 1 ; i < array.length ; i++){
            if(array[i].length < shorter.length){
                shorter = array[i];
            }
        }
        return shorter;
    }
    console.log(shorterInArray(strings));

    shorterInArray2= (array) => {
        let shorter = array[0];
        let i = 1;
        while(i < array.length){
            if(array[i].length < shorter.length){
                shorter = array[i];
            }
        }
        return shorter;
    }
    console.log(shorterInArray(strings));
}

// Question 19
{
    console.log("Question 19");
    var string= "alex mercer madrasa rashed2 emad hala";
    repeatChar = (str,x) => {
        let sum = 0;
        for(let i = 0 ; i < str.length; i++){
            if(str[i]==x) sum++;
        }
        return sum;
    }
    console.log(repeatChar(string,"a"));

    repeatChar = (str,x) => {
        let sum = 0;
        let i = 0;
        while(i < str.length){
            if(str[i]==x) sum++;
            i++;
        }
        return sum;
    }
    console.log(repeatChar(string,"a"));    
}

// Question 20
{
    console.log("Question 20");
    var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
    evenIndexOddLength = (array) => {
        let arr = [];
        for(let i = 0 ; i < array.length ; i+=2){
            if(array[i].length%2==1){
                arr.push(array[i]);
            }
        }
        return arr;
    }
    console.log(evenIndexOddLength(strings));

    evenIndexOddLength = (array) => {
        let arr = [];
        let i = 0;
        while(i < array.length){
            if(array[i].length%2==1){
                arr.push(array[i]);
            }
            i+=2;   
        }
        return arr;
    }
    console.log(evenIndexOddLength(strings));
}

// Question 21
{
    console.log("Question 21");
    var nums= [44, 5, 4, 3, 2, 10];
    powerElementIndex = (array) => {
        let arr = [];
        for(let i = 0 ; i < array.length ; i++){
            arr.push(Math.pow(array[i],i));
        }
        return arr;
    }
    console.log(powerElementIndex(nums));

    powerElementIndex = (array) => {
        let arr = [];
        let i = 0;
        while(i < array.length){
            arr.push(Math.pow(array[i],i));
            i++;
        }
        return arr;
    }
    console.log(powerElementIndex(nums));
}

// Question 22
{
    console.log("Question 22");
    var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
    evenIndexOddLength = (array) => {
        let arr = [];
        for(let i = 0 ; i < array.length ; i+=2){
            if(array[i]%2==0){
                arr.push(array[i]);
            }
        }
        return arr;
    }
    console.log(evenIndexOddLength(nums));
    evenIndexOddLength = (array) => {
        let arr = [];
        let i = 0;
        while(i < array.length){
            if(array[i]%2==0){
                arr.push(array[i]);
            }
            i+=2;
        }
        return arr;
    }
    console.log(evenIndexOddLength(nums));
}
