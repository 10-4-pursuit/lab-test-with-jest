const tickets = require("../data/tickets")
const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets")


describe("get ticket by name", () => {
    it("should get a ticket object with a matching name", () => {
        expect(getTicketByName(tickets,"Adult Matinee")).toEqual({ id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 })
    })

    it("should return `null` if no object is found", () => {
        expect(getTicketByName(tickets, "Claire")).toBe(null)
    })

})



describe("calculates total from ticket names", () => {
    it("should calculate a total based on the given ticket names", () => {
        expect(calculateTotalFromTicketNames(tickets,["Adult Matinee", "Senior Matinee", "Child Matinee"])).toBe(2457)
    })

    it("should return error message if no object is found", () => {
        expect(calculateTotalFromTicketNames(tickets, [])).toBe("Error: invalid value provided")
    })


    it("should return error message if no object is found", () => {
        expect(calculateTotalFromTicketNames(tickets)).toEqual("Error: invalid value provided")
    })

})
