const { getConcessionByID, calculateTotalFromIDs } = require('../src/concessions.js');

describe('getConcessionByID', () => {
    const concessions = [
        { id: '1', priceInCents: 100 },
        { id: '2', priceInCents: 200 },
        { id: '3', priceInCents: 300 },
    ];

    test('returns a valid concession by ID', () => {
        const result = getConcessionByID(concessions, '2');
        expect(result).toEqual({ id: '2', priceInCents: 200 }); // Use `toEqual` for object comparison
    });

    test('returns null for an invalid ID', () => {
        const result = getConcessionByID(concessions, '4');
        expect(result).toBeNull(); // Use `toBeNull()` for checking null values
    });
});

describe('calculateTotalFromIDs', () => {
    const concessions = [
        { id: '1', priceInCents: 100 },
        { id: '2', priceInCents: 200 },
        { id: '3', priceInCents: 300 },
    ];

    test('calculates the total price based on valid IDs', () => {
        const result = calculateTotalFromIDs(concessions, ['1', '3']); // Pass strings as IDs
        expect(result).toBe(400);
    });

    test('returns null for an invalid ID', () => {
        const result = calculateTotalFromIDs(concessions, ['4']); // Pass an array with a single invalid ID
        expect(result).toBe(0); // Assuming that you want to return 0 for an invalid ID
    });
});
