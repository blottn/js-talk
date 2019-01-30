
var x = 2;

function modify() {
    var x = 4;
    console.log(this);
}

modify();

console.log(x);
