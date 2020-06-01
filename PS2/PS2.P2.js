//Problem 2

function* onePerLine (string = '') {
    let splitStr = string.split(' ');
    yield* splitStr;
}
let string = 'All I know is something like a bird within her sang'
let length = string.split(' ').length;

let word = onePerLine(string);

console.log('Problem 2:')
while (length > 0) {
    console.log(`   ${word.next().value}`);
    length--;
}