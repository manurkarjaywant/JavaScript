const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
            body.style.color = "black"
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
            body.style.color = "black"

        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
    });
});