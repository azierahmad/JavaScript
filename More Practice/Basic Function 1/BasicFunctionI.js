//Basic Function I
//Objectives
//1- Understand how a computer executes each line of code
//2- Get comfortable with how a function works and how its return statement works
//3- Identify some common mistakes students make and learn how to avoid them


//1-
function a(){
    return 35;
}
console.log(a())
//the answer is 35

//2-
function a(){
    return 4;
}
console.log(a()+a());
//the answer is 8

//3-
function a(b){
    return b;
}
console.log(a(2)+a(4));
//the answer is 6

//4-
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//the answer is 3 , 9

//5-
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));
//the answer is 40

//6-
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//the answer is 4

//7-
function a(b,c){
    return b*c;
}
console.log(10,3);//the answer is {10,3} 
console.log( a(3,10) );//the answer is 30

//8-
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);//the answer is 3
console.log(4);//the answer is 4

//9-
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//the answer is 2,5,8,11

//10-
function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));
//the answer is {0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0}


//11-
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}
//the answer is "it will not work because we didn't call the function"


//12-
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//the answer is 10


//13-
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//the answer is 15 , 10


//14-
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//the answer is 15 , 15
