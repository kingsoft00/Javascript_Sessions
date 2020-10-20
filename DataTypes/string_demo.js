var first_name = 'King';
var last_name = 'Kong';

console.log(first_name);
console.log(last_name);
console.log(first_name + last_name);
console.log(first_name + ' '+last_name);

var description = "Hello everyone...'hiii'..."; // for quote in quote, '' inside "" and "" inside ''
console.log(description)
var description = 'Hello everyone..."hiii"...';
console.log(description);
var description = 'Hello everyone...\"hiii\"...'; // use \ to display ' or " symbols
console.log(description);

var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

console.log(str1 == str2); //false
console.log(str1 == str3); //true 
console.log(str1 === str4);//true

console.log(typeof (str1)); //object
console.log(typeof (str3)); //string