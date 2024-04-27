const menu = {
element: document.querySelector('.menu'),
pages: document.querySelectorAll('.menu-row-pages > h2'),
info: document.querySelectorAll('.menu-row-info > div > span'),
title: document.querySelectorAll('.menu-row-title > h1'),
media: document.querySelector('.menu-row-media '),
};

const button ={
    element: document.querySelector('.nav-menu-button'),
    text: document.querySelectorAll('.nav-menu-button-text > span'),
    open: document.querySelector('.--open-menu'),
    close: document.querySelector('.--close-menu'),
};

const clipPath ={
    init: 'inset(0% 0% 0% 0%)',
    bottom: 'inset(100% 0% 0% 0%)',
    top: 'inset(0% 0% 100% 0%)',
}