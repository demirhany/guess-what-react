import {characterInitialization, countLetters} from "../logic/WordBoxesLogic";
import {characterAssignment} from "../logic/WordBoxesLogic";
import {LetterBox} from "../logic/WordBoxesLogic";
import '../style/WordBoxes.css'
import {useEffect, useState} from "react";

function WordBoxes({words, randomWord}) {
    const [screenReaderText, setScreenReaderText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
            if (words.length > 0) {
                let lastWord = "";
                if (currentIndex !== -1) {
                    lastWord = words[currentIndex];
                }
                setCurrentIndex(currentIndex + 1);
                const counts = countLetters(lastWord);
                const characters = [];

                characterInitialization(characters, lastWord);
                characterAssignment(lastWord, counts, characters, randomWord);

                const readableText = lastWord
                    .split("")
                    .map((char, j) => {
                        if (characters[j].isCorrect) return `${char} correct`;
                        if (characters[j].isInWord) return `${char} is in the word`;
                        if (characters[j].isNotInWord) return char === '\0' ? `character null` : `${char} wrong`;
                        return `${char} empty`;
                    })
                    .join(", ");
                setScreenReaderText("First letter is " + randomWord[0] + " " + readableText);
            }
        }, [words, randomWord]
    )

    return (
        <div className="game-container">
            <div className="row">
                <h1 className={"fs-4 text-warning"} aria-label={`${randomWord[0]} is first letter`}>First
                    Letter: {randomWord[0]}</h1>
            </div>
            <div aria-live="polite" className="visually-hidden">
                {screenReaderText}
            </div>
            {words.map((word, i) => {
                let counts = countLetters(randomWord);
                let characters = [];

                characterInitialization(characters, word);
                characterAssignment(word, counts, characters, randomWord);

                return (<div className="row" key={"b" + i}>
                    <div className={"d-flex justify-content-center align-items-center"} key={"a" + i}>
                        {word.split('').map((char, j) => {
                            return (<LetterBox char={char} isCorrect={characters[j].isCorrect} isEmpty={char === '\0'}
                                               isInWord={characters[j].isInWord} isNotInWord={characters[j].isNotInWord}
                                               key={"c" + i + j}/>)
                        })}
                    </div>
                </div>)
            })}
        </div>
    );
}

export default WordBoxes;