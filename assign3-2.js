// console.log("HI");
let marks = prompt("Enter your marks:");

let str1 = "Marks are ";
let str2 = " and Grade is ";
let str3 = " and you are FAIL."

if( marks != true && marks == null )
{
        let new_var = prompt("Do u wanna enter your marks again?");
        marks = new_var;
        console.log("No Entry");
}
else
{
    switch(marks)
    {
        case( marks >= 85):
            console.log(str1.concat(marks).concat(str2).concat("A."));

        case( marks < 85 && marks >= 70):
            console.log(str1.concat(marks).concat(str2).concat("B."));

        case( marks < 70 && marks >= 65):
            console.log(str1.concat(marks).concat(str2).concat("C."));

        case( marks < 65 && marks >= 50 ):
            console.log(str1.concat(marks).concat(str2).concat("D."));

        case(marks < 50 && marks >= 45):
            console.log(str1.concat(marks).concat(str2).concat("E."));

        case( marks > 35):
            console.log(str1.concat(marks).concat(str2).concat("F."));

        default:
            console.log(str1.concat(marks).concat(str3));
    }
}
// }