function calculateBasic() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
    }

    document.getElementById('basicResult').innerText = `Result: ${result}`;
}

function solveQuadratic() {
    const equation = document.getElementById('quadraticEquation').value;
    try {
        const roots = math.solveQuadratic(equation);
        document.getElementById('algebraResult').innerText = `Roots: ${roots[0]}, ${roots[1]}`;
    } catch (error) {
        document.getElementById('algebraResult').innerText = `Error: ${error.message}`;
    }
}

function calculateCircleArea() {
    const radius = parseFloat(document.getElementById('radius').value);
    const area = Math.PI * radius * radius;
    document.getElementById('geometryResult').innerText = `Area: ${area}`;
}

function calculateTrig() {
    const angle = parseFloat(document.getElementById('angle').value);
    const func = document.getElementById('trigFunction').value;
    let result;

    switch (func) {
        case 'sin':
            result = Math.sin(math.unit(angle, 'deg'));
            break;
        case 'cos':
            result = Math.cos(math.unit(angle, 'deg'));
            break;
        case 'tan':
            result = Math.tan(math.unit(angle, 'deg'));
            break;
    }

    document.getElementById('trigResult').innerText = `Result: ${result}`;
}

function calculateDerivative() {
    const func = document.getElementById('function').value;
    try {
        const derivative = math.derivative(func, 'x').toString();
        document.getElementById('calculusResult').innerText = `Derivative: ${derivative}`;
    } catch (error) {
        document.getElementById('calculusResult').innerText = `Error: ${error.message}`;
    }
}

function calculateIntegral() {
    const func = document.getElementById('function').value;
    try {
        const integral = math.integral(func, 'x').toString();
        document.getElementById('calculusResult').innerText = `Integral: ${integral}`;
    } catch (error) {
        document.getElementById('calculusResult').innerText = `Error: ${error.message}`;
    }
}

function calculateStatistics() {
    const data = document.getElementById('data').value.split(',').map(Number);
    const mean = math.mean(data);
    const median = math.median(data);
    const stdDev = math.std(data);

    document.getElementById('statisticsResult').innerText = `Mean: ${mean}, Median: ${median}, Standard Deviation: ${stdDev}`;
}
