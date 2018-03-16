'use strict';

function getWelcomeMessage(message) {

    //if (NODE_ENV == 'development') {
    //console.log(message);
    //}

    //alert(`Welcome ${message}`);

    //debugger;
    let msg = `Welcome ${message}`;
    console.log(`welcom module: ${msg}`);
    return msg;
};

console.log("init welcome module");

export {getWelcomeMessage};
