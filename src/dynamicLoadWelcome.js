'use strict';

import tail from 'lodash/tail';
//import * as _ from 'lodash/array';

function getWelcomeMessageDynamical(message) {
    //require(['./welcome'], function(welcome) {
        //welcome.getWelcomeMessage(message);
    //});
    import('./welcome').then(function(welcome) {
        return welcome.getWelcomeMessage(message);
    });

    import('moment').then(function(module) {
        const moment = module.default;
        let today = moment(new Date()).locale('ru');
        console.log(today.format('DD MMM YYYY'));

        let users = [
            {id: "abcd", name: "Vasya"},
            {id: "defa", name: "Petya"},
            {id: "1234", name: "Masha"}
        ];

        console.log(tail(users));
        //console.log(_.tail(users));
    });
};

function getAbout2MessageDynamical() {
    require(['./about2'], function(about2) {
        about2.getAboutWelcome();
    });
};

console.log("init dynamic load welcome module");

export {
    getWelcomeMessageDynamical,
    getAbout2MessageDynamical
};
