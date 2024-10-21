import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";
import {useEffect, useState} from "react";
import WordInputField from "../components/WordInputField";
import {checkIfGameEnd, checkIfWordsSame, isGameEnd, selectRandomWord, wordGen} from "../utils/GameLogic";
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

    useEffect(() => {
        setWords(wordGen(wordSize, wordInputs));
    }, [ wordInputs, wordSize]);

    useEffect(() => {
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
        if(checkIfWordsSame(wordInputs, randomWord)) {
            setIsWordsSame(true);
            setIsPlay(false);
        }
        if(checkIfGameEnd(checkIfWordsSame(wordInputs, randomWord), inputCount)) {
            setIsGameEnd(true);
            setIsPlay(false);
        }
    }, [wordInputs]);

    return (
        <div className={"container-fluid"}>
            <WordSizePicker onWordSizeChange={(size) => setWordSize(size)} onPlayClick={(isPlay) => setIsPlay(isPlay)} />
            {isPlay && <WordBoxes words={words} randomWord={randomWord} size={wordSize}  />}
            {isPlay && <WordInputField size={wordSize} setWordInput={setWordInputs}/>}
            {!isPlay && isWordsSame && <Win />}
            {isGameEnd && <Lose />}
        </div>
    );
}
export default GamePage;
