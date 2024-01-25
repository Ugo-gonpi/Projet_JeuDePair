let card1 = document.querySelectorAll(".flip-card-inner1")
let card2 = document.querySelectorAll(".flip-card-inner2")
let card3 = document.querySelectorAll(".flip-card-inner3")
let card4 = document.querySelectorAll(".flip-card-inner4")

for (let index = 0; index < card1.length; index++) {
    card1[index].addEventListener('click', () => {
        card1[index].classList.toggle("retourner")
    })
}

for (let index = 0; index < card3.length; index++) {
    card2[index].addEventListener('click', () => {
        card2[index].classList.toggle("retourner")
    })
}

for (let index = 0; index < card3.length; index++) {
    card3[index].addEventListener('click', () => {
        card3[index].classList.toggle("retourner")
    }) 
}

for (let index = 0; index < card4.length; index++) {
    card4[index].addEventListener('click', () => {
        card4[index].classList.toggle("retourner")
    }) 
}