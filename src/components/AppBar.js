import "bootstrap/dist/css/bootstrap.min.css"
import {MdQuestionMark} from "react-icons/md";
import '../style/AppBar.css'

function AppBar() {
    return (
        <nav className="app-bar">
            <div className="navbar-content">
                <div className="logo">
                    <MdQuestionMark/>
                </div>
                <div className="navbar-title">Guess What</div>
            </div>
        </nav>

    );
}

export default AppBar;