const changeCalculator = require('./change-calculator');


describe('changeCalculator', () => {
    it('should return a simple {"1": 1} object when passed 1', () => {
        expect(changeCalculator(1)).toBe({'1': 1});
    })
})