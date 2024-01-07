const categoryList = document.querySelector("#categories");

const categoryItems = categoryList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

for (const elem of categoryItems) {
  const element = elem.querySelector("h2").textContent;
  const allElements = elem.querySelectorAll("ul li");

  console.log(`Category: ${element}`);
  console.log(`Elements: ${allElements.length}`);
}
