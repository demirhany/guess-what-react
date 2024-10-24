function WordBoxes({words, randomWord}) {
    return (
        <div>
            <div className="row">
                <h1 className={"fs-4"}>First Letter: {randomWord[0]}</h1>
            </div>
            {words.map((word, i) => {
                // const currentWordCount = { ...randomWordCount };
                return (
                    <div className="row" key={"b" + i}>
                        <div className={"d-flex justify-content-center align-items-center"} key={"a" + i}>
                            {word.split('').map((char, j) => {
                                let isEmpty = char === '\0';
                                let isCharInWord = false;
                                let isCorrect = false;

                                if (randomWord[j] === char) {
                                    isCorrect = true;
                                    console.log("is correct: "+isCorrect)
                                } else if (randomWord.includes(char)) {
                                    isCharInWord = true;
                                    console.log("isCharInWord: "+isCharInWord)
                                }

                                return (
                                    <LetterBox char={char} isCorrect={isCorrect} isEmpty={isEmpty}
                                               isCharInWord={isCharInWord} key={"c" + i + j}/>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default WordBoxes;

function LetterBox({char, isCorrect, isEmpty, isCharInWord}) {
    if (isEmpty) {
        return (
            <div className={"letter_box"}>
                <h1 className={"text-center fs-4"}>
                    {char}
                </h1>
            </div>
        )
    } else if (isCorrect) {
        return (
            <div
                className={`letter_box ${isCorrect ? 'correct' : 'incorrect'} fs-2 fw-bold d-flex justify-content-center align-items-center`}>
                {char}
            </div>
        )
    } else if (!isCharInWord && !isCorrect) {
        return (
            <div
                className={`letter_box ${isCorrect ? 'correct' : 'incorrect'} fs-2 fw-bold d-flex justify-content-center align-items-center`}>
                {char}
            </div>
        )
    } else if (isCharInWord){
        return (
            <div
                className={"letter_box in-word fs-2 fw-bold d-flex justify-content-center align-items-center"}>
                {char}
            </div>
        )
    }
}