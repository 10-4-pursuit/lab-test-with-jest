const {getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets")
const tickets = require("../data/tickets")

describe("getTicketByName", () => {
    test("returns an object with ticket name based on the name given", () => {
expect(getTicketByName(tickets, "Adult Matinee")).toEqual({ "id": "6ha0u__54", "name": "Adult Matinee", "priceInCents": 949 })
    })

    test("returns null if no ticket name is found", () => {
        expect(getTicketByName(tickets, "Fright-Night")).toBe(null)
    })
})

describe("calculateTotalFromTicketNames", () => {
    test("calculates a total based on given ticket name", () => {
        expect(calculateTotalFromTicketNames(tickets, ["Adult Matinee", "Senior Matinee", "Child Matinee", "Adult Regular", "Senior Regular", "Child Regular"])).toBe(6114)
    })

    test("returns zero if there is no data in the array", () => {
        expect(calculateTotalFromTicketNames(tickets, [])).toBe(0)
    })
})