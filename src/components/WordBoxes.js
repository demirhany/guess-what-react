import Character from "../entity/Character";

function WordBoxes({words, randomWord}) {
    return (<div>
            <div className="row">
                <h1 className={"fs-4"}>First Letter: {randomWord[0]}</h1>
            </div>
            {words.map((word, i) => {
                let counts = countLetters(randomWord);
                let characters = [];
                for (let j = 0; j < word.length; j++) {
                    characters.push(new Character(word[j], false, false, false));
                }

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

                return (<div className="row" key={"b" + i}>
                        <div className={"d-flex justify-content-center align-items-center"} key={"a" + i}>
                            {word.split('').map((char, j) => {
                                const isEmpty = char === '\0';
                                return (<LetterBox char={char} isCorrect={characters[j].isCorrect} isEmpty={isEmpty}
                                                   isInWord={characters[j].isInWord} isNotInWord={characters[j].isNotInWord} key={"c" + i + j}/>)
                            })}
                        </div>
                    </div>)
            })}
        </div>);
}

export default WordBoxes;

function LetterBox({char, isCorrect, isEmpty, isInWord, isNotInWord}) {
    // char = char.toLocaleUpperCase("tr");
    if (isEmpty) {
        return (<div className={"letter_box"}>
                <h1 className={"text-center fs-4"}>
                    {char}
                </h1>
            </div>)
    } else if (isCorrect) {
        return (<div
                className={`letter_box correct fs-2 fw-bold d-flex justify-content-center align-items-center`}>
                {char}
            </div>)
    } else if (isNotInWord) {
        return (<div
                className={`letter_box not-in-word fs-2 fw-bold d-flex justify-content-center align-items-center`}>
                {char}
            </div>)
    } else if (isInWord) {
        return (<div
                className={"letter_box in-word fs-2 fw-bold d-flex justify-content-center align-items-center"}>
                {char}
            </div>)
    }
}

function countLetters(str) {
    const letterCounts = {};

    for (const char of str) {
        if (char !== ' ') {
            const lowerChar = char.toLowerCase();
            letterCounts[lowerChar] = (letterCounts[lowerChar] || 0) + 1;
        }
    }

    return letterCounts;
}