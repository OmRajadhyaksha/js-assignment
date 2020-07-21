let num = prompt("Enter a no:");

function check(string)
{
    
    if( num%2 == 0 )
    {
        string = console.log( num + " is an even no. ");
        return string;
    }
    else
    {
        string = console.log( num + " is an odd no. ");
        return string;
    }

    
}

check(num);

console.log(string);