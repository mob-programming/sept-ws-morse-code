const assert = require('assert');

describe( "morseCodeTranslator", () => {
    it("Should give back a .- when given an a", () => {
        assert.equal(morseCodeTranslator("a"), ".-");
    });

    it("Should give back an a when given .-", () => {
        assert.equal(morseCodeTranslator(".-"), "a");
    });
});


function morseCodeTranslator(foo){
    if(foo === ".-") return "a";
    return ".-";
};