export class WordGenerator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    generate(wordSize, wordInput, randomWord) {
        if (this.strategy instanceof EmptyInputStrategy) {
            return this.strategy.generate(wordSize, randomWord);
        } else if (this.strategy instanceof NonEmptyInputStrategy) {
            return this.strategy.generate(wordSize, wordInput);
        }
    }
}

export class EmptyInputStrategy {
    generate(wordSize, randomWord) {
        let words = [];
        for (let i = 0; i < 6; i++) {
            const word = i === 0
                ? randomWord[0].padEnd(wordSize, '\0')
                : "".padEnd(wordSize, '\0');
            words.push(word);
        }
        return words;
    }
}

export class NonEmptyInputStrategy {
    generate(wordSize, wordInput) {
        let words = [];
        for (let i = 0; i < 6; i++) {
            const word = wordInput[i]?.padEnd(wordSize, '\0') || "".padEnd(wordSize, '\0');
            words.push(word);
        }
        return words;
    }
}