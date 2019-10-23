// src/js/person.js

function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
};
// src/js/person.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
} 