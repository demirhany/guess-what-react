import five_letters from "../words_txt/five_letters.txt";
import six_letters from "../words_txt/six_letters.txt";
import seven_letters from "../words_txt/seven_letters.txt";

export function wordGen(wordSize, wordInput, randomWord) {
    let words = [];
    let word = "";
    console.log(randomWord);
    if (wordInput.length === 0) {
        for (let i = 0; i < 6; i++) {
            if (i === 0) {
                word = randomWord[0].padEnd(wordSize, '\0');
                words.push(word);
            } else {
                word = "".padEnd(wordSize, '\0');
                words.push(word);
            }

        }
    } else {
        for (let j = 0; j < 6; j++) {
            word = "";
            if (j < wordInput.length) {
                if (wordInput[j].length === 0) {
                    words.push("".padEnd(wordSize, '\0'));
                } else {
                    if (wordInput[j].length !== wordSize) {
                        let emptyWord = "".padEnd(wordSize - wordInput[j].length, '\0');
                        wordInput[j] += emptyWord;
                        words.push(wordInput[j]);
                    } else {
                        words.push(wordInput[j]);
                    }
                }
            } else {
                words.push("".padEnd(wordSize, '\0'));
            }
        }
    }

    return words;
}

export async function selectRandomWord(wordSize) {
    try {
        let response;
        switch (wordSize) {
            case 5:
                response = fetch(five_letters);
                break;
            case 6:
                response = fetch(six_letters);
                break;
            case 7:
                response = fetch(seven_letters);
                break;
            default:
                response = fetch(five_letters);
        }
        const data = (await response).text();
        const linesArray = (await data).split('\n');
        const randomIndex = Math.floor(Math.random() * linesArray.length);
        return linesArray[randomIndex];
    } catch (error) {
        return null; // or handle the error as needed
    }
}

export function checkIfWordsSame(input, randomWord) {
    return input.some(word => word === randomWord);
}

export function checkIfGameEnd(isWordsSame, inputCount) {
    return !isWordsSame && inputCount === 6;

}
