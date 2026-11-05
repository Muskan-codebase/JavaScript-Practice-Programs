// Merge two arrays using the spread operator.

let fruits = ["Apple🍎", "Mango🥭", "Banana🍌", "Grapes🍇", "Avacado🥑"];
let vegetables = ["Onion🧅", "Broccoli🥦", "Tomatoe🍅", "Potato🥔"];
let foods = [...fruits, ...vegetables];
console.log(...foods);