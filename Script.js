function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value == '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value == '') {
        display.value = '0';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}




let currentTheme = 1;

        function toggleTheme() {
            const body = document.body;
            currentTheme++;

            if (currentTheme > 3) {
                currentTheme = 1;
            }

            body.className = 'theme' + currentTheme;
        }