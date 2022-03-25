// level {2}

let myArray = [1,3,4,6,7,8];

let filteredArray = [];

for (let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 !== 0 ) {
        filteredArray.push(myArray[i]);
    }
    
}
console.log (filteredArray);