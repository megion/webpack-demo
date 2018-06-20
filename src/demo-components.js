'use strict';

import style from './components/styles/index.less';

//import Menu from './components/menu';

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
    //}]
//});

//document.addEventListener("DOMContentLoaded", function() {
    //document.body.appendChild(pandaMenu.container);
//});

/**
 * load menu dynamical
 */
function loadMenu() {
    var Menu;
    import('./components/menu').then(function(menuModule) {
        Menu = menuModule.default;
        return import('./components/menu/menu-items');
    }).then(function(itemsModule) {
        let pandaMenu = new Menu({
            title: "Меню панды 3",
            items: itemsModule.menuItems
        });

        document.body.appendChild(pandaMenu.container);
    });
};


if (module.hot) {
    // run for replace current module in memory and to pretend 
    // update parents module 
    //module.hot.accept();
    //module.hot.dispose(function() {
        //module.exports.loadMenu = null;
    //});
    module.hot.accept('./components/menu', function() {
      console.log('Accepting the updated menu module');

      //module.exports.loadMenu = loadMenu;

//+     document.body.removeChild(element);
//+     element = component(); // Re-render the "component" to update the click handler
//+     document.body.appendChild(element);
    });

    module.hot.accept('./components/menu/menu-items', function() {
        console.log('Accepting the updated menu-items module');
    })
}

export {
    loadMenu
};
