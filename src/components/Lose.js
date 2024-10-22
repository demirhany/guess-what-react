function Lose({word}) {
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h1 className={"fs-1 "}>Game Over!</h1>
                </div>
                <div className="col-6">
                    <h1 className={"fs-1"}>Correct Word: <span className={"lose correct-word-display"}>{word}</span></h1>
                </div>
            </div>

            <button onClick={handleButtonClick} type="button" className="btn btn-primary mt-2">Try Again!
            </button>
        </div>
    )
}

export default Lose;