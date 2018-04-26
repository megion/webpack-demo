'use strict';

import style from './menu.css';

console.log('style: ', style);

import minus from './minus.svg';

import template from './menu.handlebars';
//var template = require("./menu.handlebars");

export default class Menu {
    constructor(options) {
        this.container = document.createElement('div');

        let img = document.createElement('img');
        img.src = minus;
        this.container.appendChild(img);

        this.elem = document.createElement('div');
        this.elem.className = 'menu';
        this.container.appendChild(this.elem);

        this.elem.innerHTML = template(options);

        this.titleElem = this.elem.querySelector('.title');

        this.titleElem.onclick = () => this.elem.classList.toggle('open');

        this.titleElem.onmousedown = () => false;
    }
}

