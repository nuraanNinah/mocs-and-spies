var inspiration = function () {
    return 'live, love , laugh';
}

class Email {
  
    constructor(qoute, number) {

        this._qoute = qoute;
        this._number = number;
    }

    //Getters and setters
    getQoute = function () {

        console.log(this._qoute);
        return this.qoute;
    }
    setQoute = function (qoute) { this._qoute = qoute; }

    getNumber = function (numbering) { return this._number + numbering; }
    setNumber = function (number) { this._number = number; }

    //Public methods
    addInspiration = function () { this._number++; }
    toString = function () {

        console.log(`send email ${this.getQoute()} to ${this.getnumber()} .`)
        return (`send email ${this.getQoute()} to ${this.getNumber(3, 3)} .`)
    }
}

var email = new Email('where theres a will theres a way', '0623883653');

email.getQoute();

email.toString();
