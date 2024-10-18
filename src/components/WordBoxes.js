function WordBoxes({words, randomWord}) {
    return (
        <div>
            {words.map((word, i) => {
                return (
                    <div className="row" key={"b" + i}>
                        <div className={"d-flex justify-content-center align-items-center"} key={"a" + i}>
                            {word.split('').map((char, j) => {
                                let isEmpty = true;
                                const isCorrect = char === randomWord[j];
                                isEmpty = char === '\0';
                                return (
                                    <LetterBox char={char} isCorrect={isCorrect} isEmpty={isEmpty} key={"c" + i + j}/>
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

function LetterBox({char, isCorrect, isEmpty}) {
    if(isEmpty) {
        return (
            <div className={"letter_box"}>
                <h1 className={"text-center fs-4"}>
                    {char}
                </h1>
            </div>
        )
    } else{
        return (
            <div className={`letter_box ${isCorrect ? 'correct' : 'incorrect'} fs-2 fw-bold d-flex justify-content-center align-items-center`}>
                    {char}
            </div>
        );
    }
}

/*
function createLetterBoxes(number) {
    letter_boxes_parent.innerHTML = ``;
    for(let i = 0; i < 6; i++) {
        let row_parent_element = document.createElement("div");
        let row_element = document.createElement("div");
        row_element.setAttribute("class", "d-flex align-items-center justify-content-center");
        for(let i = 0; i < number; i++) {
            let box_element = document.createElement("div");
            box_element.setAttribute("style", "min-width: 70px; min-height: 70px; max-height: 70px; max-width: 70px; background-color: darkgray; margin: 5px");
            row_element.appendChild(box_element);
        }
        row_parent_element.appendChild(row_element);
        letter_boxes_parent.appendChild(row_parent_element);
    }
}
 */