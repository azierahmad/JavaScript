// Function Predict

//Predict the Output


//predict 1
function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
console.log(word);

//the answer is: it will just print hello - and the problem is: it's not correct to put return and console togather!


//predict 2

function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//the answer is: "Summing Numbers!"
//"num1 is: 3"
//"num2 is: 5"
//"Summing Numbers!"
//"num1 is: 4"
//"num2 is: 7"
//8
//11



//predict 3
function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }

// it will not print anything because i didn't call the function and give it argement !! or value