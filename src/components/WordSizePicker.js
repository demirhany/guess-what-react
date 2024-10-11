function WordSizePicker({onWordSizeChange}) {
    const handleWordSizeChange = (event) => {
        onWordSizeChange(parseInt(event.target.value), 10);
    }
    return (
        <div className="row" id="word_size_parent">
            <div className="d-inline">
                Word Size:
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                       value="5" onChange={handleWordSizeChange} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    5
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                       value="6" onChange={handleWordSizeChange} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    6
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                       value="7" onChange={handleWordSizeChange} />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    7
                </label>
            </div>
        </div>
    )
}

export default WordSizePicker;

/*
* for (let i = 1; i < 4; i++) {
    word_size_children[i].addEventListener('change', (event) => {
        let size = word_size_children[i].children[0].value;
        word_input.setAttribute("maxlength", size);
        switch (size) {
            case "5":
                createLetterBoxes(5);
                break;
            case "6":
                createLetterBoxes(6);
                break;
            case "7":
                createLetterBoxes(7);
                break;
        }

    });
}
* */