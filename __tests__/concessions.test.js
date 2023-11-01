const {
    getConcessionByID,
    calculateTotalFromIDs
  } = require('../src/concessions');
  
  const concessions = [
    { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
    { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
    { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
    { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
    { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
  ];
  
  describe('getConcessionByID', () => {
    test('should return the correct concession object by ID', () => {
      const expectedConcession = { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 };
      expect(getConcessionByID(concessions, "KzWBehRAD")).toEqual(expectedConcession);
    });
  
    test('should return null for non-existent ID', () => {
      expect(getConcessionByID(concessions, "randomID")).toBeNull();
    });
  });
  
  describe('calculateTotalFromIDs', () => {
    test('should return the correct total value for given concession IDs', () => {
      const selectedConcessions = ["g9sZdG1hI", "KzWBehRAD", "rNVCeVsri"];
      const expectedTotal = 929 + 699 + 569; // Small Popcorn + Small Soda + Candy
      expect(calculateTotalFromIDs(concessions, selectedConcessions)).toBe(expectedTotal);
    });
  
    test('should handle empty concession IDs array', () => {
      expect(calculateTotalFromIDs(concessions, [])).toBe(0);
    });
  
    test('should return 0 for non-existent concession IDs', () => {
      const nonExistentConcessions = ["randomID1", "randomID2"];
      expect(calculateTotalFromIDs(concessions, nonExistentConcessions)).toBe(0);
    });
  });