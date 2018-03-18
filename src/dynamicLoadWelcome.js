'use strict';

function getWelcomeMessageDynamical(message) {
    //require(['./welcome'], function(welcome) {
        //welcome.getWelcomeMessage(message);
    //});
    import('./welcome').then(function(welcome) {
        return welcome.getWelcomeMessage(message);
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
