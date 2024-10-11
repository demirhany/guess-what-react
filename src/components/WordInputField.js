function wordInputField(props) {
    const handleSubmit = (e) => {
        const input = document.getElementById("word_input");
        input.value = "";
        e.preventDefault();
    }
    return (
        <div className="row mt-2" id={"input_parent"}>
            <form onSubmit={handleSubmit} className={"input-group"}>
                <input type="text" className="form-control" placeholder={"Word"}
                       aria-label={"Username"} maxLength={props.size} aria-describedby={"basic-addon1"}
                       id={"word_input"}/>
                <button type={"submit"} className={"btn btn-primary"}>Try</button>
            </form>
        </div>
    )
}

export default wordInputField;

/*
    <div class="row mt-2" id="input_parent">
            <form class="input-group">
                <input type="text" class="form-control" placeholder="Word" aria-label="Username"
                       aria-describedby="basic-addon1" maxlength="5" id="word_input">
                <button type="submit" class="btn btn-primary">Try</button>
            </form>
    </div>
  */