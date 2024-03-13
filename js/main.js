let info = {
    "calidad": {
        "btn1": 300000,
        "btn2": 380000,
        "btn3": 200000
    },
    "tipoApp": {
        
    },
    "diseño": {},
    "money": {},
    "autenticacion": {},
}

let calidad, calidad2, calidad3;
const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')
const section3 = document.getElementById('section3')
const section4 = document.getElementById('section4')
const section5 = document.getElementById('section5')
const section6 = document.getElementById('section6')
const section7 = document.getElementById('section7')

const displayNone = (visible) => {
    document.querySelectorAll('section').forEach(element => {
        element.style.display = 'none'
    });
    visible.style.display = 'grid'
}

const sum = (valor) => {
    let total = 0
    total += valor
    console.log(total);
}
document.addEventListener('DOMContentLoaded', displayNone(section1))

document.getElementById('main-button').addEventListener('click', () => {displayNone(section2)})

calidad = document.querySelectorAll('.calidad')

calidad.forEach((button, i) => {
    i+=1;
    button.addEventListener('click', () => {
        sum(info.calidad[`btn${i}`])
        displayNone(section3)
    })
})