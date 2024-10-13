import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";
import {useEffect, useState} from "react";
import WordInputField from "../components/WordInputField";

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

function wordGen(wordSize, wordInput) {
    let words = [];
    let word;
    if (wordInput.length === 0) {
        for (let i = 0; i < 6; i++) {
            word = "";
            word = "".padEnd(wordSize, '\0');
            words.push(word);
        }
    } else {
        for (let j = 0; j < 6; j++) {
            word = "";
            if (j < wordInput.length) {
                if (wordInput[j].length === 0) {
                    let emptyWord = "".padEnd(wordSize, '\0');
                    words.push(emptyWord);
                } else {
                    if (wordInput[j].length !== wordSize) {
                        let emptyWord = "".padEnd(wordSize - wordInput[j].length, '\0');
                        wordInput[j] += emptyWord;
                        words.push(wordInput[j]);
                    } else {
                        words.push(wordInput[j]);
                    }
                }
            } else {
                words.push("".padEnd(wordSize, '\0'));
            }
        }
    }
    console.log(words);
    return words;
}