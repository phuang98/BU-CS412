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

module.exports = {value, addNums, subNums, mulNums, divNums, modNums};