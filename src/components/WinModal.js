function WinModal() {
    const handleButtonClick = () => {
        window.location.reload();
    }
    alert("You Win!");
    return (
        <button onClick={handleButtonClick} type="button" className="btn btn-primary mt-2">Try Again!
        </button>
    )
}

export default WinModal;