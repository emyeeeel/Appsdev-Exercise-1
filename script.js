const first = document.getElementById('first-num');
const second = document.getElementById('second-num');
const result = document.getElementById('result');

function multiply(){
    const num1 = parseInt(first.value, 10);
    const num2 = parseInt(second.value, 10);
    result.innerHTML = 'Result: ' + (num1 * num2);
}

function divide(){
    const num1 = parseInt(first.value, 10);
    const num2 = parseInt(second.value, 10);
    if (num2 !== 0) {
        result.innerHTML = 'Result: ' + (num1 / num2);
    } else {
        result.innerHTML = 'Error: Division by zero is not allowed.';
    }
}
