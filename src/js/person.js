// src/js/person.js

// src/js/person.js

function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.calculate_bmi = function () {
        calculator = new BMICalculator();
        calculator.metric_bmi(this)
    };
};
// src/js/person.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
} 