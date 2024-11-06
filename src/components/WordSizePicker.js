import {useState} from "react";

const colorClasses = ['custom-card-1', 'custom-card-2', 'custom-card-3'];

function WordSizePicker({onWordSizeChange, onPlayClick}) {
    const [colorIndex, setColorIndex] = useState(0);

    const cards = document.getElementById("cards");
    const handleClick = async (size) => {
        setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colorClasses.length);
        await delay(3000);
        onWordSizeChange(size);
        onPlayClick(true);
        cards.innerHTML = '';
    };

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div className="custom-card-container" id={"cards"}>
            {colorClasses.map((colorClass, index) => (
                <div
                    key={index}
                    className={`custom-card ${colorClasses[(colorIndex + index) % colorClasses.length]}`}
                    onClick={() => handleClick(index + 5)}
                >
                    <span className="custom-card-title fs-2">
                        {index + 5} {/* For displaying numbers 5, 6, and 7 */}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default WordSizePicker;