function WordSizePicker() {
    return (
        <div className="row" id="word_size_parent">
            <div className="d-inline">
                Word Size:
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked
                       value="5"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    5
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                       value="6"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    6
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                       value="7"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    7
                </label>
            </div>
        </div>
    )
}
export default WordSizePicker;