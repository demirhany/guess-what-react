function WordBoxes(props) {
    console.log(props.size);
    return (
        <div>
            {props.words.map((word, i) => {
                return (
                        <div className="row" key={"b" + i}>
                            <div className={"d-flex justify-content-center align-items-center"} key={"a" + i}>
                                {word.split('').map((char, k) => {
                                    return (
                                        <LetterBox char={char} key={"c" + i + k}/>
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

function LetterBox({char}) {
    return (
        <div className={"letter_box"}>
            {char}
        </div>
    )
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