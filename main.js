const searchInput = document.querySelector(`.search`);

const newDrinkBtn = document.querySelector(`.newDrinkBtn`);

const addNewDrinkPanel = document.querySelector(`.newDrinkPanelWrapper`);
const newDrinkPanelInput = document.querySelector(`.newDrinkPanelInput`);
const newRecipeTextBox = document.querySelector(`.newRecipe`);
const saveDrinkPanelBtn = document.querySelector(`.save`);
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
    saveDrinkPanelBtn.innerHTML = `Add`;
    addNewDrinkPanel.style.display = "block";
}

const closeDrinkPanel = () => {
    addNewDrinkPanel.style.display = "none";
    newRecipeTextBox.textContent = ``;
    newDrinkPanelInput.value = ``;
}

const editDrink = (e) => {
    
    if(e.target.matches(`.edit`)){
        saveDrinkPanelBtn.innerHTML = `Save`;    
        //czy da się lepiej to zrobic zamiast 2x parentElement
        newDrinkPanelInput.value = e.target.parentElement.parentElement.firstChild.textContent;
        newRecipeTextBox.textContent = e.target.parentElement.nextElementSibling.textContent;
        addNewDrinkPanel.style.display = "block"; 
        
        //jak zmienić obecny skład i go nadpisać w <p .recipe>
        saveDrinkPanelBtn.addEventListener(`click`, saveEditing = () => {
            ingredientsInfo.textContent = newRecipeTextBox.textContent;
            closeDrinkPanel();
        })

    }        
}


const saveNewDrink = () => {
    if (saveDrinkPanelBtn.innerHTML == `Add`) {
        let newLi = document.createElement(`li`);
        newLi.className = `drinkLi`;
        newLi.innerHTML = `<button class="drinkName">New drink name</button>
        <div class="tools">
        <button class="edit fas fa-gear"></button>
        <button class="delete fas fa-times"></button>
        </div>
        <p class="recipe">New ingredients list</p>`
        ul.appendChild(newLi);
        closeDrinkPanel();
    }
}

searchInput.addEventListener(`keyup`, searchEngine);
newDrinkBtn.addEventListener(`click`, addNewDrink);
closeDrinkPanelBtn.addEventListener(`click`, closeDrinkPanel);
saveDrinkPanelBtn.addEventListener(`click`, saveNewDrink);
ul.addEventListener(`click`, editDrink);