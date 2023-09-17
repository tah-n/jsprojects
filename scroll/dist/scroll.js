/*
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links-container');

toggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})*/
// ************ set date *****************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ************ close links *****************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0) {
        linksContainer.style.height=`${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
})

// ************ fixed nav *****************
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = links.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');

    } else {
        navBar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-links')
    }
    else {
        topLink.classList.remove('show-links')
    }
})
// ************ smooth scroll *****************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        linksContainer.style.height = 0;


    })
})

/*const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;

       /* if(!fixedNav) {
            position = position - navHeight;
        }

        if(navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;


    })
})
*/