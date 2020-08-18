const dnaPairs = require('./dna-pairs');

describe.only('dnaPairs', () => {
    it('returns an empty array when passed an empty string', () => {
        expect(dnaPairs('')).toEqual([]);
    });
    it('returns ["G"] when passed "G', () => {
        expect(dnaPairs('G')).toEqual(['G']);
    });
});