const searchInput = document.querySelector(`.search`);
const newDrinkBtn = document.querySelector(`.newDrinkBtn`);
const li = document.querySelectorAll(`li`);
const btnInfo = [...document.querySelectorAll(`.drinkName`)];
const textInfo = [...document.querySelectorAll(`span`)];

const searchEngine = e => {
    const text = e.target.value.toLowerCase();

    li.forEach(el => {

        if (el.textContent.toLocaleLowerCase().indexOf(text) !== -1) {
            el.style.display = `block`;
        } else {
            el.style.display = `none`;
        }
    })
}

// add click event listener for each collection item
textInfo.forEach((li, index) => {
    btnInfo[index].addEventListener("click", () => {

        if (li.style.display === `inline-block`) {
            li.style.display = `none`;
        } else {
            li.style.display = `inline-block`
        }
    });
});

const newDrink = () => {
    
}

searchInput.addEventListener(`keyup`, searchEngine);
searchInput.addEventListener(`click`, newDrink);