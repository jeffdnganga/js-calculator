const calc = () => {

    const num1 = parseInt(document.querySelector('#number1').value);
    const num2 = parseInt(document.querySelector('#number2').value);
    const op = document.querySelector('#operator').value;

    let calculate;

    switch (op) {

        case 'add':
            calculate = num1 + num2;
        break;

        case 'subtract':
            calculate = num1 - num2;
        break;

        case 'divide':
            calculate = num1 / num2;
        break;

        case 'multiply':
            calculate = num1 * num2;
        break;

    }

    /*if (op == "add") {
        calculate = num1 + num2;
    } 
    else if (op == "subtract") {
        calculate = num1 - num2;
    } 
    else if (op == "divide") {
        calculate = num1 / num2;
    } 
    else if (op == "multiply") {
        calculate = num1 * num2;
    }*/

    document.getElementById('result').innerHTML = "The answer is: " + calculate;
}
