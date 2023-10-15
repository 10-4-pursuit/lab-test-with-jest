
const { calculateTotalFromIDs, getConcessionByID } = require("../src/concessions.js")

const concessions = require("../data/concessions.js")

describe("getConcessionByID()", () => {
    it("should return an object with a matching ID or null when no ID is given", () => { expect(getConcessionByID(concessions, [])).toBe(null); })
    it("should return an object with a matching ID when one ID is given", () => {
        expect(getConcessionByID(concessions, "g9sZdG1hI")).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 });
    })
    it("should return an object with a matching ID when more than one ID is given", () => {
        expect(getConcessionByID(concessions, "0Qs9Yp2NL", "KzWBehRAD")).toEqual({ id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 }, { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 });
    })
})

describe("calculateTotalFromIDs()", () => {
    it("should calculate the total when ID is empty", () => { expect(calculateTotalFromIDs(concessions, [])).toBe(0); })
    it("should calculate the total when there is one ID", () => {
        expect(calculateTotalFromIDs(concessions, ["g9sZdG1hI"])).toBe(929);
    })
    it("should calculate the total when there is more than one ID", () => {
        expect(calculateTotalFromIDs(concessions, ["0Qs9Yp2NL", "KzWBehRAD"])).toBe(1728);
    })
})
 

