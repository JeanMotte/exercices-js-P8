// Créez votre fonction ici

function calculate(int1, int2, operand) {
    // Vérifiez que les deux premiers arguments sont des nombres
    const numberInt1 = Number(int1);
    const numberInt2 = Number(int2);

    switch (operand) {
        case '+':
            return numberInt1 + numberInt2;
        case '-':
            return numberInt1 - numberInt2;
        case '*':
            return numberInt1 * numberInt2;
        case '/':
            if (numberInt2 === 0) {
                return "Division by zero is not allowed";
            }
            return numberInt1 / numberInt2;
        default:
            return "Invalid operator";
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
