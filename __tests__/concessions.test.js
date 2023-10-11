const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");
const data = require("../data/concessions");

describe("testing getConcessionByID()", () => {
    it("returns an object if given a matching id", () => {
        expect(getConcessionByID(data,  "g9sZdG1hI")).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 });
    })
    it("returns null if given invalid id", () => {
        expect(getConcessionByID(data, "invalid id")).toEqual(null);
    })
})

describe("testing calculateTotalFromIDs()", () => {
    it("returns 0 if given empty array", () => {
        expect(calculateTotalFromIDs(data, [])).toEqual(0);
    })
    it("returns total value if given a matching id", () => {
        expect(calculateTotalFromIDs(data, ["0Qs9Yp2NL"])).toEqual(1029);
    })
    it("returns total value if given multiple ids", () => {
        expect(calculateTotalFromIDs(data, ["0Qs9Yp2NL", "KzWBehRAD"])).toEqual(1728);
    })
})
