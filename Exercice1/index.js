//votre code ici

export default function pairNumbers(startRange, endRange) {
    let result = [];
    for (let i = startRange; i <= endRange; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result.join(",");
}

console.log(pairNumbers(5, 16));

