//Qs 2
var personname = "Hello eric ,Would you like to learn some phython today";
console.log(personname);
//Qs 3
var person = "Imran khan";
console.log("lower case :", person.toLowerCase());
console.log("Upper case:", person.toUpperCase());
console.log("TITEL CASE:", person.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
//Qs 4
var quote = 'kevin OLeary said,"A salary is the drug they give you to forget your dreams"';
console.log(quote);
//Qs 5
var famousperson = "imran khan";
var message1 = "the famous person is ".concat(famousperson);
console.log(message1);
//Qs 6
var name1 = 'quaid-e-azam\tfarhan\tali\t';
console.log(name1);
var name2 = '\nareesha\n alishba\n areeba\n';
console.log(name2);
//Qs 7
var add = 4;
var sum = 4;
console.log(add + sum);
var multi = 4;
var num1 = 2;
console.log(multi * num1);
var sub = 12;
var subtract = 4;
console.log(sub - subtract);
var divis = 64;
var divide = 8;
console.log(divis / divide);
//Qs 8
console.log(6 + 2);
console.log(4 + 4);
console.log(7 + 1);
console.log(8 + 0);
//Qs 9
var favNum = 5;
var message = "favourite number ".concat(favNum);
console.log(message);
//  Qs 10
//function
function area(radius) {
    var pi = 3.14;
    //formula of circel
    var circel = pi * 2 * radius;
    console.log(circel);
}
//to call the function
area(2);
//Qs 11
var friends = ["laiba", "aiman", "eman", "shafaque"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
//QS 12
var friendsname = ["laiba", "aiman", "eman", "shafaque"];
console.log("hello !".concat(friendsname[0], " how are you ?"));
console.log("hello! ".concat(friendsname[1], " how are you?"));
console.log("hello! ".concat(friendsname[2], " how are you?"));
console.log("hello! ".concat(friendsname[3], " how are you?"));
