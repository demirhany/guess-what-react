export class LetterBoxComposite {
    constructor(char) {
        this.char = char;
    }

    render() {
        return (
            <div className={"letter_box"}>
                {this.char}
            </div>
        );
    }
}


export class CorrectLetterBox extends LetterBoxComposite {
    render() {
        return (
            <div className={"letter_box correct fs-2 fw-bold d-flex justify-content-center align-items-center"}>
                {this.char}
            </div>
        );
    }
}

export class NotInWordLetterBox extends LetterBoxComposite {
    render() {
        return (
            <div className={"letter_box not-in-word fs-2 fw-bold d-flex justify-content-center align-items-center"}>
                {this.char}
            </div>
        );
    }
}

export class InWordLetterBox extends LetterBoxComposite {
    render() {
        return (
            <div className={"letter_box in-word fs-2 fw-bold d-flex justify-content-center align-items-center"}>
                {this.char}
            </div>
        );
    }
}