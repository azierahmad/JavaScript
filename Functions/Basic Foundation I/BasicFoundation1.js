//Basic Foundation I

//First: Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function createArray(num) {        
    var newArray = [];        
    for (var i = 1; i <= num; i++) {                
        newArray.push(i);        
    }        
    return newArray
}
var y = createArray(255);
console.log(y);


//Second: Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.

function evenArray(num) {        
    var newArray = 0;        
    for (var i = 1; i <= num; i++) {                
        if (i%2 == 0){
            newArray+=i;
        }        
    }        
    return newArray
}
var y = evenArray(1000);
console.log(y);


//Third: Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.

function oddArray(num) {        
    var newSum = 0;        
    for (var i = 1; i <= num; i++) {                
        if(i%2 == 1){
            newSum+=i;
        }        
    }        
    return newSum
}
var y = oddArray(5000);
console.log(y);


//four: Iterate an array - Write a function that returns the sum of all the values within an array.

function myArray(arr) {       
    var newArray = 0;        
    for (var i = 0; i <= arr.length; i++) {                
        newArray+=i        
    }        
    return newArray
}
var y = myArray([1,2,3,4,5]);
console.log(y);


//five: Find max - Given an array with multiple values, write a function that returns the maximum number in the array.

function findMax(arr) {
    var max = arr[0] ;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>max){
            max = arr[i]
            
        }
    }return max
}
var y = findMax([5,-2,2,3,22,5,6,7, -1,9]);
console.log(y);

//six: Find average - Given an array with multiple values, write a function that returns the average of the values in the array.

function findAverage(arr){
    var sum = 0;
    var ave ;
    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    ave = sum/arr.length;
    return ave;
}
var y = findAverage([1,2,3,4,5]);
console.log(y);


//7 : Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.

function arrOdd(arr){
    var oddNumbers = [];
    for (var i = 0; i<arr.length; i++){
        if(arr[i] % 2 == 1){
            oddNumbers += arr[i]
        }
    }return oddNumbers
}
var y = arrOdd([1,2,3,4,5,6,7,8,9,10]);
console.log(y);


//8 : Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 

function greaterThan(arr){
    var y=3;
    var greater = 0;
    for (var i = 0; i<arr.length; i++){
        if(arr[i]>y){
            greater++;
        }
    }
    return greater;
}
var y = greaterThan([1,2,3,4,5,6,7]);
console.log(y);

//9: Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.

function squaresArray(arr){
    for (var i = 0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i]
    }
    return arr
}
var y = squaresArray([5,2,3,6]);
console.log(y);

//10: Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. 


function negatives(arr){
    for (var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }return arr
}
var y = negatives([-5,2,-3,6]);
console.log(y);



//11: Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 

function array(arr){
    var Max = arr[0];
    var Min = arr[0];
    var Sum = 0;
    var Avg;
    var newArr  = [Max, Min, Avg];
    for (var i = 0; i< arr.length; i++){
        if(arr[i] > Max){
            Max = arr[i];
        }
        if(arr[i] < Min){
            Min = arr[i];
        }
        Sum += arr[i];
        Avg = Sum/arr.length;
        newArr = [Max, Min, Avg];
    }
    return newArr;
}
var y = array([1,5,10,-2]);
console.log(y);



//12: Swap Values - Write a function that will swap the first and last values of any given array.

function swapValues(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swapValues(tester);
console.log(tester);


//13: Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 

function numToString(arr){
    for (var i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Test";
        }
    }
    return arr;
}
var y = numToString([1,5,10,-2]);
console.log(y);