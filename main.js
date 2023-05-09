const searchInput = document.querySelector(`.search`);
const newDrinkBtn = document.querySelector(`.newDrinkBtn`);
const addNewDrinkPanel = document.querySelector(`.newDrinkPanelWrapper`);
const newDrinkPanelInput = document.querySelector(`.newDrinkPanelInput`);
const newRecipeTextBox = document.querySelector(`.newRecipe`);
const closeDrinkPanelBtn = document.querySelector(`.cancel`);
const ul = document.querySelector(`.drinkUl`);
const li = document.querySelectorAll(`.drinkLi`);
const drinkNameBtn = [...document.querySelectorAll(`.drinkName`)];
const ingredientsInfo = [...document.querySelectorAll(`.recipe`)];
const editDrinkBtn = document.querySelector(`.edit`);

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
ingredientsInfo.forEach((li, index) => {
    drinkNameBtn[index].addEventListener("click", () => {

        if (li.style.display === `flex`) {
            li.style.display = `none`;
        } else {
            li.style.display = `flex`
        }
    });
});

const addNewDrink = () => {
    addNewDrinkPanel.style.display = "block";
}

const closeDrinkPanel = () => {
    addNewDrinkPanel.style.display = "none";
    newDrinkPanelInput.value = ``;
}

const editDrink = (e) => {

    if(e.target.matches(`.edit`)){
        //czy da się lepiej to zrobic zamiast 2x parentElement
        newDrinkPanelInput.value = e.target.parentElement.parentElement.firstChild.textContent;

        //***********  usunąć białe spacje  ***************
        newRecipeTextBox.textContent = e.target.parentElement.nextElementSibling.textContent;


        addNewDrinkPanel.style.display = "block";

    }

  
}

searchInput.addEventListener(`keyup`, searchEngine);
newDrinkBtn.addEventListener(`click`, addNewDrink);
closeDrinkPanelBtn.addEventListener(`click`, closeDrinkPanel);
ul.addEventListener(`click`, editDrink);