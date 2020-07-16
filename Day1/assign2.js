console.log('Hi');

// variable - The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside any function, the scope of the variable is global.
//var is function scoped.

// whereas let and const - The scope of a variable defined with the keyword “let” is limited to the “block” defined by curly braces i.e. {} .
// whereas let and const are block scoped.

// whereas const - The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword 'const' , it cannot be reassigned.
//const variable can't be re-assigned but can be mutated.

// difference between a variable and let
// for eg:
{
    var a = 1;
    console.log(a);
} // block 1

{
    a++;
    console.log(a);
} // block 2

// The scope of a variable declared by keyword 'var' is limited within a function in which it is defined but here as it is not a function the scope of the variable is global so, which means that value of variable 'a' will be 2 in block 2 also as it is in block 1.
// JavaScript doesn't recognise curly braces as scope delimiter so to limit scope of a variable define it within a function.

// But if we declare a variable by usind keyword 'let' instead of 'var' we won't have to define it in function in order to limit its scope.

// for eg:
{
    let b = 10;
    console.log(b);
} // block 1

{
    //b++;
    console.log('Here b is an undefined variable.');
} // block 2

// here the scope of 'b' is limited upto the block in which it is defined
// so value of 'b' in block 1 is just limited within that block and the 'b' in block in block 2 is different. 

// So, both var and let different from each other as the scope of a variable declared by keyword 'var' is just limited within the function in which it is defined and scope of a variable declared by keyword 'let' or 'const' is limited to the code block defined by curly braces.
// So, it's a good practice to limit the scope of a variable as in JavaScript its possible that a variable can get modified inadvertently. So, to prevent this we should declare a variable using 'let' or 'const'.

// Now in case of the keyword 'const', the variable once declared as 'const' cannot be reassigned. But they can be mutated.

// for eg 1:
{
    const PI = 3.14;
    console.log(PI);
} // block 1

{
    console.log('Here PI is an undefined variable.');
} // block 2

// The value of PI will be not recognised in the block 2 as like 'let' it's scope is limited to the block of code defined by curly braces. So, it will be recognised in the block 1 only.

// eg 2:
{
    const a = [ 1, 2, 4 ];
    const b = { name:'Rahul' };

    console.log(a);
    console.log(b);

    a.push( 3, 5 );
    b.name = 'Rakesh';

    console.log(a);
    console.log(b);
}

// So, const values can be mutated.