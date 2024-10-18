function Lose() {
    alert("You Lose!");
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <button onClick={handleButtonClick} type="button" className="btn btn-primary mt-2">Try Again!
        </button>
    )
}

export default Lose;