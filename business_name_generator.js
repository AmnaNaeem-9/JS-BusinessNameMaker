// Business name generator

// Business Name Format:
// [Adjective] + [Shop Name] + [Extra Word]
// Example: "Happy Cafe Corner"

// List of adjectives
let adjectives = "Quick, Happy , Modern";
// List of shop names
let shopNames = "Bakery , Cafe , Store";
// List of extra words
let extraWords = "Corner , World , Haven";

// Generating random indexes
let ran1 = Math.floor(Math.random() * 3);
let ran2 = Math.floor(Math.random() * 3);
let ran3 = Math.floor(Math.random() * 3);

// Extracting words using split only when needed
let adj = adjectives.split(",")[ran1].trim();
let shop = shopNames.split(",")[ran2].trim();
let extra = extraWords.split(",")[ran3].trim();

// Combine using concat() function of javascript strings
let businessName = "Your business name is: ".concat(adj, " ", shop, " ", extra);

// Output
console.log(businessName);
