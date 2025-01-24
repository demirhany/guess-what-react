function Win({word}) {
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <div className="mt-3">
            <div className="row justify-content-center">
                <div className="col-3 d-flex justify-content-center">
                    <div aria-live="polite" className="visually-hidden">
                        Congrats! You won!. Play Again!
                    </div>
                    <h1 className={"fs-1 text-warning d-inline"}>Congrats! You won!</h1>
                    <button onClick={handleButtonClick} type="button" className="btn btn-success mx-2">Try
                        Again!
                    </button>
                </div>
                <div>

                </div>
            </div>


        </div>
    )
}

export default Win;