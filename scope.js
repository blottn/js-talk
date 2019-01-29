
function Thing() {

    this.q = () => {console.log(this)}
    this.p = function() {console.log(this)}
}

(new Thing()).p();  // Thing { q: [Function], p: [Function] }
(new Thing()).q();  // Thing { q: [Function], p: [Function] }

(() => {console.log(this)}).call({});


function logThis() {
    console.log(this);
}

function Obj() {
    this.a = 12;
    this.func = logThis;
}

obj = new Obj();

// synonymous
obj.func();
logThis.call(obj);







