
function add() {
    this.member = "oh hai";
    return 1 + 2;
}

console.log(new add());
// add { member :'oh hai'}

console.log(add());
// 3



