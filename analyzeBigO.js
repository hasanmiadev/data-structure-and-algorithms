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