export function wordGen(wordSize, wordInput) {
    let words = [];
    let word;
    if (wordInput.length === 0) {
        for (let i = 0; i < 6; i++) {
            word = "".padEnd(wordSize, '\0');
            words.push(word);
        }
    } else {
        for (let j = 0; j < 6; j++) {
            word = "";
            if (j < wordInput.length) {
                if (wordInput[j].length === 0) { words.push("".padEnd(wordSize, '\0')); } else {
                    if (wordInput[j].length !== wordSize) {
                        let emptyWord = "".padEnd(wordSize - wordInput[j].length, '\0');
                        wordInput[j] += emptyWord;
                        words.push(wordInput[j]);
                    } else { words.push(wordInput[j]); }
                }
            } else { words.push("".padEnd(wordSize, '\0')); }
        }
    }

    console.log(words);
    return words;
}
