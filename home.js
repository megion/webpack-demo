'use strict';

import * as welcome from "./welcome";

welcome.welcomeFunc("home merged");

function libFn(value) {
    welcome.welcomeFunc(value)
}


export {libFn};
