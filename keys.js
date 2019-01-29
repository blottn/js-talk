
x = {};

function mykey() {
    console.log('hmmm');
}

x[mykey] = 123;

console.log(x);
// { "function mykey() {\n    console.log('hmmm');\n}": 123 }
mykey();
// hmmm
