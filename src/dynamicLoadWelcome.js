'use strict';

function getWelcomeMessageDynamical(message) {
    require(['./welcome'], function(welcome) {
        welcome.getWelcomeMessage(message);
    });
};

console.log("init dynamic load welcome module");

export {getWelcomeMessageDynamical};
