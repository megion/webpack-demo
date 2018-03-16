'use strict';

import * as welcome from "./welcome";

function getAboutWelcome() {
    return welcome.getWelcomeMessage("you are in about2");
}

console.log("init about2 module");

export {getAboutWelcome};
