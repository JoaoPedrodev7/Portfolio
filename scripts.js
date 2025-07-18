const texto = "João Pedro"
const elemento = document.getElementById("typed-text")
let i = 0;

    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++
            setTimeout(digitar, 150)
        }
    }

    digitar();

let scrollIndex = 0

const slider = document.getElementById('sliderProjetos')

const prevBtn = document.querySelector('.arrow.left')

const nextBtn = document.querySelector('.arrow.right')

const cardWidth = 270;

prevBtn.addEventListener('click', () =>{
    
    slider.scrollLeft -= cardWidth;

});

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += cardWidth;
})