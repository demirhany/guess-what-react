function Lose({word}) {
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <div className="mt-3">
            <div className="row d-flex justify-content-center">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <h1 className={"fs-1 text-danger d-inline"}>Game Over!</h1>
                    <h1 className={"fs-1 text-warning mx-5"}>Correct Word: <span
                        className={"lose correct-word-display"}>{word}</span></h1>
                    <button onClick={handleButtonClick} type="button" className="btn btn-info mx-2">Try Again!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Lose;