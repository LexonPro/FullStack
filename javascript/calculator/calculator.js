let resultEl = document.getElementById("result");

function getValues() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    return [num1, num2];
}

function add() {
    let [num1, num2] = getValues();
    resultEl.textContent = "Result: " + (num1 + num2);
}

function sub() {
    let [num1, num2] = getValues();
    resultEl.textContent = "Result: " + (num1 - num2);
}

function mul() {
    let [num1, num2] = getValues();
    resultEl.textContent = "Result: " + (num1 * num2);
}

function div() {
    let [num1, num2] = getValues();

    if (num2 === 0) {
        resultEl.textContent = "Result: Cannot divide by 0";
    } else {
        resultEl.textContent = "Result: " + (num1 / num2);
    }
}