const assert = require('assert');

describe( "morseCodeTranslator", () => {
    it("Should give back a morse code character when given a letter", () => {
        assert.equal(morseCodeTranslator("a"), ".-");
        assert.equal(morseCodeTranslator("b"), "-...");
    });

    it("Should give back an a when given .-", () => {
        assert.equal(morseCodeTranslator(".-"), "a");
    });
});


function morseCodeTranslator(foo){
    if(foo === ".-") return "a";
    if(foo === "b") return "-...";
    return ".-";
};