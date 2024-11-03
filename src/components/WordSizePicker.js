function WordSizePicker({onWordSizeChange, onPlayClick}) {
    const cards = document.getElementById("cards");
    const handleClick = (size) => {
        onWordSizeChange(size);
        onPlayClick(true);
        cards.innerHTML = '';
    };

    return (
        <div className="-custom-card-container" id={"cards"}>
            <div className="custom-card" onClick={() => handleClick(5)}>
                <img src={`${process.env.PUBLIC_URL}/images/five.png`} alt="Resim 1"/>
            </div>
            <div className="custom-card" onClick={() => handleClick(6)}>
                <img src={`${process.env.PUBLIC_URL}/images/five.png`} alt="Resim 2"/>
            </div>
            <div className="custom-card" onClick={() => handleClick(7)}>
                <img src={`${process.env.PUBLIC_URL}/images/five.png`} alt="Resim 3"/>
            </div>
        </div>
    )
}

export default WordSizePicker;