const searchInput = document.querySelector(`.search`);
const li = document.querySelectorAll(`li`);
const btnInfo = [...document.querySelectorAll(`button`)];
const textInfo = [...document.querySelectorAll(`textarea`)];

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

searchInput.addEventListener(`keyup`, searchEngine);