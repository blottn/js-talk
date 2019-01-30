
let test = new Function('var x=34;console.log(x);');



test();
// 34



eval('var x = 33; console.log(x);'); // 33
