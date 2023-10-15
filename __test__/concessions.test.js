const { getConcessionByID, calculateTotalFromIDs } = require('../src/concessions.js');
const tickets = require('../data/concessions.js');


describe('getConcessionByID', () => {
    test('returns a valid concession by ID', () => {
        const result = getConcessionByID(tickets, "g9sZdG1hI");
        const expected = { "id": "g9sZdG1hI", "name": "Small Popcorn", "priceInCents": 929 }
        expect(result).toStrictEqual(expected);
    });

    test('returns null for an invalid ID', () => {
        const result = getConcessionByID(tickets, '4');
        expect(result).toBeNull();
    });
});

describe('calculateTotalFromIDs', () => {
    test('calculates the total price based on valid IDs', () => {
        const result = calculateTotalFromIDs(tickets, ['g9sZdG1hI', 'KzWBehRAD']); 
        expect(result).toBe(929 + 699); 
    });

    test('returns 0 for an empty list of IDs', () => {
        const result = calculateTotalFromIDs(tickets, []);
        expect(result).toBe(0);
    });
});
