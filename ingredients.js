const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
for(let f = 0; f < ingredients.length; f++) {
  console.log(ingredients[f])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let r = ingredients.length; r > 0; r--) {
  console.log(ingredients[r - 1]);
}