// Create an array called `colors` that contains three colors.

// Log the last item in the array to the console.

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

// Create an `instructor` object that contains three key-value pairs.

// Add a `facial-hair` property to `instructor`.

// Log the value of the `facial-hair` property to the console.


var colors  = ["red",  "green", "periwinkle"];

console.log(colors[2]);

for (var i = 0; i < colors.length; i++) {
  console.log(`My favorite color is ${colors[i]}.`);
}


var instructor = {
  age: 25,
  favorite_language: "JavaScript"
}


instructor['facial-hair'] = "goatee";

console.log(instructor['facial-hair']);
