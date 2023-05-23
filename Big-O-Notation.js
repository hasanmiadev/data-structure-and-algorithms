
const summOfAll = (n) => {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}

console.log(summOfAll(6999));

const newSom = (n) => {
    return n * (n + 1) / 2
}

console.log(newSom(6999));