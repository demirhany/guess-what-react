import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";
import {useEffect, useState} from "react";
import WordInputField from "../components/WordInputField";
import {checkIfGameEnd, checkIfWordsSame, selectRandomWord, wordGen} from "../logic/GameLogic";
import Win from "../components/Win";
import Lose from "../components/Lose";

function GamePage() {
    const [wordSize, setWordSize] = useState(5);
    const [wordInputs, setWordInputs] = useState([]);
    const [words, setWords] = useState([]);
    const [isPlay, setIsPlay] = useState(false);
    const [randomWord, setRandomWord] = useState("");
    const [isWordsSame, setIsWordsSame] = useState(false);
    const [inputCount, setInputCount] = useState(0);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [isBoxesOpened, setIsBoxesOpened] = useState(false);

    useEffect(() => {
        if (randomWord !== "") {
            setWords(wordGen(wordSize, wordInputs, randomWord));
        }
        console.log(wordSize);
    }, [wordSize, randomWord, wordInputs]);

    useEffect(() => {
        console.log("isPlay = " + isPlay);
        if (isPlay) {
            setIsBoxesOpened(true);
            console.log(isBoxesOpened);
        }
        if (isPlay && randomWord === "") {
            selectRandomWord(wordSize).then((word) => {
                if (word) {
                    setRandomWord(word);
                }
            });
        }
    }, [isPlay]);

    useEffect(() => {
        if (isPlay) {
            console.log(randomWord);
        }
    }, [randomWord]);

    useEffect(() => {
        setInputCount(inputCount + 1);
        if (checkIfWordsSame(wordInputs, randomWord)) {
            setIsWordsSame(true);
            setIsPlay(false);
        }
        if (checkIfGameEnd(checkIfWordsSame(wordInputs, randomWord), inputCount)) {
            setIsGameEnd(true);
            setIsPlay(false);
        }
    }, [wordInputs]);

    return (
        <>
            {isGameEnd && <Lose word={randomWord}/>}
            {!isPlay && isWordsSame && <Win word={randomWord}/>}
            <div className={"container-fluid body-container"}>
                <div className={"parent-word-size-picker"}>
                    <WordSizePicker onWordSizeChange={(size) => setWordSize(size)}
                                    onPlayClick={(isPlay) => setIsPlay(isPlay)}/>
                </div>
                <div>
                    {isBoxesOpened && <WordBoxes words={words} randomWord={randomWord} size={wordSize}/>}
                </div>
                <div>
                    {isPlay && <WordInputField size={wordSize} setWordInput={setWordInputs}/>}
                </div>
            </div>
        </>
    );
}

export default GamePage;

//todo: make the build command as "CI=false npm run build"

//todo: Sound effects when a letter is whether correct or incorrect
//todo: Animations when inputs are locating
//todo: Good lose and win pages -- done
//todo: First letter of the random word will be shown to user -- done
//todo: Do not delete word boxes when the game end -- update game logic and game page wrt. that --done
