function Win() {
    alert("You Win!");
    const handleButtonClick = () => {
        window.location.reload();
    }
    return (
        <button onClick={handleButtonClick} type="button" className="btn btn-primary mt-2">Try Again!
        </button>
    )
}

export default Win;