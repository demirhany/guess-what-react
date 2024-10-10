import "bootstrap/dist/css/bootstrap.min.css"

function AppBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/icons/question_mark_icon.svg" alt={"Question mark icon"} />
                    Guess What?
                </a>
            </div>
        </nav>
    );
}

export default AppBar;