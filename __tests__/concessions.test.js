const concessions = require("../data/concessions")
const {getConcessionByID,calculateTotalFromIDs } = require("../src/concessions")



describe("get concession by id", () => {
    it("should get a concession object with a matching ID", () => {
        expect(getConcessionByID(concessions,"g9sZdG1hI")).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 })
    })

    it("should return `null` if no object is found", () => {
        expect(getConcessionByID(concessions, "abcd123")).toBe(null)
    })

})



describe("calculate total from ids", () => {
    it("should calculate a total based on the given concession IDs", () => {
        expect(calculateTotalFromIDs(concessions,["g9sZdG1hI","0Qs9Yp2NL","KzWBehRAD"])).toEqual(2657)
    })

    it("should calculate a total based on the given concession IDs", () => {
        expect(calculateTotalFromIDs(concessions, ["rNVCeVsri"])).toBe(569)
    })

})

