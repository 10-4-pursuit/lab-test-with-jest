const concessions = require("../data/concessions");
const { getConcessionByID } = require("../src/concessions");
const { calculateTotalFromIDs } = require("../src/concessions");

// getConcessionByID()
describe("getConcessionByID()", () => {
    test("Returns a concession object with a matching ID", () => {
        const actual = getConcessionByID(concessions, "g9sZdG1hI");
        const expected = { 
            id: "g9sZdG1hI", 
            name: "Small Popcorn", 
            priceInCents: 929 
        };
        expect(actual).toStrictEqual(expected);
    });
});

describe("getConcessionByID()", () => {
    test("Returns null if ID does not match", () => {
        const actual = getConcessionByID(concessions, "blah");
        const expected = null;
        expect(actual).toStrictEqual(expected);
    });
});

// calculateTotalFromIDs()
describe("calculateTotalFromIDs()", () => {
    test("Returns the total value of all concessions from the `ids` array", () => {
        const ids = [
            "g9sZdG1hI", 
            "0Qs9Yp2NL", 
            "KzWBehRAD", 
            "NEHAsbTYk", 
            "rNVCeVsri"
        ];
        const expected = 3975;
        const actual = calculateTotalFromIDs(concessions, ids);
        expect(actual).toEqual(expected);
    });
});

describe("calculateTotalFromIDs()", () => {
    test("Returns 0 if 'ids' array is empty", () => {
        const ids = [];
        const expected = 0;
        const actual = calculateTotalFromIDs(concessions, ids);
        expect(actual).toEqual(expected);
    });
});








