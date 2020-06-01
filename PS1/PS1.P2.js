//PROBLEM 2

const addNums = (left, right) => left + right;
const subNums = (left, right) => left - right;
const mulNums = (left, right) => left * right;
const divNums = (left, right) => left / right;
const modNums = (left, right) => left % right;

const value = expression => {
    let operator;

    for (let i = 0; i<expression.split('').sort().length; i++){
        if (expression.split('').sort()[i] != '.'){
            operator = expression.split('').sort()[i]
            break;
        }
    }

    let left = Number(expression.split(operator)[0])
    let right = Number(expression.split(operator)[1])

    if (operator == '+'){
        return addNums(left, right);
    }
    else if (operator == '-'){
        return subNums(left, right);
    }
    else if (operator == '*'){
        return mulNums(left, right);
    }
    else if (operator == '/'){
        return divNums(left, right);
    }
    else if (operator == '%'){
        return modNums(left, right);
    }
    else{
        return 'Unknown operator'
    }
}

console.log(`Problem 2, 8+3: ${value('8+3')}`);
console.log(`Problem 2, 5-3: ${value('5-3')}`);
console.log(`Problem 2, 6*2: ${value('6*2')}`);
console.log(`Problem 2, 8/4: ${value('8/4')}`);
console.log(`Problem 2, 8%3: ${value('8%3')}`);



module.exports = {value, addNums, subNums, mulNums, divNums, modNums};