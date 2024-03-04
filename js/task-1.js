const categories = document.querySelector("#categories");
const totalCategories = categories.children.length;
console.log("Number of categories: ", totalCategories);


// const allCategories = document.querySelectorAll(".item h2");
// allCategories.forEach(category => {
// console.log(`Category: ${category.textContent}`);
// console.log(`Elements: ${category.nextElementSibling.children.length}`);
// });


const allCategories = document.querySelectorAll(".item");

for(const category of allCategories) {
    const nameCategory = category.querySelector("h2");
    const itemInCategory = category.querySelector("ul");
    console.log(`Category: ${nameCategory.textContent}`);
    console.log(`Elements: ${itemInCategory.children.length}`);
};