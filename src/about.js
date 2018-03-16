'use strict';

import * as welcome from "./welcome";

function getAboutWelcome() {
    return welcome.getWelcomeMessage("you are in about");
}

console.log("init about module");

export {getAboutWelcome};
