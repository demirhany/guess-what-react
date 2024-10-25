function Win({word}) {
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <div className="mt-3">
            <div className="row">
                <div className="col-6">
                    <h1 className={"fs-1"}>Congrats! You won!</h1>
                </div>
                <div className="col-6">
                    <h1 className={"fs-1"}>Correct Word: <span className={"win correct-word-display"}>{word}</span>
                    </h1>
                </div>
            </div>

            <button onClick={handleButtonClick} type="button" className="btn btn-primary mt-2">Try Again!
            </button>
        </div>
    )
}


export default Win;