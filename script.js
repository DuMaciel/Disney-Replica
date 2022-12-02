const questions = document.querySelectorAll('.question');

questions.forEach((question) =>{
    question.addEventListener('click', ()=>{
        question.classList.toggle('activated')
        if(question.classList.contains('activated')){
            question.children[0].children[1].src = "./images/menos.png"
        }else{
            question.children[0].children[1].src = "./images/mais.png"
        }
    })
})



const navMovies = document.querySelectorAll('.tab');
const tabMovies = document.querySelectorAll('.movies article');


navMovies.forEach((tab,index) => {
    tab.addEventListener('click', ()=>{
        if(tab.classList.contains('activated')){

        }else{
            navMovies.forEach((value,index) =>{
                value.classList.remove('activated')
                tabMovies[index].classList.remove('activated')
            })
            tab.classList.add('activated')
            tabMovies[index].classList.add('activated')
        }
        
    })
})

const element = document.getElementById('altHeader');
const header = document.getElementById('header');

window.addEventListener('scroll',()=>{

    if(window.scrollY>=element.offsetTop){
        header.classList.remove('hide')
    }else{
        header.classList.add('hide')
    }
})
