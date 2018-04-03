'use strict';

function getWelcomeMessageDynamical(message) {
    //require(['./welcome'], function(welcome) {
        //welcome.getWelcomeMessage(message);
    //});
    import('./welcome').then(function(welcome) {
        return welcome.getWelcomeMessage(message);
    });

    import('moment').then(function(module) {
        const moment = module.default;
        let today = moment(new Date()).locale('ja');
        console.log(today.format('DD MMM YYYY'));
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
