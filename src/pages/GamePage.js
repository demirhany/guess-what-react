import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";
import {useState} from "react";
import WordInputField from "../components/WordInputField";

function GamePage() {
    const [wordSize, setWordSize] = useState(5);
    return (
        <div className={"container-fluid"}>
            <WordSizePicker onWordSizeChange={(size) => setWordSize(size)}/>
            <WordBoxes words={defaultWordsGen(wordSize)} size={wordSize}/>
            <WordInputField size={wordSize}/>
        </div>
    );
}

export default GamePage;

function defaultWordsGen(wordSize) {
    let words = [];
    let word;
    for(let i = 0; i < 6; i++) {
        word = "";
        for (let j = 0; j < wordSize; j++) {
            word += '\0';
        }
        words[i] = word;
    }
    return words;
}