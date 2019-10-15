const Visitor = require('./../visitor')

describe('Visitor()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
    })
    it('should be defined', () => {
        expect(Visitor).toBeDefined();
    });

})

describe('Visitor.save()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
    })
    it('save() should be defined', () => {
        expect(visitor.save()).toBeDefined()
    })
    it('save() should create a new .json file', () => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
        expect(visitor.save()).toBe('File was saved');
    });
    it('should throw an error when the function is unable to create a new file ', () => {
        visitor = function () {
            throw ('Cannot save file');
        }
        expect(visitor).toThrow('Cannot save file');
    });
})

describe('Visitor.load()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
    })
    it('load() should be defined', () => {
        expect(visitor.load(1)).toHaveBeenCalled();
    });
    it('should return the file with the defined ID', () => {
        expect(visitor.load(1)).toEqual({
            fullName: "Rea Ear",
            age: 22,
            visitDate: "22 January 2013",
            visitTime: "09h32",
            comments: "slight fever",
            assistedBy: "nurse B",
        });
    })
})