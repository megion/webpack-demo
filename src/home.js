'use strict';

import * as welcome from "./welcome";

function getHomeWelcome() {
    return welcome.getWelcomeMessage("you are in home");
}

console.log("init home module");

export {getHomeWelcome};
