function Lose({word}) {
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <div className="mt-3">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <h1 className={"fs-1 text-danger"}>Game Over!</h1>
                    <button onClick={handleButtonClick} type="button" className="btn btn-primary mt-2">Try Again!
                    </button>
                </div>
                <div className="col-6">
                    <h1 className={"fs-1 text-warning"}>Correct Word: <span className={"lose correct-word-display"}>{word}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Lose;