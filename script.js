'use strict';
// dom aliases
const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);

// fade in paragraphs
const paragraphs = $$('.paragraphs p');
let i = 0;

function fadeInFooter() {
    $('footer').classList.add('visible');
}
function fadeInNext() {
    paragraphs[i].classList.add('visible');
    i++;
    if (i < paragraphs.length) {
        setTimeout(fadeInNext, 100);
    } else {
        setTimeout(fadeInFooter, 100);
    }
}
setTimeout(fadeInNext, 100);