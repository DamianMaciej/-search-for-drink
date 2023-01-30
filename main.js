const searchInput = document.querySelector(`.search`);
const li = document.querySelectorAll(`li`);
const btnInfo = [...document.querySelectorAll(`button`)];
const textInfo = [...document.querySelectorAll(`p`)];

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

const info = () => {

    textInfo.forEach((el, index)=> {
        if (el.style.display === `inline-block` ){
            el.style.display = `none`;
        }else {
            console.log(`działa`)
            el.style.display = `inline-block`
        }
    })
}

searchInput.addEventListener(`keyup`,searchEngine);

btnInfo.forEach((el, index) => {el.addEventListener('click', info)})