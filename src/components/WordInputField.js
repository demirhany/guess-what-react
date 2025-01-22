import '../style/WordInput.css';

function WordInputField(props) {
    const handleSubmit = (e) => {
        const input = document.getElementById("word_input");
        const newWord = input.value;
        const lowerCaseString = newWord.toLocaleLowerCase("tr");
        props.setWordInput((prevWords) => [...prevWords, lowerCaseString]);
        input.value = "";
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="input-form container-fluid">
                <input type="text" className="input-field" placeholder={"Enter your guess"}
                       aria-label={"Enter your guess"} maxLength={props.size} aria-describedby={"basic-addon1"}
                       id={"word_input"} style={{width: props.size * 70 + 84}}/>
            </form>
        </div>
    )
}

export default WordInputField;