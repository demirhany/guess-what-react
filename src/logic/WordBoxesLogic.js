import Character from "../entity/Character";
import {
    CorrectLetterBox,
    InWordLetterBox,
    LetterBoxComposite,
    NotInWordLetterBox
} from "../patterns/LetterBoxComposite";

export function LetterBox({char, isCorrect, isEmpty, isInWord, isNotInWord}) {
    if (isEmpty) return new LetterBoxComposite(char).render();
    if (isCorrect) return new CorrectLetterBox(char).render();
    if (isInWord) return new InWordLetterBox(char).render();
    if (isNotInWord) return new NotInWordLetterBox(char).render();
}

export function countLetters(str) {
    const letterCounts = {};
    for (const char of str) {
        if (char !== ' ') {
            const lowerChar = char.toLowerCase();
            letterCounts[lowerChar] = (letterCounts[lowerChar] || 0) + 1;
        }
    }

    return letterCounts;
}

export function characterAssignment(word, counts, characters, randomWord) {
    word.split('').map((char, j) => {
        if (char === randomWord[j]) {
            characters[j].isCorrect = true;
            counts[randomWord[j]] -= 1;
        }

        if (randomWord.includes(char) && !characters[j].isCorrect) {
            characters[j].isInWord = true;
        }

        if (randomWord.includes(char) === false || counts[char] <= 0) {
            characters[j].isNotInWord = true;
        }

        if (counts[char] === 0) {
            for (let m = 0; m < word.length; m++) {
                if (characters[m].isInWord && characters[m].ch === char) {
                    characters[m].isInWord = false;
                    characters[m].isNotInWord = true;
                }
            }
        }

        return null;
    });
}

export function characterInitialization(characters, word) {
    for (let j = 0; j < word.length; j++) {
        characters.push(new Character(word[j], false, false, false));
    }
}