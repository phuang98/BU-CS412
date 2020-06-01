// Problem 3

function cubed (num = 0) {
    console.log(`   ${num}^3 = ${Math.pow(num, 3)}`);
}

let array = [1, 2, 3, 4, 5, 6, 7];

console.log('Problem 3:');
array.map(x => cubed(x));