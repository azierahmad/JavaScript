//Imagine that you are given an array of objects.
//How would you print/log John's age?
//How would you print/log the name of the first object?
//How would you print/log the name and age of each user using a for loop?  Your output should look something like this

var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];
console.log(users[1].age);
console.log(users[0].name);

//the answer for part 3 is:

var users = [{
    name: "Michael",
    age: 37
    }, {
    name: "John",
    age: 30
    },
    {
    name: "David",
    age: 27
    }
    ];
    
    var text = "";
    for (var i = 0; i < users.length; i++) {
        var name = users[i].name; 
        var age = users[i].age; 
        text += name + " - " +age + "\n";
    }
console.log(text)

//or

for (var i = 0; i < users.length; i++){
    console.log(users[i].name, "-", users[i].age);
}