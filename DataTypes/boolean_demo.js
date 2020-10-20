var value = true;
console.log(value);
value = false;
console.log(value);

if(value) {
    console.log('code will execute');
}
else {
    console.log('not execute');
}
var bool1 = new Boolean("");
var bool2 = new Boolean(0);
var bool3 = new Boolean(undefined);
var bool4 = new Boolean(null);
var bool5 = new Boolean(NaN);
var bool6 = new Boolean("some text");
var bool7 = new Boolean(1); //print true when they have real value, 0 convert to false and otherwise

console.log(bool1);
console.log(bool2);
console.log(bool3);
console.log(bool4);
console.log(bool5);
console.log(bool6);
console.log(bool7);