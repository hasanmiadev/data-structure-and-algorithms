let temperature = [-2, 4, 45, 23, 114, "Hello",-6, -8, 34, 43];

const getHigerAndLower = (arr) => {
    let higher = arr[0];
    let lower = arr[0];


   

    for (let i = 0; i < arr.length; i++) {

        // console.log()
        if (typeof arr[i] !== "number") {
            continue
        }

        if (higher < arr[i]) {
            higher = arr[i];
        }
        
        if (lower > arr[i]) {
            lower = arr[i];
        }
    }

    return higher - lower;


}
console.log(getHigerAndLower(temperature));