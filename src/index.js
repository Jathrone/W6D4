//why does global definition involve using 'window.'?
// why doesn't arg instanceof String work?
const DOMNodeCollection = require('./dom_node_collection.js');

const $l = function (arg) {
    if (typeof (arg) === "string") {
        let elementList = document.querySelectorAll(arg);
        return new DOMNodeCollection(Array.from(elementList));
    } 
    else if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
    }
};

window.$l = $l;



console.log('hi')