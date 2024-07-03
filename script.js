function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        if(display.value === '120+370') {
            display.value = '200';
        } else {
            display.value = eval(display.value);
        }
    } catch {
        display.value = 'Error';
    }

}
function totinh() {
    let display = document.getElementById('display');
    display.value = "Anh Yêu Em ";
}
