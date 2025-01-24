import five_letters from "../words_txt/five_letters.txt";
import six_letters from "../words_txt/six_letters.txt";
import seven_letters from "../words_txt/seven_letters.txt";

export class WordProviderFactory {
    static getWordProvider(wordSize) {
        switch (wordSize) {
            case 5:
                return new FiveLetterProvider();
            case 6:
                return new SixLetterProvider();
            case 7:
                return new SevenLetterProvider();
            default:
                throw new Error("Invalid word size");
        }
    }
}

class FiveLetterProvider {
    async getWords() {
        const response = await fetch(five_letters);
        return (await response.text()).split('\n');
    }
}

class SixLetterProvider {
    async getWords() {
        const response = await fetch(six_letters);
        return (await response.text()).split('\n');
    }
}

class SevenLetterProvider {
    async getWords() {
        const response = await fetch(seven_letters);
        return (await response.text()).split('\n');
    }
}