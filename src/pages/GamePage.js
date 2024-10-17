import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";
import {useEffect, useState} from "react";
import WordInputField from "../components/WordInputField";
import {checkIfWordsSame, selectRandomWord, wordGen} from "../utils/GameLogic";
import WinModal from "../components/WinModal";

function GamePage() {
    const [wordSize, setWordSize] = useState(5);
    const [wordInputs, setWordInputs] = useState([]);
    const [words, setWords] = useState([]);
    const [isPlay, setIsPlay] = useState(false);
    const [randomWord, setRandomWord] = useState("");
    const [isWordsSame, setIsWordsSame] = useState(false);

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
        if(isPlay){
            const _words = wordInputs;
            if(checkIfWordsSame(_words, randomWord)) {
                setIsWordsSame(true);
            }
        }
    }, [randomWord, words]);

    return (
        <div className={"container-fluid"}>
            <WordSizePicker onWordSizeChange={(size) => setWordSize(size)} onPlayClick={(isPlay) => setIsPlay(isPlay)} />
            {isPlay && <WordBoxes words={words} size={wordSize}/>}
            {isPlay && <WordInputField size={wordSize} setWordInput={setWordInputs}/>}
            {isWordsSame && <WinModal />}
        </div>
    );
}
export default GamePage;
