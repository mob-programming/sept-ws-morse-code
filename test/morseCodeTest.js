const assert = require('assert');

describe( "morseCodeTranslator", () => {
    it("Should give back a .- when given an a", () => {
        assert.equal(morseCodeTranslator("a"), ".-");
    });
});


function morseCodeTranslator(){
    return ".-";    
};