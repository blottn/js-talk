
let x = 1;

if (true) {
    // new scope
    let x = 2;
}

console.log(x);
// 1

var y = 1;

if (true) {
    // new scope
    var y = 2;
}

console.log(y);
// 2
