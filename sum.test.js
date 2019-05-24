const sum = require('./sum');

describe('adds 1 + 2 to equal 3', () => {
    it('should return 3',()=>{
        expect(sum(1,2)).toBe(3);
    });
});


