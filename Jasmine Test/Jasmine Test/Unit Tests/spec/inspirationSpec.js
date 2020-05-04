

describe('Should toString() test', function() {

    it('call the function getQoute()', function() {
        var person1 = new Person( "where theres a will theres a way", '0623883653' );


        
        person1.toString();

        expect(person1.getQoute).toHaveBeenCalled();
    })

    it('call the function getNumber() with a variable', function() {
        var person1 = new Person(  "where theres a will theres a way", '0623883653' );

        spyOn(person1, "getNumber");

        person1.toString();

        expect(person1.getNumber).toHaveBeenCalledWith(3, 3);
        
    })
})
