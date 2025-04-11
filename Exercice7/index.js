function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value.trim();
    const resultElement = document.getElementById('binaryResult');

    const number = Number(decimalInput);
    if (isNaN(number) || !Number.isInteger(number) || number < 0) {
        return;
    }

    const binary = number.toString(2);

    resultElement.textContent = `Binaire : ${binary}`;
}
