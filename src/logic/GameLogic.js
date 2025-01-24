import {WordProviderFactory} from "../patterns/WordProviderFactory";
import {EmptyInputStrategy, NonEmptyInputStrategy, WordGenerator} from "../patterns/WordGenerator";

export function wordGen(wordSize, wordInput, randomWord) {
    const strategy = wordInput.length === 0 ? new EmptyInputStrategy() : new NonEmptyInputStrategy();
    const generator = new WordGenerator(strategy);
    return generator.generate(wordSize, wordInput, randomWord);
}

export async function selectRandomWord(wordSize) {
    try {
        const wordProvider = WordProviderFactory.getWordProvider(wordSize);
        const words = await wordProvider.getWords();
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    } catch (error) {
        throw new Error("Error in selecting random word");
    }
}

export function checkIfWordsSame(input, randomWord) {
    return input.some(word => word === randomWord);
}

export function checkIfGameEnd(isWordsSame, inputCount) {
    return !isWordsSame && inputCount === 6;

}
