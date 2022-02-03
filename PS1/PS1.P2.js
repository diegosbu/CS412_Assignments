//helper parseExp - converts expression string into operands array
const parseExp = expression => [Number(expression[0]), Number(expression[2])]

//getOperation - returns function based on input operator
const getOperation = operator => {
    switch(operator) {
        case '+':
            return (expression) => {
                const [first, second] = parseExp(expression);
                return first + second;
            }
            break;
        case '-':
            return (expression) => {
                const [first, second] = parseExp(expression);
                return first - second;
            }
            break;
        case '*':
            return (expression) => {
                const [first, second] = parseExp(expression);
                return first * second;
            }
            break;
        case '^':
            return (expression) => {
                const [first, second] = parseExp(expression);
                return first ** second;
            }
            break;
        case '/':
            return (expression) => {
                const [first, second] = parseExp(expression);
                return first / second;
            }
            break;
    }
}

//evaluate - passes input operator to getOperation and returns function
const evaluate = (expression) => {
    return getOperation(expression[1]);
}


let expression = '4+2';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = '5*7';
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = '6-1';
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = '9/2';
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = '2^8';
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

