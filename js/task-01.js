const elementsofCategories = document.querySelectorAll('.item');
console.log('Number of categories:', elementsofCategories.length)

elementsofCategories.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements:', element.lastElementChild.childElementCount);
    console.log("")
});
