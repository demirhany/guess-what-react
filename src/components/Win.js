function Win({word}) {
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <div className="mt-3">
            <div className="row justify-content-center">
                <div className="col-3">
                    <h1 className={"fs-1 text-warning"}>Congrats! You won!</h1>
                    <button onClick={handleButtonClick} type="button" className="btn btn-success mt-2">Try Again!
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Win;