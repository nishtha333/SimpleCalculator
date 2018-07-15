const add = (num1, num2) => {
    if(num1 === undefined || num2 === undefined) {
        throw new Error("Can't add an undefined number");
    }
    return num1 + num2;
}

const subtract = (num1, num2) => {
    if(num1 === undefined || num2 === undefined) {
        throw new Error("Can't subtract an undefined number");
    }
    return num1 - num2;
}

const multiply = (num1, num2) => {
    if(num1 === undefined || num2 === undefined) {
        throw new Error("Can't multiply an undefined number");
    }
    return num1 * num2;
}

module.exports = {
    add,
    subtract,
    multiply
}