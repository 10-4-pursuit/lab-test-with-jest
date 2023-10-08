const {getConcessionByID, calculateTotalFromIDs,} = require("../src/concessions")

const concessionsData = require("../data/concessions");

describe("Can get concession by ID:", () => {
    it("can return a concession object with a matching ID.", () => {
        const actual = getConcessionByID(concessionsData, "0Qs9Yp2NL");
        const expected = { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 };
        expect(actual).toStrictEqual(expected);
    })
    it("can return `null` if no object is found.", () => {
        const actual = getConcessionByID(concessionsData, "code");
        const expected = null;
        expect(actual).toStrictEqual(expected);
    })
})

describe("Can calculate Total From IDs", () => {
    it("can return the total value of all concessions from the `ids` array.", () => {
        const ids = [
            "g9sZdG1hI",
            "0Qs9Yp2NL",
            "KzWBehRAD",
            "NEHAsbTYk",
            "rNVCeVsri"
        ];
        const actual = calculateTotalFromIDs(concessionsData, ids);
        const expected = 3975;
        expect(actual).toStrictEqual(expected);
    })
    it("can return 0 if array is empty.", () => {
        const ids = [];
        const actual = calculateTotalFromIDs(concessionsData, ids);
        const expected = 0;
        expect(actual).toStrictEqual(expected);
    })
})