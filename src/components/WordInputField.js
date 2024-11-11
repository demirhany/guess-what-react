import '../style/WordInput.css';

function WordInputField(props) {
    const handleSubmit = (e) => {
        const input = document.getElementById("word_input");
        const newWord = input.value;
        props.setWordInput((prevWords) => [...prevWords, newWord]);
        input.value = "";
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="input-form container-fluid">
                <input type="text" className="input-field" placeholder={"Word"}
                       aria-label={"Username"} maxLength={props.size} aria-describedby={"basic-addon1"}
                       id={"word_input"} style={{width: props.size * 70 + 84}}/>
            </form>
        </div>
    )
}

export default WordInputField;