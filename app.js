document.getElementById('btn').addEventListener('click', function (event) {
    event.preventDefault(); // stop page refresh

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operator = document.getElementById('Operations').value;
    let resultText = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultText.innerText = "Enter valid numbers";
        return;
    }

    let answer;

    switch (operator) {
        case 'add':
            answer = num1 + num2;
            break;
        case 'subtract':
            answer = num1 - num2;
            break;
        case 'multiply':
            answer = num1 * num2;
            break;
        case 'divide':
            answer = num2 !== 0 ? num1 / num2 : "Error";
            break;
        case 'modulus':
            answer = num1 % num2;
            break;
        case 'exponent':
            answer = num1 ** num2;
            break;
    }

    resultText.innerText = answer; // 👈 shows answer in H1
});
