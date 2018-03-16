'use strict';

import * as welcome from "./welcome";

function getHomeWelcome() {
    return welcome.getWelcomeMessage("you are in home 2");
}

console.log("init home2 module");

export {getHomeWelcome};
