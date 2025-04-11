// Créez votre fonction ici
function calculateAverage(numberArray) {
    if (!numberArray || numberArray.length === 0) {
        return 'No numbers to calculate average'
    }
    const sum = numberArray.reduce((acc, num) => acc + num, 0)
    return sum / numberArray.length
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
