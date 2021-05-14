//Basic Foundation II

//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
function biggieSize(arr){
    for (var i = 0; i<arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "Big"
        }
    }
    return arr;
}
var x = biggieSize([1,2,-4,5,-2]);
console.log(x);


//2: Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function array(arr){
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]<min){
            console.log(arr[i])
            continue;
        }
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
var x = array([1,3,2,-4,5,-2]);
console.log(x);


//3: Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function Another(arr){
    var oddNum = [];
    console.log(arr.length-1)
    for (var i = 0; i < arr.length; i++){
        
    }
}
var x = Another([1,3,2,-4,5,-2]);
console.log(x);



//4: Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr += arr[i]+arr[i] + ",";
    }
    return newArr
}
var x = doubleVision([1,2,3])
console.log(x)


//5: Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i]>0){
            sum +=arr[i];
        }
    }
    arr[arr.length-1] = sum
    return arr
}
var x = countPositives([-1,1,1,1])
console.log(x)



//6: Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function EvensandOdds(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]%2==1){
            arr[i] = "That's odd!";
        }
        else if(arr[i]%2==0){
            arr[i] = "Even more so!";
        }
    }
    return arr;
}
var x = EvensandOdds([3,5,7,2,4,6])
console.log(x)


//7: Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementSeconds([1,2,3,4,5]));


//8: Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.

function previousLengths(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(previousLengths(["hello", "dojo", "awesome"]));


//9: Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr += arr[i]+7 + ",";
    }
    return newArr;
}
var x = addSeven([1,2,3])
console.log(x)


//10: Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array. 

function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(reverse([3,1,6,4,2,5]));


//11 Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negativeMaker(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = arr[i]*-1;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(negativeMaker([1,-3,5]));


//12: Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once. Example: [1,"food",true, "food"] ==> "yummy" "yummy". [1,2,4,"sleep"] ==> "I'm hungry"

function hungry(arr){
    var gotFood = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            gotFood = true;
        }
    }
    if (gotFood == false){
        console.log("I'm hungry");
    }
}
hungry([1,2,4,"food"]);


//13: Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapToward(arr){
    for (var i = 0; i < arr.length; i++){
        var temp = arr[0]
        arr[0] = arr[arr.length-1]
        arr[arr.length-1] = temp;
    }
    return arr
}
var x = swapToward([1,2,3,4,5])
var y = swapToward([true,42,"Ada",2,"pizza"])
console.log(x)
console.log(y)


//14: Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr,num){
    for (var i = 0; i < arr.length; i++){
        arr[i]= arr[i]*num
    }
    return arr
}
var x = scaleArray([1,2,3], 3)
console.log(x)


