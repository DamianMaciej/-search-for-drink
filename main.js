const searchInput = document.querySelector(`.search`);
const newDrinkBtn = document.querySelector(`.newDrinkBtn`);
const addNewDrinkPanel = document.querySelector(`.newDrinkPanelWrapper`);
const newDrinkPanelInput = document.querySelector(`.newDrinkPanelInput`);
const closeDrinkPanelBtn = document.querySelector(`.cancel`);
const ul = document.querySelector(`ul`);
const li = document.querySelectorAll(`li`);
const drinkNameBtn = [...document.querySelectorAll(`.drinkName`)];
const ingredientsInfo = [...document.querySelectorAll(`span`)];
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

        if (li.style.display === `inline-block`) {
            li.style.display = `none`;
        } else {
            li.style.display = `inline-block`
        }
    });
});

const addNewDrink = () => {
    addNewDrinkPanel.style.display = "block";
}

const closeDrinkPanel = () => {
    addNewDrinkPanel.style.display = "none";
}

const editDrink = (e) => {

    if(e.target.matches(`.edit`)){
        
        // addNewDrinkPanel.style.display = "block";  
    }

  
}

searchInput.addEventListener(`keyup`, searchEngine);
newDrinkBtn.addEventListener(`click`, addNewDrink);
closeDrinkPanelBtn.addEventListener(`click`, closeDrinkPanel);
ul.addEventListener(`click`, editDrink);