const listButtons = document.querySelectorAll('li');
const ratePage = document.getElementsByClassName('rate')[0];
const thankPage = document.getElementsByClassName('thank')[0];
const thankInfo = document.getElementsByClassName('rating')[0];
const submit = document.querySelector('button')
var score = "";

listButtons.forEach(element => {
    element.addEventListener('click', () => {
        listButtons.forEach(el => {
            el.style.backgroundColor = "hsl(213, 19%, 20%)"
            el.style.color = "hsl(217, 12%, 63%)"
        })
        score = element.innerText;
        element.style.backgroundColor = "hsl(25, 97%, 53%)";
        element.style.color = "white";
    })
});

submit.addEventListener('click', submitHandler)

function submitHandler(){
    ratePage.style.display = 'none';
    thankPage.style.display = 'flex';
    thankInfo.innerText = score;
}