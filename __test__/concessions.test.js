const concessions = require("../data/concessions");
const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions")

describe('this will test getConcessionByID', () => {
    const concessions = [
      { id: "g9sZdG1hI", name: "Small Popcorn" },
      { id: "0Qs9Yp2NL", name: "Large Popcorn" },
      { id: "KzWBehRAD", name: "Small Soda" },
      { id: "NEHAsbTYk", name: "Large Soda" },
      { id: "rNVCeVsri", name: "Candy" },
    ];

    test('return the concession value when given a value id', () => {
        const concession = getConcessionByID(concessions, '0Qs9Yp2NL');
        expect(concession).toEqual({id: '0Qs9Yp2NL', name: 'Large Popcorn'})
    });

    test('return `null` when no object is found with the given id', () => {
        const concession = getConcessionByID(concessions);
        expect(concession).toBe(null)
    });

    test('should return `null` if the concessions array is empty', () => {
        const concessions = [];

        const concession = getConcessionByID(concessions, 'g9sZdG1hI');

        expect(concession).toBe(null);
    });
});

describe("this will test calculateTotalFromIDs", () => {
  const concessions = [
    { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
    { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
    { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
    { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
    { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
  ];

  describe('calculateTotalFromIDs()', () => {
    test('should calculate the total value of all concessions from the `ids` array', () => {
      const ids = ['g9sZdG1hI', 'NEHAsbTYk'];
      const total = calculateTotalFromIDs(concessions, ids);
      expect(total).toEqual(1678);
    });
  
    test('should return 0 if no concessions are found', () => {
      const ids = ['4', '5'];
      const total = calculateTotalFromIDs(concessions, ids);
      expect(total).toEqual(0);
    });
  
    test('should return 0 if the concessions array is empty', () => {
      const ids = ['g9sZdG1hI', 'NEHAsbTYk'];
      const concessions = [];
      const total = calculateTotalFromIDs(concessions, ids);
      expect(total).toEqual(0);
    });
  
    test('should return the correct total value even if the `ids` array is out of order', () => {
      const ids = ['NEHAsbTYk', 'g9sZdG1hI'];
      const total = calculateTotalFromIDs(concessions, ids);
      expect(total).toEqual(1678);
    });
  });
});

