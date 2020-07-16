// num
var num = 5;

// string
var name = 'Tim';

// undefined
var x;

// null
var y = 'null';

// array
var integers = [1, 2, 3, 4];

// object
var employee1 = {
    name :'Rahul',
    age : 26,
    city :'Mumbai'

};

employee2 = {
    name :'Rajesh',
    age : 28,
    city :'Nashik'

};

employee3 = {
    name :'Rakesh',
    age : 30,
    city :'Nagpur'

};

// boolean
var canfly = 'false';

// 1. console.log() is used to print the output on the console screen.We can put anything in the log like string, array, object, number, boolean, null and undefined.

//a. num
console.log(num);

//b. string
console.log(name);

//c. undefined
console.log(x);

//d. null
console.log(y);

//e. array
console.log(integers);

//f. object
console.log( { employee1, employee2, employee3} );

//g. boolean
console.log(canfly);

//2. console.table() is used to display output in the table format. We can send input as array or object.

//a.  array
console.table(integers);

//b. object
console.table( { employee1, employee2, employee3} );

//3. console.error() is used to show error. By default it is displayed in red color and it is also used to test the code.

console.error('This is an error');

//4. console.warn() is used to show warning. By default it is displayed in yellow color.

console.warn('This is an warning');

//5. console.time() and console.timeEnd() are used to know how much time a function or a block of object takes to execute. It takes a label which must be same in both cases and the code inside the block can be anything (function, object, simple console) but the time returned is in milliseconds.

console.time('abc');
let func1 = function(){
    console.log('function is running');
};

let func2 = function(){
    console.log('function is running');
}; 
console.timeEnd('abc');
 
//6. To add styling to the output displayed by console.log() we use console.log("%c Hi","color:red;") where the css styles are passed as parameters which replaces the %c.

console.log('%c Hi!! Welcome to my website.','color:blue;');

//7. console.group() and console.groupEnd() are used to group contents in a separate group. In both this methods they accept parameter as a label and also console.groupCollapse() is used to cretae a collapsed group of messages. Here parameter is optional but it accepts a label.

console.log('Students');
console.group('Names');
console.log('Rahul');
console.log('Rajesh');
console.log('Rakesh');
console.groupCollapsed('Class 9');
console.log('Division');
console.log('A');
console.log('B');
console.log('C');
console.groupEnd();
console.log('This is a list of students');

console.log('\n');

//8. console.count() is used to count the no of times a funciton is executed.

console.log('This is no of times a function is executed');
for( let i = 0; i<5; i++ )
{
    console.count(i);
}

//9. console.info() is used to write a message to the console.
console.info('Hi,This is a message');

//10. console.assert() method writes a message to the console only if the expression evaluates to false.
console.assert(5>7,'This is an error');

//11.  console.trace() method displays a trace that show how the code ended up at a certain point.

function my_func1()
{
    mytrace_func();
};

function my_func2()
{
    my_func1();
};

function mytrace_func()
{
    console.trace();
};

my_func2();