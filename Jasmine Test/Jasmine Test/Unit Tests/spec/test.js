describe('Should toString() test', function () {

    it('call the function getNumber()', function () {
        var email = new Email("0623883653", "where theres a will theres a way");

        spyOn(email, "getNumber");


        email.toString();

        expect(email.getNumber).toHaveBeenCalled();
    })

    it('call the function getQuote()', function () {
        var email = new Email("0623883653", "where theres a will theres a way");

        spyOn(email, "getQuote");

        email.toString();

        expect(email.getQuote).toHaveBeenCalledWith();

    })
})