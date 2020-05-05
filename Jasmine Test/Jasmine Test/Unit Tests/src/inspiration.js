class Email {

    constructor(number, message) {
        this._number = number;
        this._message = message;

    }

    //Getters and setters
    getNumber() {
        return this.number;
        setNumber = function (number) {
            this._number = number;
        }

    }

    getQuote() {
        return this.quote;
        setQuote = function (quote) {
            this._quote = quote;
        }

    }

    //Public methods
    toString() {

        console.log(`${this.getNumber()} to ${this.getQuote()} .`)
        return (`send email: ${this.getNumber()} to ${this.getQuote()} .`)
    }
}

var email = new Email('0623883653', 'where theres a will theres a way');


email.toString();