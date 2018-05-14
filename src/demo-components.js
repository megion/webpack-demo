'use strict';

import style from './components/styles/index.less';

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

/**
 * load menu dynamical
 */
function loadMenu() {
    //import('./components/menu').then(function(menuModule) {
        //let Menu = menuModule.default;
        //let pandaMenu = new Menu({
            //title: "Меню панды",
            //items: [{
                //text: 'Яйца',
                //href: '#eggs'
            //}, {
                //text: 'Мясо',
                //href: '#meat'
            //}, {
                //text: '99% еды - бамбук!',
                //href: '#bamboo'
            //}, {
                //text: '99% еды - бамбук!',
                //href: '#bamboo'
            //}]
        //});

        //document.body.appendChild(pandaMenu.container);
    //});
};

export {
    loadMenu
};
