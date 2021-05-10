//Loops are very common, and, as programmers do, they developed a loop that shorthanded many of the components we covered in while loops into a single line.  Let's look at the while loop we wrote int the previous section: 


var num = 0;
while(num <=5) {
    console.log(num);
    num = num + 1;
}


//For Loops
//Now let's see how our for loop shorthand looks with all of the same information. The following will do exactly the same thing as the code above:

var num = 0;
for(var i = 0; i <=5; i++) {
    console.log(num);
}

//So why do we need for loops and while loops?
//You might be asking, if loops are just designed to do something repeatedly, why do we need two kinds? For and while loops are good for different situations.
//A for loop is usually used when you want to repeat a process a known number of times.
//A while loop is usually used when you want to repeat a process until some condition is met. For example, lets say we didn't know how high we're counting, but we want to stop once we get to a number that is divisible by 100? In that case, rather than saying my loop will execute 100 times, we will set it up so our loop will execute until it finds something that is divisible.  Don't worry too much about the specific use cases for while loops just yet, because we will see examples as we dive deeper into algorithms later in the course.

