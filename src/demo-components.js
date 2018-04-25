'use strict';

import Menu from './components/menu';

let pandaMenu = new Menu({
    title: "Меню панды",
    items: [{
        text: 'Яйца',
        href: '#eggs'
    }, {
        text: 'Мясо',
        href: '#meat'
    }, {
        text: '99% еды - бамбук!',
        href: '#bamboo'
    }]
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.appendChild(pandaMenu.container);
});
