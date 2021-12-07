const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementUl = document.querySelector('ul')

 const ingredientsPush = (ingredientsArray) => {
  const newArray = [];
  ingredientsArray.forEach(ingredient => {
    const elementLi = document.createElement("li");
    elementLi.textContent = ingredient;
    elementLi.className = "item";
    newArray.push(elementLi)   
  
  });
  elementUl.prepend(...newArray)
}

ingredientsPush(ingredients);
console.log(elementUl);
