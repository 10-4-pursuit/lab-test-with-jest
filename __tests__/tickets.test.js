const { calculateTotalFromTicketNames, getTicketByName } = require("../src/tickets.js")

const tickets = require("../data/tickets.js")

describe("getTicketByName()", () => {
    it("should return null when there no ticket with given name", () => { expect(getTicketByName(tickets, "hsjfdk")).toBe(null); })
    it("should return the object assoiciated with the ticket name when there is one ticket name", () => {
        expect(getTicketByName(tickets, "Adult Matinee")).toEqual({ id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 });
    })
    it("should return the objects assoiciated with the ticket names when there is more one ticket name", () => {
        expect(getTicketByName(tickets, "Senior Matinee", "Child Matinee")).toEqual({ id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 });
    })
})

describe("calculateTotalFromTicketNames()", () => {
    it("Calculates a total based on the given ticket names if no ticket names are given", () => { expect(calculateTotalFromTicketNames(tickets, [])).toBe(0); })
    it("Calculates a total based on the given ticket names only if one ticket name is given ", () => {
        expect(calculateTotalFromTicketNames(tickets, ["Adult Matinee"])).toBe(949);
    })
    it("Calculates a total based on the given ticket names if more than one ticket name is given", () => {
        expect(calculateTotalFromTicketNames(tickets, ["Senior Matinee", "Child Matinee"])).toBe(1508);
    })
}) 