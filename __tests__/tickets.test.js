const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets");
const data = require("../data/tickets");

describe("testing getTicketByName()", () => {
    it("returns a ticket object if the given name matches", () => {
        expect(getTicketByName(data, "Adult Matinee")).toEqual({ id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 });
    })
    it("returns null if given invalid name", () => {
        expect(getTicketByName(data, "invalid name")).toEqual(null);
    })
})

describe("testing calculateTotalFromTicketNames()", () => {
    it("returns 0 if given empty array", () => {
        expect(calculateTotalFromTicketNames(data, [])).toEqual(0);
    })
    it("returns total value if given a matching name", () => {
        expect(calculateTotalFromTicketNames(data, ["Senior Matinee"])).toEqual(839);
    })
    it("returns total value if given multiple names", () => {
        expect(calculateTotalFromTicketNames(data, ["Senior Matinee",  "Child Matinee"])).toEqual(1508);
    })
})