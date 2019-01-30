function Obj() {
    this.member = 123;
}

Obj.prototype.generalmember = "neato";

console.log(new Obj().generalmember);
// "neato"
