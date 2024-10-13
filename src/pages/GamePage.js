import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";
import {useEffect, useState} from "react";
import WordInputField from "../components/WordInputField";
import {wordGen} from "../utils/GameLogic";

function GamePage() {
    const [wordSize, setWordSize] = useState(5);
    const [wordInputs, setWordInputs] = useState([]);
    const [words, setWords] = useState([]);
    useEffect(() => {
        setWords(wordGen(wordSize, wordInputs));
    }, [wordInputs, wordSize]);
    return (
        <div className={"container-fluid"}>
            <WordSizePicker onWordSizeChange={(size) => setWordSize(size)}/>
            <WordBoxes words={words} size={wordSize}/>
            <WordInputField size={wordSize} setWordInput={setWordInputs}/>
        </div>
    );
}
export default GamePage;
