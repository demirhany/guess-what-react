import WordSizePicker from "../components/WordSizePicker";
import WordBoxes from "../components/WordBoxes";

function GamePage(){

    return (
        <div className={"container-fluid"}>
            <WordSizePicker />
            <WordBoxes words={[
                'aliva',
                'denem',
                'word1',
                'ioioi',
                'kanep',
            ]} size={5}/>
        </div>
    );
}
export default GamePage;