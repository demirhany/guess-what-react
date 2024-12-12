import {characterInitialization, countLetters} from "../logic/WordBoxesLogic";
import {characterAssignment} from "../logic/WordBoxesLogic";
import {LetterBox} from "../logic/WordBoxesLogic";
import '../style/WordBoxes.css'

function WordBoxes({words, randomWord}) {
    return (
        <div className="game-container">
            <div className="row">
                <h1 className={"fs-4 text-warning"}>First Letter: {randomWord[0]}</h1>
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