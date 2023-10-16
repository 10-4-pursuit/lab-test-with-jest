const { getConcessionByID,calculateTotalFromIDs } = require("../src/concessions")
const concessions = require("../data/concessions")



describe("getConcessionById", () => {
    test("finds the intended concession object based on the id supplied", () => {
        expect(getConcessionByID(concessions, "rNVCeVsri")).toEqual({"id": "rNVCeVsri", "name": "Candy", "priceInCents": 569});
    })

    test("returns null if no id is found", () => {
        expect(getConcessionByID(concessions, "tijtowteo")).toBe(null);
    })
    
})

describe("calculateTotalFromIDs", () => {
    test("gets the total value of all concessions", () => {
        expect(calculateTotalFromIDs(concessions, ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"])).toBe(3975)
    })

    test("returns zero if the array is empty", () => {
        expect(calculateTotalFromIDs(concessions,[])).toBe(0)
    })
})