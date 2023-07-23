document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question__item')
    questions.forEach(el => {
        const title = (el.querySelector('.question__item-title'))
        const answer = (el.querySelector('.question__item-answer'))
        title.addEventListener('click', () => {
            title.classList.toggle('active')
            answer.classList.toggle('active')
            if (answer.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px'
            } else {
                answer.style.maxHeight = 0
            }
        })
    })
    const burger = document.querySelector('.burger')
    
    const links = document.querySelectorAll('.header__item-link')
    const nav = document.querySelector('.nav')
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        if (nav.classList.contains('active')) {
            links.forEach(el => {
                el.addEventListener('click', () => {
                    burger.classList.remove('active')
                    nav.classList.remove('active')
                })
            })
        }
    })
    
})