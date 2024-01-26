let operation = prompt('Enter the operation (+,-,*,/):');
let num1 = parseFloat(prompt('Enter the first number:'));
let num2 = parseFloat(prompt('Enter the second number:'));
let result;
switch(operation){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        alert('Incorrect operation');
        break;
}
if (result !== undefined){
alert(num1 + ' ' + operation + ' ' + num2 + ' = ' + result);
}