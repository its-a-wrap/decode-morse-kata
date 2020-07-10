const morseCodeWordGap = '   ';
const morseCodeLetterGap = ' ';

export const decodeMorse = morseCode => {
    let decodedMorseString = '';
    const words = morseCode.trim().split(morseCodeWordGap);

    words.forEach(word => {
        const letters = word.split(morseCodeLetterGap);
        letters.forEach(letter => {
            decodedMorseString += MORSE_CODE[letter].toUpperCase();
        });
        words.indexOf(word) !== words.length - 1 ? decodedMorseString += ' ' : decodedMorseString;
    })

    return decodedMorseString;
};

const MORSE_CODE = {
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" "
};