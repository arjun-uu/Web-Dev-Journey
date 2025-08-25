// 📌 JavaScript Array Practice

// 1. Basic Declaration & Access
let teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];
console.log("First Tea:", firstTea);

// 2. Access by Index
let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log("Favorite City:", favoriteCity);

// 3. Update Element
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log("Updated Tea Types:", teaTypes);

// 4. push → Add at End
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log("Cities Visited:", citiesVisited);

// 5. pop → Remove Last
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log("Last Order Removed:", lastOrder);
console.log("Remaining Orders:", teaOrders);

// 6. Soft Copy (reference copy)
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log("Soft Copy Teas:", softCopyTeas);
console.log("Popular Teas:", popularTeas);

// 7. Hard Copy (independent copy)
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // or slice()
topCities.pop();
console.log("Hard Copy Cities:", hardCopyCities);
console.log("Top Cities:", topCities);

// 8. concat → Merge Arrays
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log("World Cities:", worldCities);

// 9. length → Array Size
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log("Menu Length:", menuLength);

// 10. includes → Check Existence
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log("Is London in List?", isLondonInList);

// 11. indexOf → Find Position
let teaCollection = ["chai", "green tea", "oolong tea"];
console.log("Index of oolong tea:", teaCollection.indexOf("oolong tea"));

// 12. slice → Copy Part
let topTeas = ["chai", "green tea", "oolong tea", "earl grey"];
let slicedTeas = topTeas.slice(1, 3);
console.log("Sliced Teas:", slicedTeas);

// 13. splice → Remove/Insert
let teaShop = ["chai", "green tea", "oolong tea", "earl grey"];
teaShop.splice(1, 1, "jasmine tea"); // remove 1, add jasmine tea
console.log("After Splice:", teaShop);

// 14. join → Convert to String
let fruits = ["apple", "banana", "mango"];
console.log("Join Fruits:", fruits.join(" - "));

// 15. map → Transform
let numbers = [1, 2, 3, 4];
console.log("Doubled:", numbers.map(n => n * 2));

// 16. filter → Select
console.log("Filter >2:", numbers.filter(n => n > 2));

// 17. reduce → Accumulate
console.log("Sum:", numbers.reduce((a, b) => a + b, 0));

// 18. forEach → Loop
numbers.forEach(n => console.log("forEach:", n));

// 19. find → First Match
console.log("Find >2:", numbers.find(n => n > 2));

// 20. some & every → Condition Check
console.log("Some >3:", numbers.some(n => n > 3));
console.log("Every >0:", numbers.every(n => n > 0));
