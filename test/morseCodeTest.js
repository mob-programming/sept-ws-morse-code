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
    return englishToMorseCodeDictionary[foo]
};

function morseCodeToEnglishLetter(foo){
    return Object.keys(englishToMorseCodeDictionary).find(key => englishToMorseCodeDictionary[key] === foo);
};

var englishToMorseCodeDictionary = {
"a": ".-",
"b": "-...",
"c": "-.-.",
"d": "-..",
"e": ".",
"f": "..-.",
"g": "--.",
"h": "....",
"i": "..",
"j": ".---",
"k": "-.-",
"l": ".-..",
"m": "--",
"n": "-.",
"o": "---",
"p": ".--.",
"q": "--.-",
"r": ".-.",
"s": "...",
"t": "-",
"u": "..-",
"v": "...-",
"w": ".--",
"x": "-..-",
"y": "-.--",
"z": "--..",
"1": ".----",
"2": "..---",
"3": "...--",
"4": "....-",
"5": ".....",
"6": "-....",
"7": "--...",
"8": "---..",
"9": "----.",
"0": "-----",
}