const counterSpy = require('./counter-spy');

describe('counterSpy', () => {
    it('returns [] when passed []', () => {
        expect(counterSpy([])).toEqual([]);
    });
    it('returns [] when passed Daryl', () => {
        expect(counterSpy(['Daryl'])).toEqual([]);
    });
    it('returns ["Harriet"] when passed ["Harriet"]', () => {
        expect(counterSpy(['Harriet'])).toEqual(['Harriet']);
    });
    it('returns ["Harriet"] when passed ["Daryl", "Harriet"]', () => {
        expect(counterSpy(['Daryl', 'Harriet'])).toEqual(['Harriet']);
    });
});