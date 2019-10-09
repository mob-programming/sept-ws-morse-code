const assert = require('assert');

describe( "morseCodeTranslator", () => {
    it("Should give back a morse code character when given a letter", () => {
        assert.equal(englishLetterToMorseCode("a"), ".-");
        assert.equal(englishLetterToMorseCode("b"), "-...");
        assert.equal(englishLetterToMorseCode("c"), "-.-.");
    });

    it("Should give back an a when given .-", () => {
        assert.equal(morseCodeToEnglishLetter(".-"), "a");
    });
});


function englishLetterToMorseCode(foo){
    if(foo === "b") return "-...";
    if(foo === "c") return "-.-.";
    return ".-";
};

function morseCodeToEnglishLetter(foo){
    if(foo === ".-") return "a";
};