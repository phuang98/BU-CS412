//Problem 1

function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    yield 0;
    yield 1;
    while(true) {
        result = val1 + val2;
        [val1, val2] = [val2, result];
        // val1 = val2;
        // val2 = result;
        yield result;
    }
}

let myFibs = fibs();
let count = 6;

function* even () {
    let val = myFibs.next().value;
    if (val % 2 == 0) {
        console.log(`   Even fib: ${val}`);
        count--;
    }
}

console.log(`Problem 1: `)
while (count > 0){
    even().next();
}
