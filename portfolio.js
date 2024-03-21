'use strict'

addEventListener('DOMContentLoaded', ()=>{
    let card_parent = document.querySelector(".cards");

    function create_card(title, img, text)
    {
        let card = document.createElement('div');
        let card_header = document.createElement('div');
        let card_body = document.createElement('div');
        let card_image = document.createElement('img');
        let card_footer = document.createElement('div');
        let star = document.createElement('span');
        let footer_text = document.createElement('span');
        
        card.setAttribute('class', 'card shadow-sm');
        card.setAttribute('title', `${title}`)
        card.appendChild(card_header);
        card.appendChild(card_image);
        card.appendChild(card_body);
        card.appendChild(card_footer);

        card_header.setAttribute('class', 'card-header bg-dark shadow-sm text-center text-white');
        card_header.style.height = '50px';
        card_header.style.paddingTop = '10px';
        card_header.innerHTML = title;

        card_body.setAttribute('class', 'card-body p-2 text-center text-secondary');
        card_body.style.border = 'none';
        card_body.innerHTML = text;

        card_image.setAttribute('class', 'card-img-top');
        card_image.style.background = `url(${img})`;
        card_image.style.backgroundSize = 'contain';
        card_image.style.height = '170px'

        card_footer.setAttribute('class', 'card-footer bg-dark p-2 text-center text-white');
        star.setAttribute('class', 'fa fa-star text-warning');
        footer_text.setAttribute('class', 'text-white');
        footer_text.innerHTML = 'Arike'
        card_footer.appendChild(star);
        card_footer.appendChild(footer_text);

        card_parent.append(card);

    }

    let count = 0;
    const details = [
        {
            program: 'HTML',
            img: `./images.jpeg`,
            text: `HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. 
            I have acquired a minimum of about 2 years in this field.`,
        },
        {
            program: 'CSS',
            img: './css.jpeg',
            text: `Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in 
            HTML or XML (including XML dialects such as SVG, MathML or XHTML). 
            I have acquired 2 years experience on this and i have built some beautiful projects relating to this.`,
        },
        {
            program: 'JAVASCRIPT',
            img: './js2.jpeg',
            text: `JavaScript is a scripting or programming language that allows you to implement 
            complex features on web pages. 
            I have an intermediate experience on this and i am fully fledged`,
        },
    ];
    for (; count < details.length;)
    {
        create_card(details[count].program, details[count].img, details[count].text);
        count++;
    };

    let all_cards = document.querySelectorAll('.card');
    let all_cards_header = document.querySelectorAll('.card-header');
    let all_cards_footer = document.querySelectorAll('.card-footer');

    for (let a = 0; a < all_cards.length && a < all_cards_header.length && a < all_cards_footer.length; a++)
    {
        all_cards[a].addEventListener('mouseover', ()=>{
            all_cards[a].setAttribute('class', 'card shadow-lg');
            all_cards_header[a].setAttribute('class', 'card-header shadow-sm text-center text-white bg-primary');
            all_cards_footer[a].setAttribute('class', 'card-footer p-2 text-center text-white bg-primary')
        })
        all_cards[a].addEventListener('mouseout', ()=>{
            all_cards[a].setAttribute('class', 'card shadow-sm');
            all_cards_header[a].setAttribute('class', 'card-header shadow-sm text-center text-white bg-dark');
            all_cards_footer[a].setAttribute('class', 'card-footer p-2 text-center text-white bg-dark')
        })
    }
});

function change_image() {
    let images = [
        ['./Female-College-Student-PNG-Photo.png'],
        ['./students.png']
    ];
    let imgs_length = images.length;
    let author_img = document.querySelector('.author_image');
    let index = Math.floor(Math.random() * imgs_length);
    console.log(index);
    author_img.style.background = `url(${images[index]})`;
    author_img.style.backgroundSize = "100% 100%";
    author_img.style.backgroundRepeat = "none";
};
setInterval(() => {
    change_image()
}, 2000);