const { getConcessionByID,
        calculateTotalFromIDs } = require("../src/concessions");

describe("getConcessionByID", () => {
  const concessions = [
    { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
    { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
    { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
    { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
    { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
  ];

  test("returns a valid concession object by ID", () => {
    const result = getConcessionByID(concessions, "0Qs9Yp2NL");

    expect(result).toEqual({
      id: "0Qs9Yp2NL",
      name: "Large Popcorn",
      priceInCents: 1029,
    });
  });

  test("returns null for non-existent ID", () => {
    const result = getConcessionByID(concessions, "NEHAsbTYU");
    expect(result).toBeNull();
  });

  test("returns null for empty concessions array", () => {
    const result = getConcessionByID([], "g9sZdG1hI");
    expect(result).toBeNull();
  });
});


const concessions = [
    { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
    { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
    { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
    { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
    { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
  ];
  
  // Define your test
  test('calculateTotalFromIDs calculates the total correctly', () => {
    // Test case 1: Calculate total for a list of valid concession IDs
    const ids1 = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD"];
    expect(calculateTotalFromIDs(concessions, ids1)).toBe(2657); 
  
    
    const ids2 = [];
    expect(calculateTotalFromIDs(concessions, ids2)).toBe(0); 
  
    // Test case 3: Calculate total for a list of non-existent IDs
    const ids3 = ['4', '5', '6'];
    expect(calculateTotalFromIDs(concessions, ids3)).toBe(0); // No matching concessions, so total should be 0
  });

