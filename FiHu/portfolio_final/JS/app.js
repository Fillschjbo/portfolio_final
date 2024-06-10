let card = document.querySelectorAll('.projectCard');
window.addEventListener('scroll', function (){
    let scrollValue = window.scrollY;
    let body = document.querySelector('.body')
    let h2 = document.querySelectorAll('.h2')

    if (scrollValue >= 0 && scrollValue <= 450) {
        body.style.backgroundColor = '';
        h2.forEach(h2 => {
            h2.style.color = '';
        })
        card.forEach(card => {
            card.style.backgroundColor = '';
        })
    }else if (scrollValue >= 450 && scrollValue <= 1100){
        body.style.backgroundColor = '#431714';
        h2.forEach(h2 => {
            h2.style.color = '#ff978f';
        })
        card.forEach(card => {
            card.style.backgroundColor = '#69312d';
        })
    }else if (scrollValue >= 1100 && scrollValue <= 2090){
        body.style.backgroundColor = '#0b2c1a';
        h2.forEach(h2 => {
            h2.style.color = '#84e7b3';
        })
        card.forEach(card => {
            card.style.backgroundColor = '#215139';
        })
    }else if (scrollValue >= 2090 && scrollValue <= 2500){
        body.style.backgroundColor = '#2c250a';
        h2.forEach(h2 => {
            h2.style.color = '#f2da85';
        })
        card.forEach(card => {
            card.style.backgroundColor = '#544822';
        })
    }
})

card.forEach(card => {
    card.addEventListener('mouseover', function (){
        let description = card.querySelector('.description');
        let gitHub = card.querySelector('.gitHub');
        let image = card.querySelector('img')

        if (description) {
            description.style.display = 'flex';
        }

        if (gitHub) {
            gitHub.style.display = 'flex';
        }

        if (image) {
            image.style.height = '27vw'
        }
    });

    card.addEventListener('mouseout', function (){
        let description = card.querySelector('.description');
        let gitHub = card.querySelector('.gitHub');
        let image = card.querySelector('img')

        if (description) {
            description.style.display = 'none';
        }

        if (gitHub) {
            gitHub.style.display = 'none';
        }

        if (image) {
            image.style.height = ''
        }
    });
});

let yeager = document.querySelector('.yeager');
yeager.addEventListener('click', function() {
    window.location.href = 'https://yeager.netlify.app/';
})

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

let phone = document.querySelector('.phone');
let mail =document.querySelector('.mail');
let github = document.querySelector('.github');

phone.addEventListener('click', function() {
    let existingPhoneNumber = document.querySelector('.phoneNumber');
    if (existingPhoneNumber) {
        existingPhoneNumber.remove();
    } else {
        let phoneNumber = document.createElement('div');
        phoneNumber.classList.add('phoneNumber');
        phoneNumber.innerText = '+47 950 69 598';
        phone.appendChild(phoneNumber);
    }
});

mail.addEventListener('click', function() {
    let existingMail = document.querySelector('.EMail');
    if (existingMail) {
        existingMail.remove();
    } else {
        let Email = document.createElement('div');
        Email.classList.add('EMail');
        Email.innerText = 'felipehusebo@gmail.com';
        phone.appendChild(Email);
    }
});

github.addEventListener('click', function() {
            window.location.href = 'https://github.com/Fillschjbo'
})