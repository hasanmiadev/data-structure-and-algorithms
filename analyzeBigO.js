const uniqueName = (arr) => {
    let uniqueName = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
       if (!uniqueName.includes(element)) {
        uniqueName.push(element);
       }
    }
    return uniqueName;
}

const arr = ["Hasan", "Hasan", "SALMAN"]

console.log(uniqueName(arr)); // (n)2

const myObject = {
    channel:"CODE STACK",
    Instructor:"MD HASAN MIA",
    Videos:[4,5,6,7,9]
}


// console.log(Object.keys(myObject));
console.log(myObject.hasOwnProperty("channel"));

let myArray = ['Hello', 'World', 'Hasan'];