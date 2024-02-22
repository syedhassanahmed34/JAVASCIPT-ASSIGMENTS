// 1. Declare 3 variables in one statement.
// 2. Declare 5 legal and illegal variables names
// 3. Display this in your browser
//a.  A heading starting "Rules for naming JS variables"
//b.  Variables names can only contain _________ , ___________ , __________ and _____________
//c.  Variables must begin with a ________ , _________ or _________. For example $name , _name or name
//d.  Variable names are case __________
//e.  Variable name should not be JS __________


                  // 1 //
var firstName = "John", lastName = "Doe", age = 30;

            //2 //
var $my_1stVariable = "Hello";
var _my_2ndVariable = "World";
var my3rdVariable = "!";
var my4thVariable = "is";
var my5thVariable = "awesome";

// Declare 5 illegal variable names
// (These will cause a syntax error)
// var 1my-variable = "This is illegal";
// var my variable = "This is illegal";
// var my variable name = "This is illegal";
// var my#variable = "This is illegal";
// var my variable! = "This is illegal";

// Display the rules for naming JS variables in the browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs.</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign.</p>");
document.write("<p>Variable names are case-sensitive.</p>");
document.write("<p>Variable names should not be reserved words in JavaScript, such as 'for', 'while', 'if', etc.</p>");