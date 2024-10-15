import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";
import {useEffect, useState} from "react";
import WordInputField from "../components/WordInputField";
import {wordGen} from "../utils/GameLogic";

function GamePage() {
    const [wordSize, setWordSize] = useState(5);
    const [wordInputs, setWordInputs] = useState([]);
    const [words, setWords] = useState([]);
    const [isPlay, setIsPlay] = useState(false);
    useEffect(() => {
        setWords(wordGen(wordSize, wordInputs));
        console.log(isPlay);
    }, [wordInputs, wordSize, isPlay]);
    return (
        <div className={"container-fluid"}>
            <WordSizePicker onWordSizeChange={(size) => setWordSize(size)} onPlayClick={(isPlay) => setIsPlay(isPlay)} />
            {isPlay && <WordBoxes words={words} size={wordSize}/>}
            {isPlay && <WordInputField size={wordSize} setWordInput={setWordInputs}/>}
        </div>
    );
}
export default GamePage;
