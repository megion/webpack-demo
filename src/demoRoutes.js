'use strict';

let moduleName = location.hash.slice(1);//location.pathname.slice(1);

console.log(location);

console.log(`init module ${moduleName}`);

import(`./routes/${moduleName}`).then(function(router) {
    router.route();
}).catch(function(err) {
    console.error(`module not found ${moduleName}`, err);
});

//import route from `./routes/${moduleName}`;

//route();

//function test() {
    //console.log("test");
//}

//export {test};

