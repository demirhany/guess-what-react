import "bootstrap/dist/css/bootstrap.min.css"
import { MdQuestionMark } from "react-icons/md";

function AppBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <MdQuestionMark />
                </a>
                <div className={"fs-4"}>Guess What</div>
            </div>
        </nav>
    );
}

export default AppBar;