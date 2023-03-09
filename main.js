let upperLimit = 100;

let sumOfEach = 0;
let sumTotal = 0;

for (let i = 1; i < upperLimit + 1; i++){
    sumOfEach = sumOfEach + (i ** 2);
    sumTotal = sumTotal + i;
};

console.log (`\n Upper Limit = ${upperLimit}, Result = ${(sumTotal ** 2) - sumOfEach}`);